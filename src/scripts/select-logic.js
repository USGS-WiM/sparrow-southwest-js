/*
_________________Created by emyers 10/2016_____________
*/

$(".selectpicker").selectpicker();

//Change Displayed Metric select options
function populateMetricOptions(selectedIndex) {
    var metricOptions;
    //var keepMetricIndex = selectedIndex;
    if ($("#displayedMetricSelect")[0].selectedOptions.length > 0) {
        var previousFieldLabel = $("#displayedMetricSelect")[0].selectedOptions[0].label;
        var test = $("#displayedMetricSelect option:selected");
    }

    if ($(".radio input[type='radio']:checked")[0].id == "radio1") {
        switch (selectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Catchments_st; //UPDATE TODO if catchments are split, update to the appropriate object.
                } else {
                    metricOptions = Catchments;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st;
                } else {
                    metricOptions = Group3;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st;
                } else {
                    metricOptions = Group2;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st;
                } else {
                    metricOptions = Group1;
                }
                break;

            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st;
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st;
                } else {
                    metricOptions = ST;
                }
                break;
        }
    } if ($(".radio input[type='radio']:checked")[0].id == "radio2") {
        switch (selectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Catchments_st_tn; //UPDATE TODO if catchments are split, update to the appropriate object.
                } else {
                    metricOptions = Catchments_tn;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_tn;
                } else {
                    metricOptions = Group3_tn;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_tn;
                } else {
                    metricOptions = Group2_tn;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st_tn;
                } else {
                    metricOptions = Group1_tn;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_tn;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_tn;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_tn;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_tn;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_tn;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_tn;
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st_tn;
                } else {
                    metricOptions = ST_tn;
                }
                break;
        }
    } if ($(".radio input[type='radio']:checked")[0].id == "radio3"){
        switch (selectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Catchments_st_q; //UPDATE TODO if catchments are split, update to the appropriate object.
                } else {
                    metricOptions = Catchments_q;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_q;
                } else {
                    metricOptions = Group3_q;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_q;
                } else {
                    metricOptions = Group2_q;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st_q;
                } else {
                    metricOptions = Group1_q;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_q;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_q;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_q;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_q;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_q;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_q;
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st_q;
                } else {
                    metricOptions = ST_q;
                }
                break;
        }
    } if ($(".radio input[type='radio']:checked")[0].id == "radio4"){
        switch (selectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Catchments_st_ss; //UPDATE TODO if catchments are split, update to the appropriate object.
                } else {
                    metricOptions = Catchments_ss;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_ss;
                } else {
                    metricOptions = Group3_ss;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_ss;
                } else {
                    metricOptions = Group2_ss;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st_ss;
                } else {
                    metricOptions = Group1_ss;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_ss;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_ss;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_ss;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_ss;
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    metricOptions = Group3_st_ss;
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    metricOptions = Group2_st_ss;
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    metricOptions = Group1_st_ss;
                } else {
                    metricOptions = ST_ss;
                }
                break;
        }
    }
    //remove old and set new metric options, refresh select picker
    $("#displayedMetricSelect")
        .find("option")
        .remove();
    $.each(metricOptions, function(index, value) {
        $("#displayedMetricSelect").append(new Option(value.name, value.field));

    });

    $("#displayedMetricSelect").selectpicker("refresh");

    //find previously Selected metric value
    var selectedMetric = function(previousFieldLabel, metricOptions) {
        for (var i = 0, len = metricOptions.length; i < len; i++) {
            if (previousFieldLabel === metricOptions[i].name) {
                return metricOptions[i];
            }
        }
        return null;
    };

    //set the selected metric dropdown here
    if (previousFieldLabel) {
        if (selectedMetric(previousFieldLabel, metricOptions) != null) {
            //set dropdown to previously selected value
            $("#displayedMetricSelect").selectpicker("val", selectedMetric(previousFieldLabel, metricOptions).field); //use field value, not name
        } else {
            //set default to the first new metric option because the previously selected value isn't in the new list.
            $("#displayedMetricSelect").selectpicker("val", metricOptions[0].field);
        }
    } else {
        $("#displayedMetricSelect").selectpicker("val", metricOptions[0].field);
    }
} // END populateMetricOptions

function updateSourceOptions() {
  delete app.chosenSource;
  //remove old source data options, add new and refresh
  $("#displayedSourceSelect")
    .find("option")
    .remove();
  $("#displayedSourceSelect").append(new Option('All Sources', 'All Sources'));
  var sourceOptions = getChartOutfields(app.map.getLayer("SparrowRanking").visibleLayers[0]);
  $.each(sourceOptions, function(index, value) {
    if (value.attribute.indexOf('_') > -1) {
      var shortName = value.label.split(") ")[1]
      $("#displayedSourceSelect").append(new Option(shortName, value.attribute));
    }
  });
  $("#displayedSourceSelect").selectpicker("refresh");
  $("#displayedSourceSelect").selectpicker("val", "All Sources");
}

//used when clearing the AOI
function returnDefaultLayer(sparrowId) {
    switch (sparrowId) {
        case 5:
            return 0;
        case 6:
            return 1;
        case 7:
            return 2;
        case 8:
            return 3;
        case 14:
            return 9;
        case 15:
            return 10;
        case 16:
            return 11;
        case 17:
            return 12;
        case 23:
            return 18;
        case 24:
            return 19;
        case 25:
            return 20;
        case 26:
            return 21;
        case 32:
            return 27;
        case 33:
            return 28;
        case 34:
            return 29;
        case 35:
            return 30;
    }
}

//used when clearing AOI to revert any selections back to the full state laeyer
function returnToStateLayer(sparrowId){
    switch(sparrowId){
        case 8:
            return 4;
        case 7:
            return 4;
        case 6:
            return 4;
        case 5:
            return 4;
        case 17:
            return 13;
        case 16:
            return 13;
        case 15: 
            return 13;
        case 14:
            return 13;
        case 26:
            return 22;
        case 25:
            return 22;
        case 24:
            return 22;
        case 23:
            return 22;
        case 35:
            return 31;
        case 34:
            return 31;
        case 33:
            return 31;
        case 32:
            return 31;
    }
}

//uses the #groupResultsSelect selected value and Selected radio to define the SparrowRanking display layer.
function setAggregateGroup(groupBySelectedIndex, selectedRadio) {
    if (selectedRadio == "radio1") {
        var layerArrayValue;
        switch (groupBySelectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 5; //TODO UPDATE AddCatchments with splits if they become available?
                } else {
                    layerArrayValue = 0;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 6; //sg3
                } else {
                    layerArrayValue = 1;
                }

                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 7; //sg2
                } else {
                    layerArrayValue = 2;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 8; //sg1
                } else {
                    layerArrayValue = 3;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 6; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 6; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 6; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 7; //sg2
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    layerArrayValue = 6; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 7; //sg2
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 8; //sg1
                } else {
                    layerArrayValue = 4; //ST
                }
                break;
        }
    } if (selectedRadio == "radio2") {
        //UPDATE TODO impoartant! verify layerIDs here when Nitrogen Layers become available!!!!!
        var layerArrayValue;
        switch (groupBySelectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 14; //TODO UPDATE AddCatchments with splits if they become available?
                } else {
                    layerArrayValue = 9;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 15; //grp3 w/ state splits
                } else {
                    layerArrayValue = 10;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 16; //grp2 w/ state splits
                } else {
                    layerArrayValue = 11;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 17; //grp1 w/ state splits
                } else {
                    layerArrayValue = 12;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 15; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 15; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 15; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 16; //sg2
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    layerArrayValue = 15; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 16; //sg2
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 17; //sg1
                } else {
                    layerArrayValue = 13; //ST
                }
                break;
        } 
    } if (selectedRadio == "radio3"){
        //UPDATE TODO impoartant! verify layerIDs here when Nitrogen Layers become available!!!!!
        var layerArrayValue;
        switch (groupBySelectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 23; //TODO UPDATE AddCatchments with splits if they become available?
                } else {
                    layerArrayValue = 18;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 24; //grp3 w/ state splits
                } else {
                    layerArrayValue = 19;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 25; //grp2 w/ state splits
                } else {
                    layerArrayValue = 20;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 26; //grp1 w/ state splits
                } else {
                    layerArrayValue = 21;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 24; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 24; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 24; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 25; //sg2
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    layerArrayValue = 24; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 25; //sg2
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 26; //sg1
                } else {
                    layerArrayValue = 22; //ST
                }
                break;
        }
    } if (selectedRadio == "radio4") {
        //UPDATE TODO impoartant! verify layerIDs here when Nitrogen Layers become available!!!!!
        var layerArrayValue;
        switch (groupBySelectedIndex) {
            case 0:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 32; //TODO UPDATE AddCatchments with splits if they become available?
                } else {
                    layerArrayValue = 27;
                }
                break;
            case 1:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 33; //grp3 w/ state splits
                } else {
                    layerArrayValue = 28;
                }
                break;
            case 2:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 34; //grp2 w/ state splits
                } else {
                    layerArrayValue = 29;
                }
                break;
            case 3:
                if ($("#st-select")[0].selectedIndex > 0) {
                    layerArrayValue = 35; //grp1 w/ state splits
                } else {
                    layerArrayValue = 30;
                }
                break;
            case 4:
                if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 33; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 33; //sg3
                }
                else if ($("#grp3-select")[0].selectedIndex > 0 && $("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 33; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0 && $("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 34; //sg2
                }
                else if ($("#grp3-select")[0].selectedIndex > 0) {
                    layerArrayValue = 33; //sg3
                }
                else if ($("#grp2-select")[0].selectedIndex > 0) {
                    layerArrayValue = 34; //sg2
                }
                else if ($("#grp1-select")[0].selectedIndex > 0) {
                    layerArrayValue = 35; //sg1
                } else {
                    layerArrayValue = 31; //ST
                }
                break;
        }
    }

    var visibleLayerIds = [layerArrayValue];
    var sparrowRanking = app.map.getLayer("SparrowRanking");
    sparrowRanking.setVisibleLayers(visibleLayerIds);


} //END setAggregateGroup()

function AOIChange(e) {
    $("#page-loader").fadeIn();
    var selectId = e.currentTarget.id;
    var selectValue = e.currentTarget.value;
    var groupResultsIndex = $("#groupResultsSelect")[0].selectedIndex;

    //call to check if user has selected a value in the AOI
    var AOIhasValue = function() {
        if ($("#grp1-select")[0].value !== ""){
            return true;
        }
        //if GRP2 is selected return false and keep GRP3 disabled
        /* else if ($("#grp2-select")[0].value !== "" ){
            return true;
        } */
        else if ($("#grp3-select")[0].value !== "" ){
            return true;
        }
        else if ($("#st-select")[0].value !== "" ){
            return true
        }
        else{
            return false;
        }
    }

    if ($("#groupResultsSelect")[0].selectedIndex == 1 || $("#groupResultsSelect")[0].selectedIndex == 0) {
        //ENABLE huc8 dropdown
        $("#grp3-select").removeClass("disabled"); //huc8
        $("#grp3-select").removeAttr("disabled");
    } else if ($("#groupResultsSelect")[0].selectedIndex == 4){
        if( AOIhasValue() === true ){
            $("#grp3-select").removeClass("disabled"); //huc8
            $("#grp3-select").removeAttr("disabled");
        }
    }

    var newObj = {
        selectedId: selectId,
        selectedValue: selectValue
    };

    //TODO ? if groupResultsIndex == 4 set aggregate group

    //if (selectId == "st-select" && groupResultsIndex != 4) {
        //if not already on a state split layer, set one now.
        //TODO: figure out how you can access the current layers to see if you're on a split layer.
        //if(app.map.getLayer('SparrowRanking').visibleLayers[0]){
        populateMetricOptions($("#groupResultsSelect")[0].selectedIndex);
        setAggregateGroup(groupResultsIndex, $(".radio input[type='radio']:checked")[0].id);
        updateSourceOptions();
    //}

    //only update if there's a value to update to (clearing selected values depending on Group Results by selections)
    if (newObj.selectedValue != "") {
        app.setLayerDefObj(newObj);
    }

    setLayerDefs();

    generateRenderer();

    if ($("#chartWindowDiv").css("visibility") == "visible") {
        $("#toast_title").html("Loading...");
        $("#toast_body").html("Chart updating");
        $("#toast-fixed").fadeIn();

        app.map.graphics.clear();
        app.createChartQuery();
    }
} //END AOIChange()

function setLayerDefs() {
    var definitionString = "";
    var layerDefObj = app.getLayerDefObj();

    if (layerDefObj.AOIST) {
        if (definitionString != "") {
            definitionString += " AND ST = " + "'" + layerDefObj.AOIST + "'";
        } else {
            definitionString += "ST = " + "'" + layerDefObj.AOIST + "'";
        }
    }
    if (layerDefObj.AOI1) {
        if (definitionString != "") {
            definitionString += " AND GP1 = " + "'" + layerDefObj.AOI1 + "'";
        } else {
            definitionString += "GP1 = " + "'" + layerDefObj.AOI1 + "'";
        }
    }
    if (layerDefObj.AOI2) {
        if (definitionString != "") {
            definitionString += " AND GP2 = " + "'" + layerDefObj.AOI2 + "'";
        } else {
            definitionString += "GP2 = " + "'" + layerDefObj.AOI2 + "'";
        }
    }
    /***TODO UPDATE IMPORTANT -- ADDED BUT NOT ***/
    if (layerDefObj.AOI3) {
        if (definitionString != "") {
            definitionString += " AND GP3 = " + "'" + layerDefObj.AOI3 + "'";
        } else {
            definitionString += "GP3 = " + "'" + layerDefObj.AOI3 + "'";
        }
    }

    var layerDefs = [];

    //LayerDefs on ALL Layers
    /***TODO UPDATE IMPORTANT -- note that not all of these layer combinations are going to work with the attributes we have currently.  Some layer defs will not set because the fields don't exist***/
    layerDefs[0] = definitionString;
    layerDefs[1] = definitionString;
    layerDefs[2] = definitionString;
    layerDefs[3] = definitionString;
    layerDefs[4] = definitionString;
    layerDefs[5] = definitionString;
    layerDefs[6] = definitionString;
    layerDefs[7] = definitionString;
    layerDefs[8] = definitionString;

    layerDefs[9] = definitionString;
    layerDefs[10] = definitionString;
    layerDefs[11] = definitionString;
    layerDefs[12] = definitionString;
    layerDefs[13] = definitionString;
    layerDefs[14] = definitionString;
    layerDefs[15] = definitionString;
    layerDefs[16] = definitionString;
    layerDefs[17] = definitionString;

    layerDefs[18] = definitionString;
    layerDefs[19] = definitionString;
    layerDefs[20] = definitionString;
    layerDefs[21] = definitionString;
    layerDefs[22] = definitionString;
    layerDefs[23] = definitionString;
    layerDefs[24] = definitionString;
    layerDefs[25] = definitionString;
    layerDefs[26] = definitionString;

    layerDefs[27] = definitionString;
    layerDefs[28] = definitionString;
    layerDefs[29] = definitionString;
    layerDefs[30] = definitionString;
    layerDefs[31] = definitionString;
    layerDefs[32] = definitionString;
    layerDefs[33] = definitionString;
    layerDefs[34] = definitionString;
    layerDefs[35] = definitionString;

    app.map.getLayer("SparrowRanking").setLayerDefinitions(layerDefs);
} // END setLayerDefs()

function getTableFields(headerKeysArr, sparrowLayerId) {
    var label = "";
    var flatArr = [];
    var htmlHeaderArr = [];
    var configArr = [];
    var removeField = "";
    switch (sparrowLayerId) {
        case 0:
            configArr = Group3;
            removeField = "GP3";
            $.each(tableOutFields, function(i, object) {
                flatArr.push(object);
            });
            break;
        case 4:
            configArr = Group3_st;
            removeField = "SG3";
            $.each(stateTableOutFields, function(i, object) {
                flatArr.push(object);
            });
            break;
        case 7:
            configArr = Group3_tn;
            removeField = "GP3";
            $.each(tableOutFields, function(i, object) {
                flatArr.push(object);
            });
            break;
        case 11:
            configArr = Group3_st_tn;
            removeField = "SG3";
            $.each(stateTableOutFields, function(i, object) {
                flatArr.push(object);
            });
            break;
    }

    $.each(configArr, function(index, item) {
        flatArr.push({ field: item.field, name: item.name });
        $.each(item.chartOutfields, function(i, fields) {
            if (
                fields.attribute == removeField &&
                flatArr
                    .map(function(f) {
                        return f.field;
                    })
                    .indexOf(removeField) < 0
            ) {
                flatArr.push({ field: fields.attribute, name: fields.label });
            } else if (fields.attribute != removeField) {
                flatArr.push({ field: fields.attribute, name: fields.label });
            }
        });
    });

    htmlHeaderArr.push("<tr>");
    $.each(headerKeysArr, function(index, key) {
        //console.log(key);
        $.each(flatArr, function(index, obj) {
            if (key == obj.field) {
                //console.log(obj.field);
                htmlHeaderArr.push("<th>" + obj.name + "</th>");
                return false; //escape the each loop?
            }
        });
    });
    htmlHeaderArr.push("</tr>");
    return htmlHeaderArr.join("");
}

function getLegendLabels(sparrowLayerId) {
    var label = "";
    var configObject = app.getLayerConfigObject(sparrowLayerId);
    var setModel = function (sparrowLayerId) {
        if (sparrowLayerId <= 8) {
           return "Total Phosphorus";
        }
        if (sparrowLayerId >= 9 && sparrowLayerId <= 17) {
            return "Total Nitrogen";
        }
        if (sparrowLayerId >= 18 && sparrowLayerId <= 26) {
            return "Streamflow";
        }
        if (sparrowLayerId > 26) {
            return "Suspended Sediment";
        }
    }
    var nutrientModel = setModel(sparrowLayerId);
    $.each(configObject, function(index, item) {
      if ($("#displayedMetricSelect").val() == item.field) {
          label = item.name;
      }
    });
    if (app.chosenSource) {label += ' from ' + app.chosenSource.label}
    return nutrientModel + ", " + label;
} //END getLegendLabels()

function getChartOutfields(sparrowLayerId) {
    var chartFieldsArr = [];
    //console.log("in GetChartOutfields()")
    var configObject = app.getLayerConfigObject(sparrowLayerId);
    $.each(configObject, function(index, item) {
        if ($("#displayedMetricSelect").val() == item.field) {
            $.each(item.chartOutfields, function(i, fields) {
                chartFieldsArr.push(fields);
            });
        }
    });
    return chartFieldsArr;
} //END getLegendLabels()

function getExtraOutfields(outfieldsArr, sparrowLayerId) {
    var finalChartArr = outfieldsArr;
    //UPDATE IMPORTANT! check additional area field names
    switch (sparrowLayerId) {
        case 0:
        case 9:
        case 18:
        case 27:
            //CATCHMENTS
            //finalChartArr.push("PNAME");
            finalChartArr.push("INCAREAKM2");
            finalChartArr.push("CUMAREAKM2");
            finalChartArr.push("COMID");
            break;
        case 1:
        case 10:
        case 19:
        case 28:
            //HUC8
            finalChartArr.push("GP3_AREA");
            break;
        case 2:
        case 11:
        case 20:
        case 29:
            //Tributarys
            finalChartArr.push("GP2_AREA");
            break;
        case 3:
        case 12:
        case 21:
        case 30:
            //Independent Watershed
            finalChartArr.push("GP1_AREA");
            break;
        case 4:
        case 13:
        case 22:
        case 31:
            //State
            finalChartArr.push("ST_AREA");
            break;
        case 5:
        case 14:
        case 23:
        case 32:
            //Catchments w/ state divisions
            finalChartArr.push("INCAREAKM2");
            finalChartArr.push("CUMAREAKM2"); 
            finalChartArr.push("ST_COMID");
            break;
        case 6:
        case 15:
        case 24:
        case 33:
            //grp3 w/ state divisions
            finalChartArr.push("SG3_AREA");
            break;
        case 7:
        case 16:
        case 25:
        case 34:
            //grp 2 w/ state divisions
            finalChartArr.push("SG2_AREA");
            break;
        case 8:
        case 17:
        case 26:
        case 35:
            //grp1 w/ state divisions
            finalChartArr.push("SG1_AREA");
            break;
    }
    return finalChartArr;
}

function generateRenderer() {
    require([
        "esri/map",
        "esri/Color",
        "esri/dijit/Legend",
        "esri/layers/LayerDrawingOptions",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/tasks/ClassBreaksDefinition",
        "esri/tasks/AlgorithmicColorRamp",
        "esri/tasks/GenerateRendererParameters",
        "esri/tasks/GenerateRendererTask",
        "esri/tasks/query",
        "esri/tasks/QueryTask",
        "dojo/dom",
        "dojo/dom-class",
        "dojo/on",
        "dojo/domReady!"
    ], function(
        Map,
        Color,
        Legend,
        LayerDrawingOptions,
        SimpleLineSymbol,
        SimpleFillSymbol,
        ClassBreaksDefinition,
        AlgorithmicColorRamp,
        GenerateRendererParameters,
        GenerateRendererTask,
        Query,
        QueryTask,
        dom,
        domClass,
        on
    ) {
        var sparrowId = app.map.getLayer("SparrowRanking").visibleLayers[0];
        //apply layer defs to renderer if they exist
        if (app.map.getLayer("SparrowRanking").layerDefinitions) {
            var dynamicLayerDefs = app.map.getLayer("SparrowRanking").layerDefinitions[sparrowId];
            app.layerDef = dynamicLayerDefs;
        } else {
            app.map.getLayer("SparrowRanking").setDefaultLayerDefinitions(); //is this necessary?
            app.layerDef = "1=1";
        }
        //UPDATE important!  url must match serviceBaseURL in config
        app.Url = serviceBaseURL + sparrowId;

        // get polygon count for global storage
        var query = new Query();
        var queryTask = new QueryTask(app.Url);
        query.where = app.layerDef;
        query.maxAllowableOffset = 750;
        queryTask.executeForCount(
            query,
            function(count) {
                app.polygonResponseCount = count;
                if (app.polygonResponseCount > 2500 && $("#chartButton").prop("disabled", false)) {
                    $("#chartButton")
                        .prop("disabled", true)
                        .css("pointer-events", "none");
                    $("#chartButtonWrapper").css("cursor", "not-allowed");
                    //note: popup chart button done @ end of chart function since it's not built yet
                    $("#fromMapTab").prop("disabled", true);
                } else {
                    $("#chartButton")
                        .prop("disabled", false)
                        .css("pointer-events", "auto");
                    $("#chartButtonWrapper").css("cursor", "pointer");
                    //note: popup chart button done @ end of chart function since it's not built yet
                    $("#fromMapTab").prop("disabled", false);
                }

                if ($("#chartWindowDiv").css("visibility") == "visible") {
                    if (app.polygonResponseCount > 2500) {
                        $("#toast_title").html("Warning");
                        $("#toast_body").html(
                            "Cannot show chart for " +
                                app.polygonResponseCount +
                                " features. Please narrow Area of Interest or Group Results and try again."
                        );
                        $("#toast-fixed").fadeIn();
                        setTimeout(function() {
                            $("#toast-fixed").fadeOut();
                        }, 5000);
                        app.map.graphics.clear();
                        $("#chartButton").html("Show Chart");
                        app.formattedHighlightString = "";
                        $("#chartWindowDiv").css("visibility", "hidden");
                        $("#chartWindowContainer").empty();
                        $("#chartWindowPanelTitle").empty();
                    } else {
                        app.createChartQuery();
                    }
                }
            },
            function(error) {
                console.log(error);
            }
        );

        var selectedMetric = $("#displayedMetricSelect")[0].value;
        app.outFields = [selectedMetric];
        app.currentAttribute = selectedMetric;
        var classDef = new ClassBreaksDefinition();
        if (app.chosenSource) {
          classDef.classificationField = app.chosenSource.attribute;
        } else {
          classDef.classificationField = app.currentAttribute;
        }
        classDef.classificationMethod = "quantile";
        classDef.breakCount = 5;

        var scale = app.map.getScale();
        var zoom = app.map.getZoom();

        //check for dynamic border criteria and set symbols
        if (dynamicBorderLayers.includes($("#groupResultsSelect")[0].value)) {
            if (app.map.getZoom() > borderThreshold) {
                classDef.baseSymbol = new SimpleFillSymbol(
                    SimpleFillSymbol.STYLE_SOLID,
                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([168, 168, 168]), 0.1)
                );
            } else {
                //symbol WITHOUT borders
                classDef.baseSymbol = new SimpleFillSymbol("solid", null, null);
            }
        } else {
            //symbol WITH borders
            classDef.baseSymbol = new SimpleFillSymbol(
                SimpleFillSymbol.STYLE_SOLID,
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([168, 168, 168]), 0.1)
            );
        }

        var colorRamp = new AlgorithmicColorRamp();
        //different ramps for phos/nitro
        if ($(".radio input[type='radio']:checked")[0].id == "radio1") {
            //phos brown schema
            //colorRamp.fromColor = new Color.fromHex((!isNaN(colorIndex) ? phosToColors[colorIndex] : "#FFF1DC")); //original light
            colorRamp.fromColor = new Color.fromHex((app.chosenSource != undefined) ? fromSourceColor : "#FFF6E8"); //lighter, increases contrast
            //colorRamp.toColor = new Color.fromHex((!isNaN(colorIndex) ? phosColors[colorIndex] : "#632E0E")); //original dark
            colorRamp.toColor = new Color.fromHex((app.chosenSource != undefined) ? toSourceColor : "#3F1700"); //darker, increases contrast
        }
        if ($(".radio input[type='radio']:checked")[0].id == "radio2") {
            //nitro green schema
            colorRamp.fromColor = new Color.fromHex((app.chosenSource != undefined) ? fromSourceColor : "#F5EBB8");
            //colorRamp.toColor = new Color.fromHex((!isNaN(colorIndex) ? nitroColors[colorIndex] : "#004120")); //original dark
            colorRamp.toColor = new Color.fromHex((app.chosenSource != undefined) ? toSourceColor : "#003419"); //darker
        }
        if ($(".radio input[type='radio']:checked")[0].id == "radio3") {
            //streamflow blue schema
            colorRamp.fromColor = new Color.fromHex((app.chosenSource != undefined) ? fromSourceColor : "#cef3f5");//new light
            colorRamp.toColor = new Color.fromHex((app.chosenSource != undefined) ? toSourceColor : "#00305");
        }
        if ($(".radio input[type='radio']:checked")[0].id == "radio4"){
            //sediment color ramp
            //colorRamp.fromColor = new Color.fromHex((!isNaN(colorIndex) ? sedimentToColors[colorIndex] : "#FFF4e0"));//original light
            colorRamp.fromColor = new Color.fromHex((app.chosenSource != undefined) ? fromSourceColor : "#FFF6CF");//more saturated yellow
            //colorRamp.toColor = new Color.fromHex((!isNaN(colorIndex) ? sedimentColors[colorIndex] : "#B24903"));//original dark
            colorRamp.toColor = new Color.fromHex((app.chosenSource != undefined) ? toSourceColor : "#A04100");
        }

        colorRamp.algorithm = "hsv"; // options are:  "cie-lab", "hsv", "lab-lch"
        classDef.colorRamp = colorRamp;

        var params = new GenerateRendererParameters();
        params.classificationDefinition = classDef;
        // limit the renderer to data being shown by the current layer
        params.formatLabel = false; //formatLabel = false otherwise expect some bad behavior from the renderer!
        params.where = app.layerDef;
        var generateRenderer = new GenerateRendererTask(app.Url);
        generateRenderer.execute(params, processValues, errorHandler);

        function processValues(renderer) {
            //calculate legend values to 3 significant figures
            function sigFigures(n) {
                if (n > 0) {
                    return parseFloat(n.toPrecision(3));
                } else {
                    return n;
                }
            }

            $.each(renderer.infos, function(index, info) {
                //calculate sig figures
                var minVal = sigFigures(info.minValue);
                var maxVal = sigFigures(info.maxValue);

                //set new label
                if (index == 4) {
                    //handle greater than for last label maxValue
                    var newLabel = "greater than "+ minVal.toString();
                } else {
                    var newLabel = minVal.toString() + " - " + maxVal.toString();
                }
                renderer.infos[index].label = newLabel;
            });

            applyRenderer(renderer);
        }

        function applyRenderer(renderer) {
            var sparrowId = app.map.getLayer("SparrowRanking").visibleLayers[0];
            var layer = app.map.getLayer("SparrowRanking");

            // dynamic layer stuff
            var optionsArray = [];
            var drawingOptions = new LayerDrawingOptions();
            drawingOptions.renderer = renderer;
            // set the drawing options for the relevant layer
            // optionsArray index corresponds to layer index in the map service
            optionsArray[sparrowId] = drawingOptions;

            layer.setLayerDrawingOptions(optionsArray);

            if (!app.hasOwnProperty("legend")) {
                createLegend();
            } else {
                var legendInfo = app.legend.layerInfos;
                //get rid of sparrow ranking while saving other legend elements
                var updatedLegendInfos = $.grep(legendInfo, function(value){
                    return value.layer.id !== "SparrowRanking";
                }); 
                var newSparrowRanking = {
                    layer: app.map.getLayer("SparrowRanking"),
                    title: getLegendLabels(app.map.getLayer("SparrowRanking").visibleLayers[0])
                }
                updatedLegendInfos.unshift(newSparrowRanking); //put sparrowRanking @ front of array to maintain legend layer order
                app.legend.refresh(updatedLegendInfos);
            }
            if (layer.visible == false) {
                layer.show();
            }
        }

        function errorHandler(err) {
            console.log("generateRenderer Err ", err);
            $("#page-loader").fadeOut();
        }

        function createLegend() {
            app.legend = new Legend(
                {
                    map: app.map,
                    layerInfos: [
                        {
                            layer: app.map.getLayer("SparrowRanking"),
                            title: getLegendLabels(app.map.getLayer("SparrowRanking").visibleLayers[0])
                        }
                    ]
                },
                dom.byId("legendDiv")
            );
            app.legend.startup();
        }
        //$("#page-loader").fadeOut();
    }); // END Dojo
} //END generateRenderer()