$(document).ready(function() {
    $('input[value=3]').prop('checked', true);
    $(".number_of_licenses__select :contains('10')").prop("selected", "selected");

    changeViewSelected();

    var prevRadio = $('input[name="license"]:checked').val();
    $('.item__radio').change(function() {
        changeViewSelected();
        changeViewDisabled();

        prevRadio = $(this).val();

        calculatePrice();

        $(".total__selected_plan__number").text('#' + prevRadio);
    });

    $('.number_of_licenses__select').on('change', function () {
        prevRadio = $('input:radio:checked').val();
        calculatePrice();
    });

    function changeViewSelected() {
        $("input:radio:checked").each(function(){
            $(this).parent().parent().css('background-color', '#ebf4f7');
            $(this).parent().parent().css('border', '1px solid #e2e2e2');
        });
    }

    function changeViewDisabled() {
        $('input[value=' + prevRadio + ']').each(function(){
            $(this).parent().parent().css('background-color', '#f8f8f8');
            $(this).parent().parent().css('border', 'none');
        });
    }

    function calculatePrice() {
        var number_of_licenses = $('select[name=number]').val();
        var price = 13;
        if(prevRadio == 2) {
            price = 22;
        }
        else
        if(prevRadio == 3) {
            price = 34;
        }   
        $(".total__result").text(number_of_licenses * price);
    }
});