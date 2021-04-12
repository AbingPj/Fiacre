<template>
    <div>

        <ShareNetwork
            network="facebook"
            :url=link
            title="Fiacre Referral Link"
            description="Invite and send your referral trough email. You can get rewards after they submitted your referral code."
            quote="Invite and send your referral trough email."
            hashtags="fiacre, referral"
        >
            <i class="fas fa-share-square"></i> Share on Facebook
        </ShareNetwork>

    </div>
</template>

<script>
export default {
  props: ["link"],
};
</script>