$(function() {
    $(function() {
        $("#event-name").focus();
    });

    $( "#event-start-date" ).datetimepicker();
    $( "#event-end-date" ).datetimepicker();
    $("#all-day-event-date").datetimepicker({
        timepicker: false,
        onChangeDateTime: function(dp, $input) {
            var datetime = $input.val();
            var date = datetime.split(" ")[0];
            $input.val(date);
        }
    });
    $( "#recurrent-event-end-date" ).datetimepicker();

    $('#all-day-event-checkbox').change(function() {
        if (this.checked) {
            showAllDayEventOptions();
        } else {
            hideAllDayEventOptions();
        }
    });

    $('#recurrent-event-type-selector').change(function() {
        var val = $("#recurrent-event-type-selector option:selected").val();
        hideRecurrentEventOptions();
        hideRecurrentEventDetails();
        
        if (val == "custom") {
            showRecurrentEventOptions();
        } else {
            resetAllRecurrentEventDetails();
        }

        if (val == ("none")) {
            hideRecurrentEventEndDetails();
        } else {
            showRecurrentEventEndDetails();
        }
    });

    $('#recurrent-event-time-selector').change(function() {
        var val = $("#recurrent-event-time-selector option:selected").val();
        hideRecurrentEventDetails();

        if (val == "daily") {
            $('#daily-recurrent-details').show();
        } else if (val == "weekly") {
            $('#weekly-recurrent-details').show();
        } else if (val == "monthly") {
            $('#monthly-recurrent-details').show();
        } else if (val == "yearly") {
            $('#yearly-recurrent-details').show();
        }
    });

    $('input[type=text]').focus(function() { 
        $(this).select(); 
    });
});

// Functions to reset recurrent event interface
function hideRecurrentEventDetails() {
    $('#daily-recurrent-details').hide();
    $('#weekly-recurrent-details').hide();
    $('#monthly-recurrent-details').hide();
    $('#yearly-recurrent-details').hide();
}
function hideRecurrentEventOptions() {
    $('#recurrent-event-details-line').hide();
    $('#recurrent-event-details').hide();
}
function showRecurrentEventOptions() {
    $('#recurrent-event-details-line').show();
    $('#recurrent-event-details').show();
    $('#daily-recurrent-details').show();
}
function resetAllRecurrentEventDetails() {
    $('#recurrent-event-time-selector').val('daily');
    $('.weekday-checkbox').prop('checked', false);
    $('.day-checkbox').prop('checked', false);
    $('.month-checkbox').prop('checked', false);
}
function showAllDayEventOptions() {
    $('#start-time-row').hide();
    $('#end-time-row').hide();
    $('#all-day-event-row').show();
}
function hideAllDayEventOptions() {
    $('#all-day-event-row').hide();
    $('#start-time-row').show();
    $('#end-time-row').show();
    $('#all-day-event-date').val('');
}
function showRecurrentEventEndDetails() {
    $('#recurrent-event-end-date-row').show();
}
function hideRecurrentEventEndDetails() {
    $('#recurrent-event-end-date-row').hide();
    $('#recurrent-event-end-date').val('');
}

// hacky way to get the button to accommodate size of hidden divs in Safari
function hideAndShowCreateEventButtom() {
    $('#create-event-button').hide();
    $('#create-event-button').show();
}