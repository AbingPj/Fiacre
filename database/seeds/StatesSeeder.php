<?php

use App\Models\State;
use Illuminate\Database\Seeder;

class StatesSeeder extends Seeder
{
    public function run()
    {
        $states = array(
            "1398, 'Howland Island', 233, 'UM-84'",
            "1399, 'Delaware', 233, 'DE'",
            "1400, 'Alaska', 233, 'AK'",
            "1401, 'Maryland', 233, 'MD'",
            "1402, 'Baker Island', 233, 'UM-81'",
            "1403, 'Kingman Reef', 233, 'UM-89'",
            "1404, 'New Hampshire', 233, 'NH'",
            "1405, 'Wake Island', 233, 'UM-79'",
            "1406, 'Kansas', 233, 'KS'",
            "1407, 'Texas', 233, 'TX'",
            "1408, 'Nebraska', 233, 'NE'",
            "1409, 'Vermont', 233, 'VT'",
            "1410, 'Jarvis Island', 233, 'UM-86'",
            "1411, 'Hawaii', 233, 'HI'",
            "1412, 'Guam', 233, 'GU'",
            "1413, 'United States Virgin Islands', 233, 'VI'",
            "1414, 'Utah', 233, 'UT'",
            "1415, 'Oregon', 233, 'OR'",
            "1416, 'California', 233, 'CA'",
            "1417, 'New Jersey', 233, 'NJ'",
            "1418, 'North Dakota', 233, 'ND'",
            "1419, 'Kentucky', 233, 'KY'",
            "1420, 'Minnesota', 233, 'MN'",
            "1421, 'Oklahoma', 233, 'OK'",
            "1422, 'Pennsylvania', 233, 'PA'",
            "1423, 'New Mexico', 233, 'NM'",
            "1424, 'American Samoa', 233, 'AS'",
            "1425, 'Illinois', 233, 'IL'",
            "1426, 'Michigan', 233, 'MI'",
            "1427, 'Virginia', 233, 'VA'",
            "1428, 'Johnston Atoll', 233, 'UM-67'",
            "1429, 'West Virginia', 233, 'WV'",
            "1430, 'Mississippi', 233, 'MS'",
            "1431, 'Northern Mariana Islands', 233, 'MP'",
            "1432, 'United States Minor Outlying Islands', 233, 'UM'",
            "1433, 'Massachusetts', 233, 'MA'",
            "1434, 'Arizona', 233, 'AZ'",
            "1435, 'Connecticut', 233, 'CT'",
            "1436, 'Florida', 233, 'FL'",
            "1437, 'District of Columbia', 233, 'DC'",
            "1438, 'Midway Atoll', 233, 'UM-71'",
            "1439, 'Navassa Island', 233, 'UM-76'",
            "1440, 'Indiana', 233, 'IN'",
            "1441, 'Wisconsin', 233, 'WI'",
            "1442, 'Wyoming', 233, 'WY'",
            "1443, 'South Carolina', 233, 'SC'",
            "1444, 'Arkansas', 233, 'AR'",
            "1445, 'South Dakota', 233, 'SD'",
            "1446, 'Montana', 233, 'MT'",
            "1447, 'North Carolina', 233, 'NC'",
            "1448, 'Palmyra Atoll', 233, 'UM-95'",
            "1449, 'Puerto Rico', 233, 'PR'",
            "1450, 'Colorado', 233, 'CO'",
            "1451, 'Missouri', 233, 'MO'",
            "1452, 'New York', 233, 'NY'",
            "1453, 'Maine', 233, 'ME'",
            "1454, 'Tennessee', 233, 'TN'",
            "1455, 'Georgia', 233, 'GA'",
            "1456, 'Alabama', 233, 'AL'",
            "1457, 'Louisiana', 233, 'LA'",
            "1458, 'Nevada', 233, 'NV'",
            "1459, 'Iowa', 233, 'IA'",
            "1460, 'Idaho', 233, 'ID'",
            "1461, 'Rhode Island', 233, 'RI'",
            "1462, 'Washington', 233, 'WA'",
            "4851, 'Ohio', 233, 'OH'"
        );


        $newstates = [];
        foreach ($states as $key => $value) {
            $newvalue = explode(',', $value);
            array_push($newstates, [
                'id' => trim($newvalue[0]),
                'name' => str_replace("'", "", trim($newvalue[1])),
                'country_id' => trim($newvalue[2]),
                'iso2' => str_replace("'", "", trim($newvalue[3])),
            ]);
        }



        foreach ($newstates as $key => $state) {
            $this->store($state);
        }
    }
    private function store($data)
    {
        $user = State::find($data['id']);

        if (isset($user)) {
            $user->update($data);
        } else {
            State::create($data);
        }
    }
}
