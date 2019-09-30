/*
Created By Erik Myers 8/16/2018
CONFIG FILE FOR USE WITH SPARROW-Southwest

THIS CONFIG REMOVES CATCHMENT AND AGGREGATE LABELS FROM THE CHARTOUTFIELS OBJECTS TO SHORTEN CHART AND DISPLAYED METRIC LABELS.
ALSO uses SPARROWID and ST_SPARRID in place of COMID, ST_COMID
*/

var appTitle = "2012 SPARROW Models for the Southwest: Total Phosphorus, Total Nitrogen, Suspended Sediment, and Streamflow";
var appVersion = "v0.9.0"; // could pull this from code/package.json

var serviceBaseURL =
    "https://sparrowtest.wim.usgs.gov/arcgis/rest/services/SparrowSouthwest/SparrowSouthwest/MapServer/"; //important! UPDATE rest service URL
var chartUnits = " (kg/yr.)";
var chartFeatureMax = 2500; //chart will not be available if more than this many polygons are showing on map.

var groupResultsInitIndex = 1; //sets the default layer for the application.  In this case service layer 1 == HUC8.

var splitLayers = [5, 6, 7, 8, 14, 15, 16, 17, 23, 24, 25, 26, 32, 33, 34, 35]; //important! UPDATE layer Ids of all state split layers (st_cats, sg3, sg2, sg1)

var mapCenter = [-107.0, 35.6];
//app.defaultMapCenter = [-87, 42];
defaultZoomLevel = 5;

borderThreshold = 7; //dynamic polygon border threshold.  When zoomed beyond this number borders appear
var dynamicBorderLayers = ["Catchment", "8-Digit hydrologic unit code"]; //Aggregate layer choices placed in this array will have dynamic borders.  Each string MUST MATCH the text in the Group Results By Select to work.

var initQueryParams = ["ST", "GP3", "GP2", "GP1"]; //used to query for the AOI dropdown values on app init.

//used to set dynamic labels in chart
var groupResultsLabels = {
    a: "Catchment ID",
    b: "8-Digit hydrologic unit code",
    c: "4-Digit hydrologic unit code",
    d: "2-Digit hydrologic unit code",
    e: "State"
};

//download locations
var rootURL = "https://sparrow.wim.usgs.gov/southwest/downloads/";
var phosphorusShapefileURL = rootURL + "southwest_cats_results_tp.zip";
var streamflowShapefileURL = rootURL + "southwest_cats_results_q.zip";
var sedimentShapefileURL = rootURL + "southwest_cats_results_ss.zip";
var nitrogenShapefileURL = rootURL + "southwest_cats_results_tn.zip";
var phosCalibrationURL = rootURL + "southwest_calibration_sites_tp.zip";
var nitroCalibrationURL = rootURL + "southwest_calibration_sites_tn.zip";
var streamflowCalibrationURL = rootURL + "southwest_calibration_sites_q.zip";
var sedimentCalibrationURL = rootURL + "southwest_calibration_sites_ss.zip"; 

var tableOutFields = [
    { field: "FID", name: "Unique Feature Id" },
    { field: "GRP1", name: "HUC2 hydrologic region" },
    { field: "GRP2", name: "HUC4 hydrologic subregion" },
    { field: "GRP_3_NA_1", name: "Join Field" },
    { field: "Area_g3", name: "HUC10 area (mi2)" }
];

var stateTableOutFields = [
    { field: "FID", name: "Unique Feature Id" },
    { field: "ST_GP3_NAM", name: "HUC10/State (combination) ID" },
    { field: "Area_S3", name: "HUC10 area within the state and the  model area (mi2)" },
    { field: "ST", name: "State" },
    { field: "GRP_1_NAM", name: "Independent Watershed name (in which HUC10 is nested)" },
    { field: "GP2", name: "HUC8 (in which HUC10 is nested)" },
    { field: "GRP_3_NAM", name: "HUC10" },
    { field: "ST_GP1_NAM", name: "State and Independent Watershed" },
    { field: "ST_GP2_NAM", name: "State amd HUC8" },
    { field: "ST_gp3_n_1", name: "Join Field" }
];

var aggregateDefinitions = {
    st: "State",
    gp1: "HUC2 hydrologic region",
    gp2: "HUC4 hydrologic subregion",
    gp3: "HUC8 watershed",
    sg1: "State_HUC2",
    sg2: "State_HUC4",
    sg3: "State_HUC8"
};

// key, value pairs come from PHOSPHORUS attribute definitions Excel file
var catchmentDefinitions = {
    comid: "SPARROW Reach ID",
    st_comid: "SPARROW Reach by State",
    pname: "Catchment Name",
    accl: "Accumulated load (kg)",
    incl: "Incremental load (kg)",
    accy: "Accumulated yield (kg/km2)",
    incy: "Incremental yield (kg/km2)",
    daccl: "Delivered accumulated load (kg)",
    daccy: "Delivered accumulated yield (kg/km2)",
    dincl: "Delivered incremental load  (kg)",
    dincy: "Delivered incremental yield (kg/km2)"
};

//Nitrogen same as Phosphorus in this model
var catchmentDefinitions_tn = {
    comid: "SPARROW Reach ID ",
    st_comid: "SPARROW Reach ID by State",
    pname: "Catchment Name",
    accl: "Accumulated load (kg)",
    concentrat: "Concentration, mg/L",
    incl: "Incremental load (kg)",
    accy: "Accumulated yield (kg/km2)",
    incy: "Incremental yield (kg/km2)",
    daccl: "Delivered accumulated load (kg)",
    daccy: "Delivered accumulated yield (kg/km2)",
    dincl: "Delivered incremental load  (kg)",
    dincy: "Delivered incremental yield (kg/km2)"
};

var catchmentDefinitions_q = {
    comid: "SPARROW Reach ID ",
    st_comid: "SPARROW Reach ID by State",
    pname: "Catchment Name",
    accl: "Accumulated flow (cfs)",
    concentrat: "Concentration, mg/L",
    incl: "Incremental flow (cfs)",
    accy: "Accumulated yield (mm/yr)",
    incy: "Incremental yield (mm/yr)",
    daccl: "Delivered accumulated flow (cfs)",
    daccy: "Delivered accumulated yield (mm/yr)",
    dincl: "Delivered incremental flow (cfs)",
    dincy: "Delivered incremental yield (mm/yr)"
};

var catchmentDefinitions_ss = {
    comid: "SPARROW Reach ID ",
    st_comid: "SPARROW Reach ID by State",
    pname: "Catchment Name",
    accl: "Accumulated load (MT)",
    concentrat: "Concentration, mg/L",
    incl: "Incremental load (MT)",
    accy: "Accumulated yield (MT/km2)",
    incy: "Incremental yield (MT/km2)",
    daccl: "Delivered accumulated load (MT)",
    daccy: "Delivered accumulated yield (MT/km2)",
    dincl: "Delivered incremental load  (MT)",
    dincy: "Delivered incremental yield (MT/km2)"
};

var mappedDefinitions = {
    area: "Aggregated area (km2)",
    al: "Aggregated load (kg)",
    ay: "Aggregated yield (kg/km2)",
    dal: "Delivered aggregated load (kg)",
    day: "Delivered aggregated yield (kg/km2)"
};

var mappedDefinitions_q = {
    area: "Aggregated area (km2)",
    al: "Aggregated flow (cfs)",
    ay: "Aggregated yield (mm/yr)",
    dal: "Delivered aggregated flow (cfs)",
    day: "Delivered aggregated yield (mm/yr)"
};

var mappedDefinitions_ss = {
    area: "Aggregated area (km2)",
    al: "Aggregated load (MT)",
    ay: "Aggregated yield (MT/km2)",
    dal: "Delivered aggregated load (MT)",
    day: "Delivered aggregated yield (MT/km2)"
};

/***UPDATE IMPORTANT! complete with source data Excel key***/
var phosphorusSourceDefinitions = {
    s1: "Urban land",
    s2: "Municipal wastewater treatment discharge",
    s3: "Farm fertilizer",
    s4: "Livestock manure",
    s5: "Geologic material",
    s6: "Channel sources",
    s7: "Inter - basin transfers"
};

/***UPDATE IMPORTANT! complete with source data Excel key***/
var nitrogenSourceDefinitions = {
    s1: "Urban land",
    s2: "Municipal wastewater treatment discharge",
    s3: "Farm fertilizer",
    s4: "Livestock manure",
    s5: "Atmospheric deposition",
    s6: "Inter - basin transfers",
};

/***UPDATE IMPORTANT! complete with source data Excel key***/
var streamflowSourceDefinitions = {
    s1: "Precipitation minus actual ET",
    s2: "Springs",
    s3: "Wastewater treatment discharge",
    s4: "Inter - basin transfers"
};

var sedimentSourceDefinitions = {
    s1: "Urban land",
    s2: "Agricultural land",
    s3: "Forest land",
    s4: "Shrub, scrub, grass, and barren land",
    s5: "Alluvial material",
    s6: "Channel sources"
};

/**get the HEX values below from project Google Doc and make sure:  
    1. each color corresponds with the order of SourceDefinitions objects above  
    2. there the number of hex colors matches the number of nutrient sources
**/

//used for individual sources grayscale color blocks
var fromSourceColor = "#FFFFFF";
var toSourceColor = "#000000";

var phosColors = ["#FFCCFF", "#BF0000", "#FFEC99", "#663100", "#A2EB85", "#f58833", "#BB8FCE"];
var nitroColors = ["#FFCCFF", "#BF0000", "#FFEC99", "#663100", "#c9daf8", "#BB8FCE"];
var streamflowColors = ["#2980b9", "#2ECC71", "#BF0000", "#BB8FCE"];
var sedimentColors = ["#FFCCFF", "#d6ad00", "#a2eb85", "#08612e", "#ffd966", "#f58833"]

function getFields(sourceDefObj, mappedDefObj, definitionCode, group) {
    var fieldsArr = [];
    //check to make sure catchment and aggregate layer are handled appropriately by checking if group is in global aggregateDefinitions object.
    if (!aggregateDefinitions.hasOwnProperty(group.toLowerCase())) {
        fieldsArr.push({ attribute: group.toUpperCase(), label: mappedDefObj.comid });
        for (var key in sourceDefObj) {
            fieldsArr.push({ attribute: definitionCode.toUpperCase() + "_" + key.toUpperCase(), label: mappedDefObj[definitionCode.toLowerCase()] + " " + sourceDefObj[key] });
        }

    } else {
        fieldsArr.push({ attribute: group.toUpperCase(), label: aggregateDefinitions[group] });
        for (var key in sourceDefObj) {
            fieldsArr.push({ attribute: group.toUpperCase() + "_" + definitionCode.toUpperCase() + "_" + key.toUpperCase(), label: mappedDefObj[definitionCode.toLowerCase()] + " " + sourceDefObj[key] });
        }
    }
    return fieldsArr;
}

/***-----BEGIN PHOSPHORUS LAYER GROUPS --------***/
/* PHOSPHORUS CATCHMENTS */

/*DOCUMENTATION NOTES: each 'field below should correspond to a "Mapped Attribute" in the cats_tp_attribute_Definitions.xlsx file.  These are the attributes that will be displayed on the map. */
var Catchments = [
    {
        field: "ACCL",
        name: catchmentDefinitions.accl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accl", "comid")
    },
    {
        field: "CONCENTR",
        name: catchmentDefinitions.concentrat,
        chartOutfields: [
            { attribute: "COMID", label: catchmentDefinitions.comid },
            { attribute: "CONCENTR", label: catchmentDefinitions.concentrat + " Total" }

        ]
    },
    {
        field: "INCL",
        name: catchmentDefinitions.incl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "incl", "comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions.accy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accy", "comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions.incy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "incy", "comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions.daccl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccl", "comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions.daccy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccy", "comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions.dincl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincl", "comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions.dincy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincy", "comid")
    }
];

var Group3 = [
    {
        field: "GP3_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "gp3")
    },
    {
        field: "GP3_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp3")
    },
    {
        field: "GP3_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "gp3")
    },
    {
        field: "GP3_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "gp3")
    }
    
];

var Group2 = [
    {
        field: "GP2_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "gp2")
    },
    {
        field: "GP2_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp2")
    },
    {
        field: "GP2_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "gp2")
    },
    {
        field: "GP2_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "gp2")
    }
    
];

var Group1 = [
    {
        field: "GP1_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "gp1")
    },
    {
        field: "GP1_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp1")
    },
    {
        field: "GP1_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "gp1")
    },
    {
        field: "GP1_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "gp1")
    }
    
];

var ST = [
    {
        field: "ST_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "st")
    },
    {
        field: "ST_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "st")
    },
    {
        field: "ST_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "st")
    },
    {
        field: "ST_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "st")
    }
    
];

var Catchments_st = [
    {
        field: "ACCL",
        name: catchmentDefinitions.accl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accl", "st_comid")
    },
    {
        field: "CONCENTR",
        name: catchmentDefinitions.concentrat,
        chartOutfields: [
            { attribute: "ST_COMID", label: catchmentDefinitions.comid },
            { attribute: "CONCENTR", label: catchmentDefinitions.concentrat + " Total" }

        ]
    },
    {
        field: "INCL",
        name: catchmentDefinitions.incl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "incl", "st_comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions.accy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accy", "st_comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions.incy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "INCY", "st_comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions.daccl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccl", "st_comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions.daccy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccy", "st_comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions.dincl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincl", "st_comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions.dincy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincy", "st_comid")
    }
];

var Group3_st = [
    {
        field: "SG3_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "sg3")
    },
    {
        field: "SG3_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "sg3")
    },
    {
        field: "SG3_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "sg3")
    },
    {
        field: "SG3_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "sg3")
    }
    
];

var Group2_st = [
    {
        field: "SG2_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "sg2")
    },
    {
        field: "SG2_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "sg2")
    },
    {
        field: "SG2_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "sg2")
    },
    {
        field: "SG2_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "sg2")
    }
    
];

var Group1_st = [
    {
        field: "SG1_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "sg1")
    },
    {
        field: "SG1_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "sg1")
    },
    {
        field: "SG1_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "sg1")
    },
    {
        field: "SG1_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "sg1")
    }
    
];
////END PHOSPHORUS LAYER GROUPS______________________________________________________________________________________________________________________________

////BEGIN NITROGEN LAYER GROUPS______________________________________________________________________________________________________________________________
//Catchments NITRO
var Catchments_tn = [
    {
        field: "ACCL",
        name: catchmentDefinitions_tn.accl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "accl", "comid")
    },
    {
        field: "CONCENTR",
        name: catchmentDefinitions_tn.concentrat,
        chartOutfields: [
            { attribute: "COMID", label: catchmentDefinitions_tn.comid },
            { attribute: "CONCENTR", label: catchmentDefinitions_tn.concentrat + " Total" }

        ]
    },
    {
        field: "INCL",
        name: catchmentDefinitions_tn.incl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "incl", "comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions_tn.accy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "accy", "comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions_tn.incy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "incy", "comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions_tn.daccl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "daccl", "comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions_tn.daccy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "daccy", "comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions_tn.dincl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "dincl", "comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions_tn.dincy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "dincy", "comid")
    }
];

var Group3_tn = [
    {
        field: "GP3_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "gp3")
    },
    {
        field: "GP3_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "gp3")
    },
    {
        field: "GP3_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "gp3")
    },
    {
        field: "GP3_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "gp3")
    }
    
];

var Group2_tn = [
    {
        field: "GP2_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "gp2")
    },
    {
        field: "GP2_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "gp2")
    },
    {
        field: "GP2_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "gp2")
    },
    {
        field: "GP2_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "gp2")
    }
    
];

var Group1_tn = [
    {
        field: "GP1_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "gp1")
    },
    {
        field: "GP1_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "gp1")
    },
    {
        field: "GP1_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "gp1")
    },
    {
        field: "GP1_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "gp1")
    }
    
];

var ST_tn = [
    {
        field: "ST_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "st")
    },
    {
        field: "ST_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "st")
    },
    {
        field: "ST_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "st")
    },
    {
        field: "ST_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "st")
    }
    
];

var Catchments_st_tn = [
    {
        field: "ACCL",
        name: catchmentDefinitions_tn.accl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "accl", "st_comid")
    },
    {
        field: "CONCENTR",
        name: catchmentDefinitions_tn.concentrat,
        chartOutfields: [
            { attribute: "ST_COMID", label: catchmentDefinitions_tn.comid },
            { attribute: "CONCENTR", label: catchmentDefinitions_tn.concentrat + " Total" }

        ]
    },
    {
        field: "INCL",
        name: catchmentDefinitions_tn.incl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "incl", "st_comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions_tn.accy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "accy", "st_comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions_tn.incy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "incy", "st_comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions_tn.daccl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "daccl", "st_comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions_tn.daccy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "daccy", "st_comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions_tn.dincl,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "dincl", "st_comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions_tn.dincy,
        chartOutfields: getFields(nitrogenSourceDefinitions, catchmentDefinitions_tn, "dincy", "st_comid")
    }
];

var Group3_st_tn = [
    {
        field: "SG3_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "sg3")
    },
    {
        field: "SG3_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "sg3")
    },
    {
        field: "SG3_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "sg3")
    },
    {
        field: "SG3_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "sg3")
    },
    
];

var Group2_st_tn = [
    {
        field: "SG2_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "sg2")
    },
    {
        field: "SG2_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "sg2")
    },
    {
        field: "SG2_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "sg2")
    },
    {
        field: "SG2_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "sg2")
    },
    
];

var Group1_st_tn = [
    {
        field: "SG1_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "ay", "sg1")
    },
    {
        field: "SG1_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "day", "sg1")
    },
    {
        field: "SG1_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "al", "sg1")
    },
    {
        field: "SG1_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(nitrogenSourceDefinitions, mappedDefinitions, "dal", "sg1")
    }
    
];
////END NITROGEN LAYER GROUPS______________________________________________________________________________________________________________________________

////BEGIN STREAMFLOW LAYER GROUPS______________________________________________________________________________________________________________________________
var Catchments_q = [
    {
        field: "ACCL",
        name: catchmentDefinitions_q.accl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "accl", "comid")
    },
    {
        field: "INCL",
        name: catchmentDefinitions_q.incl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "incl", "comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions_q.accy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "accy", "comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions_q.incy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "incy", "comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions_q.daccl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "daccl", "comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions_q.daccy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "daccy", "comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions_q.dincl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "dincl", "comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions_q.dincy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "dincy", "comid")
    }
];

var Group3_q = [
    {
        field: "GP3_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "gp3")
    },
    {
        field: "GP3_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "gp3")
    },
    {
        field: "GP3_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "gp3")
    },
    {
        field: "GP3_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "gp3")
    }
    
];

var Group2_q = [
    {
        field: "GP2_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "gp2")
    },
    {
        field: "GP2_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "gp2")
    },
    {
        field: "GP2_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "gp2")
    },
    {
        field: "GP2_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "gp2")
    }
    
];

var Group1_q = [
    {
        field: "GP1_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "gp1")
    },
    {
        field: "GP1_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "gp1")
    },
    {
        field: "GP1_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "gp1")
    },
    {
        field: "GP1_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "gp1")
    }
    
];

var ST_q = [
    {
        field: "ST_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "st")
    },
    {
        field: "ST_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "st")
    },
    {
        field: "ST_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "st")
    },
    {
        field: "ST_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "st")
    }
    
];

var Catchments_st_q = [
    {
        field: "ACCL",
        name: catchmentDefinitions_q.accl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "accl", "st_comid")
    },
    {
        field: "INCL",
        name: catchmentDefinitions_q.incl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "incl", "st_comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions_q.accy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "accy", "st_comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions_q.incy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "incy", "st_comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions_q.daccl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "daccl", "st_comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions_q.daccy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "daccy", "st_comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions_q.dincl,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "dincl", "st_comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions_q.dincy,
        chartOutfields: getFields(streamflowSourceDefinitions, catchmentDefinitions_q, "dincy", "st_comid")
    }
];

var Group3_st_q = [
    {
        field: "SG3_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "sg3")
    },
    {
        field: "SG3_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "sg3")
    },
    {
        field: "SG3_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "sg3")
    },
    {
        field: "SG3_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "sg3")
    }
    
];

var Group2_st_q = [
    {
        field: "SG2_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "sg2")
    },
    {
        field: "SG2_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "sg2")
    },
    {
        field: "SG2_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "sg2")
    },
    {
        field: "SG2_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "sg2")
    }
    
];

var Group1_st_q = [
    {
        field: "SG1_AY",
        name: mappedDefinitions_q.ay,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "ay", "sg1")
    },
    {
        field: "SG1_DAY",
        name: mappedDefinitions_q.day,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "day", "sg1")
    },
    {
        field: "SG1_AL",
        name: mappedDefinitions_q.al,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "al", "sg1")
    },
    {
        field: "SG1_DAL",
        name: mappedDefinitions_q.dal,
        chartOutfields: getFields(streamflowSourceDefinitions, mappedDefinitions_q, "dal", "sg1")
    }

];
////END STREAMFLOW LAYER GROUPS______________________________________________________________________________________________________________________________

////BEGIN SUSPENDED SEDIMENT LAYER GROUPS______________________________________________________________________________________________________________________________
var Catchments_ss = [
    {
        field: "ACCL",
        name: catchmentDefinitions_ss.accl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "accl", "comid")
    },
    {
        field: "CONCENTR",
        name: catchmentDefinitions_ss.concentrat,
        chartOutfields: [
            { attribute: "COMID", label: catchmentDefinitions_ss.comid },
            { attribute: "CONCENTR", label: catchmentDefinitions_ss.concentrat + " Total" }

        ]
    },
    {
        field: "INCL",
        name: catchmentDefinitions_ss.incl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "incl", "comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions_ss.accy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "accy", "comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions_ss.incy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "incy", "comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions_ss.daccl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "daccl", "comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions_ss.daccy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "daccy", "comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions_ss.dincl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "dincl", "comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions_ss.dincy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "dincy", "comid")
    }
];

var Group3_ss = [
    {
        field: "GP3_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "gp3")
    },
    {
        field: "GP3_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "gp3")
    },
    {
        field: "GP3_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "gp3")
    },
    {
        field: "GP3_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "gp3")
    }
    
];

var Group2_ss = [
    {
        field: "GP2_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "gp2")
    },
    {
        field: "GP2_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "gp2")
    },
    {
        field: "GP2_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "gp2")
    },
    {
        field: "GP2_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "gp2")
    }
    
];

var Group1_ss = [
    {
        field: "GP1_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "gp1")
    },
    {
        field: "GP1_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "gp1")
    },
    {
        field: "GP1_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "gp1")
    },
    {
        field: "GP1_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "gp1")
    },
    
];

var ST_ss = [
    {
        field: "ST_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "st")
    },
    {
        field: "ST_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "st")
    },
    {
        field: "ST_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "st")
    },
    {
        field: "ST_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "st")
    },
    
];

var Catchments_st_ss = [
    {
        field: "ACCL",
        name: catchmentDefinitions_ss.accl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "accl", "st_comid")
    },
    {
        field: "CONCENTR",
        name: catchmentDefinitions_ss.concentrat,
        chartOutfields: [
            { attribute: "COMID", label: catchmentDefinitions_ss.comid },
            { attribute: "CONCENTR", label: catchmentDefinitions_ss.concentrat + " Total" }

        ]
    },
    {
        field: "INCL",
        name: catchmentDefinitions_ss.incl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "incl", "st_comid")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions_ss.accy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "accy", "st_comid")
    },
    {
        field: "INCY",
        name: catchmentDefinitions_ss.incy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "incy", "st_comid")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions_ss.daccl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "daccl", "st_comid")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions_ss.daccy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "daccy", "st_comid")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions_ss.dincl,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "dincl", "st_comid")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions_ss.dincy,
        chartOutfields: getFields(sedimentSourceDefinitions, catchmentDefinitions_ss, "dincy", "st_comid")
    }
];

var Group3_st_ss = [
    {
        field: "SG3_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "sg3")
    },
    {
        field: "SG3_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "sg3")
    },
    {
        field: "SG3_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "sg3")
    },
    {
        field: "SG3_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "sg3")
    }
    
];

var Group2_st_ss = [
    {
        field: "SG2_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "sg2")
    },
    {
        field: "SG2_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "sg2")
    },
    {
        field: "SG2_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "sg2")
    },
    {
        field: "SG2_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "sg2")
    }
    
];

var Group1_st_ss = [
    {
        field: "SG1_AY",
        name: mappedDefinitions_ss.ay,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "ay", "sg1")
    },
    {
        field: "SG1_DAY",
        name: mappedDefinitions_ss.day,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "day", "sg1")
    },
    {
        field: "SG1_AL",
        name: mappedDefinitions_ss.al,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "al", "sg1")
    },
    {
        field: "SG1_DAL",
        name: mappedDefinitions_ss.dal,
        chartOutfields: getFields(sedimentSourceDefinitions, mappedDefinitions_ss, "dal", "sg1")
    }
    
];
////END SUSPENDED SEDIMENT LAYER GROUPS______________________________________________________________________________________________________________________________