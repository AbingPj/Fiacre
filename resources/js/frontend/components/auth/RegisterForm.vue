<template>
    <div class="text-center">
        <ValidationObserver v-slot="{ invalid }">
            <h1 class="s-header">FIACRE FOODS</h1>
            <p class="s-sub-header">
                Please complete to create your account.
            </p>
            <b-row>
                <b-col>
                    <ValidationProvider name="firstName" rules="required">
                        <md-field slot-scope="{ errors }">
                            <label>First Name</label>
                            <md-input
                                v-model="firstName"
                                name="first_name"
                            ></md-input>
                            <span class="md-helper-text text-danger">
                                {{ errors[0] }}
                            </span>
                        </md-field>
                    </ValidationProvider>
                </b-col>
                <b-col>
                    <ValidationProvider name="lastName" rules="required">
                        <md-field slot-scope="{ errors }">
                            <label>Last Name</label>
                            <md-input
                                v-model="lastName"
                                name="last_name"
                            ></md-input>
                            <span class="md-helper-text text-danger">
                                {{ errors[0] }}
                            </span>
                        </md-field>
                    </ValidationProvider>
                </b-col>
            </b-row>
            <ValidationProvider name="email" rules="required|email">
                <md-field slot-scope="{ errors }">
                    <label>Email</label>
                    <md-input v-model="email" name="email"></md-input>
                    <span class="md-helper-text text-danger">{{
                        errors[0]
                    }}</span>
                </md-field>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required">
                <md-field slot-scope="{ errors }">
                    <label>Password</label>
                    <md-input
                        type="password"
                        v-model="password"
                        name="password"
                    ></md-input>
                    <span class="md-helper-text text-danger">{{
                        errors[0]
                    }}</span>
                </md-field>
            </ValidationProvider>
            <ValidationProvider
                name="confirmPassword"
                :rules="`required|is:${password}`"
            >
                <md-field slot-scope="{ errors }">
                    <label>Confirm Password</label>
                    <md-input
                        type="password"
                        v-model="confirmPassword"
                        name="password_confirmation"
                    ></md-input>
                    <span class="md-helper-text text-danger">{{
                        errors[0]
                    }}</span>
                </md-field>
            </ValidationProvider>
            <!-- <ValidationProvider name="contactNumber" rules="required">
                <md-field slot-scope="{ errors }">
                    <label>Contact Number</label>
                    <md-input
                        v-model="contactNumber"
                        name="contact_number"
                    ></md-input>
                    <span class="md-helper-text text-danger">{{
                        errors[0]
                    }}</span>
                </md-field>
            </ValidationProvider> -->

            <!-- <vue-phone-number-input
            @update="onUpdate"
            :default-country-code="defaultCountry"
            :only-countries="countriesList"
            v-model="contactNumber2" /> -->
             <div v-if="referral_code && referral_code_is_valid == 1" class="row">
                <div class="col-12">
                     <label class="text-left float-left">Referral Code</label>
                </div>
                <div class="col-12 mb-3">
                     <input id="referral_code" :value="referral_code" name="referral_code" readonly class="form-control">
                </div>
                <!-- <div class="col-12 mb-3">
                     <label v-if="referral_code_is_valid == '1'" class="text-success float-left" >Referral code is valid.</label>
                     <label v-else class="text-danger float-left" >Referral code is not valid anymore.</label>
                </div> -->
            </div>
            <div class="row">
                <div class="col">
                     <label class="text-left float-left">Contact Number</label>
                </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-3">
                    <select name="contact_number_type" class="custom-select">
                        <option selected value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Cell">Cell</option>
                    </select>
            </div>
                <div class="form-group col-md-9">
                    <!-- <ValidationProvider name="contactNumber" rules="required"> -->
                        <vue-phone-number-input
                        name="contact_number"
                        @update="onUpdate"
                        :default-country-code="defaultCountry"
                        no-country-selector
                        :error="results.isValid == false"
                        v-model="contactNumber2" />
                     <!-- </ValidationProvider> -->
                     <label class="text-light" :class="results.isValid == false? 'd-none':'d-block'">.</label>
                     <label class="text-danger" :class="results.isValid != false? 'd-none':'d-block'">Contact Number is not valid in US.</label>
                </div>
            </div>


            <ValidationProvider name="terms" rules="required">
                <!-- <ValidationProvider name="agreedToTerms" :rules="agreedToTerms == true"> -->
                <!-- <ValidationProvider name="" :rules="`required|is:${agreedToTerms}`"> -->
                <div slot-scope="{ errors }">
                    <md-checkbox
                        v-model="agreedToTerms"
                        name="agreed_terms"
                    ></md-checkbox>
                    <span style="padding-bottom:2px;">
                        Check here to indicate that you have read and agree to
                        our
                        <a href="/terms-of-use">Terms of Use</a>.
                    </span>

                    <span class="md-helper-text text-danger">{{
                        errors[0]
                    }}</span>
                </div>
            </ValidationProvider>
            <b-row class="my-4">
                <b-col md="4" offset="4">
                    <!-- <h1>{{invalid}}</h1> -->
                    <b-button
                        type="submit"
                        :disabled="invalidMethod(invalid, buttonSignUpClick)"
                        :class="
                            invalidMethod(invalid, buttonSignUpClick)
                                ? ''
                                : 's-btn-sign-up'
                        "
                        block
                        size="lg"
                        @click="signUp"
                        >Sign up</b-button
                    >
                </b-col>
            </b-row>
        </ValidationObserver>
    </div>
</template>

<script type="application/javascript">

// import VuePhoneNumberInput from 'vue-phone-number-input';
// import 'vue-phone-number-input/dist/vue-phone-number-input.css';
// Vue.component('vue-phone-number-input', VuePhoneNumberInput);

import { extend } from "vee-validate";
import { required, email, is } from "vee-validate/dist/rules";
extend("required", {
    ...required,
    message: "This field is required"
});
extend("email", email);
extend("is", is);
export default {
// components: {
//     "vue-phone-number-input": VuePhoneNumberInput,
//   },
    props:['referral_code','referral_code_is_valid'],
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            contactNumber: "",
            agreedToTerms: false,
            buttonSignUpClick: false,
            contactNumber2: null,
            results: {},
            defaultCountry: 'US',
            countriesList: ['US'],
        };
    },
    methods: {
        onUpdate (payload) {
            this.results = payload
        },
        signUp() {
            // LoadingOverlay();
            setTimeout(() => {
                this.buttonSignUpClick = true;
            }, 500);
        },
        invalidMethod(invalid, btnClick) {
            if (btnClick == true) {
                return true;
            } else {
                if (invalid == true) {
                    return true;
                } else {
                    if (this.agreedToTerms == true && this.results.isValid == true) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }
    }
};
</script>

<style scoped>
.md-checkbox.md-theme-default.md-checked .md-checkbox-container {
    background-color: #339f25 !important;
    border-color: #339f25 !important;
}
.s-font-color {
    color: #43425d;
}
.sunfarmacy-bg-blue {
    background: rgba(36, 35, 72, 1);
}
.s-sign-up {
    font-family: "Source Sans Pro", sans-serif;
}
.s-header {
    font-weight: bold;
    letter-spacing: 7px;
    color: #43425d;
    opacity: 1;
}
.s-sub-header {
    letter-spacing: 0px;
    color: #4d4f5c;
    opacity: 0.5;
}
.s-terms {
    letter-spacing: 0px;
    color: #43425d;
    opacity: 1;
}
.s-btn-sign-up {
    color: white !important;
    background: #339f25 0% 0% no-repeat padding-box !important;
    border: 1px solid #43425d;
    border-radius: 4px;
    opacity: 1;
    margin: 0;
}
.s-btn-sign-up:active {
    color: white;
    background-color: #339f25 !important;
}
.s-sign-in {
    text-decoration: underline;
    letter-spacing: 0px;
    color: #43425d;
    opacity: 1;
}
/* * {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
} */
</style>
