<!-- Modal -->
<div class="modal fade" id="expiredModalShow" tabindex="-1" role="dialog" aria-labelledby="expiredModalShow" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="expiredModalShow">Confrim Renew Subcription</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col">
                    {{ html()->form('POST', route('frontend.auth.renew.sunclub.subscription'))->open() }}
                        <h4 class="text-center mb-5">Your Sunclub membership subscription has been expired.
                             Do you want to continue it and charge?
                        </h4>
                        <div class="row">
                            <div class="col">
                                <button type="button" id="cancelRenew" class="btn btn-outline-danger btn-block">Cancel</button>
                            </div>
                            <div class="col">
                                <button type="submit" onclick="LoadingOverlay()" class="btn btn-success btn-block">Yes</button>
                            </div>
                        </div>
                        @captchaHTML
                    {{ html()->form()->close() }}
                </div>
            </div>

            {{-- {{ html()->hidden('captcha_status', 'true') }} --}}
        </div>


    </div>
  </div>
</div>



@push('after-scripts')
    @if(session()->get('expired_message'))
        <script>
            $(function() {
                $('#expiredModalShow').modal({
                    show: true
                });
            });
        </script>
    @endif

    <script type="text/javascript" >

            document.getElementById('cancelRenew').onclick = function(){
                LoadingOverlay();
                let cart = [];
                let lastcart = JSON.parse(localStorage.getItem("cart") || "null") || [];
                cart = lastcart;

                if (cart === undefined || cart.length == 0) {
                    window.location.href = "/products";
                }else{
                    LoadingOverlayHide();
                    $("#expiredModalShow").modal("hide");
                }

            }
            // $("#cancelRenew").click(function(e) {

            //     alert("Hello!");


            //     LoadingOverlay();

            //     let cart = [];
            //     let lastcart =
            //         (await JSON.parse(localStorage.getItem("cart") || "null")) || [];
            //     cart = lastcart;

            //     if (cart === undefined || cart.length == 0) {
            //         window.location.href = "/products";
            //     }else{
            //         LoadingOverlayHide();
            //         $("#expiredModalShow").modal("hide");
            //     }

            // });

    </script>
@endpush





