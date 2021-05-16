<template>
    <div>

        <ShareNetwork
            network="facebook"
            :url=link
            title="OHeavenly Referral Link"
            description="Invite and send your referral through email. You can get rewards after they submitted your referral code."
            quote="Invite and send your referral through email."
            hashtags="oheavenly, referral"
        >
            <i class="fas fa-share-square"></i> Share and Earn!
        </ShareNetwork>

    </div>
</template>

<script>
export default {
  props: ["link"],
};
</script>