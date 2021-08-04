// configure the test here
var TestConfig = {
  "TestName": "Questionnaire - Quality Enhancement of Overdub Singing Recordings",
  "RateScalePngRef": "img/scale_abs copy.png",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":50,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 100,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    
    //easy one
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_0",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Tenor_229_1770.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Tenor_229_1770.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Tenor_229_1770.wav",
        }
    },

    //easy one
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_1",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Soprano_34_639.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Soprano_34_639.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Soprano_34_639.wav",
        }
    },

    //hard one
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_2",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Soprano_291_1043.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Soprano_291_1043.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Soprano_291_1043.wav",
        }
    },
    
    //easy one
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_3",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Alto_272_1826.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Alto_272_1826.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Alto_272_1826.wav",
        }
    },

    //harder one
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_4",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Bass_211_552.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Bass_211_552.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Bass_211_552.wav",
        }
    },

    //easy one
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_5",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Tenor_1_315.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Tenor_1_315.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Tenor_1_315.wav",
        }
    },
    
    {
      "Advise": "Please listen to <b>reference</b> first. Then listen to the test items below and rate their <b>SIMILARITY compared to the reference</b>.",
      "Name": "Leakage Removal",
      "TestID": "lrm_0",
      "Files": {
            "Reference": "audio/samples/LRM_ALIGNED/CLEAN/00008__Cantoría__Teresica Hermana__tenor.wav",
            "FSN": "audio/samples/LRM_ALIGNED/FSN_FULL_DUAL/TEST_SET_FOR_HUMAN_ALIGNED00008__Cantoría__Teresica Hermana__tenor.wav",
            "NOISY": "audio/samples/LRM_ALIGNED/NOISY/00008__Cantoría__Teresica Hermana__tenor.wav",
            "FSN-BASELINE": "audio/samples/LRM_ALIGNED/BASELINE_NO_HINT/TEST_SET_FOR_HUMAN_ALIGNED00008__Cantoría__Teresica Hermana__tenor.wav",
        }
    },

    {
      "Advise": "Please listen to <b>reference</b> first. Then listen to the test items below and rate their <b>SIMILARITY compared to the reference</b>.",
      "Name": "Leakage Removal",
      "TestID": "lrm_1",
      "Files": {
            "Reference": "audio/samples/LRM_ALIGNED/CLEAN/00013__Cantoría__Sus, sus, sus__alto.wav",
            "FSN": "audio/samples/LRM_ALIGNED/FSN_FULL_DUAL/TEST_SET_FOR_HUMAN_ALIGNED00013__Cantoría__Sus, sus, sus__alto.wav",
            "NOISY": "audio/samples/LRM_ALIGNED/NOISY/00013__Cantoría__Sus, sus, sus__alto.wav",
            "FSN-BASELINE": "audio/samples/LRM_ALIGNED/BASELINE_NO_HINT/TEST_SET_FOR_HUMAN_ALIGNED00013__Cantoría__Sus, sus, sus__alto.wav",
        }
    },

    {
      "Advise": "Please listen to <b>reference</b> first. Then listen to the test items below and rate their <b>SIMILARITY compared to the reference</b>.",
      "Name": "Leakage Removal",
      "TestID": "lrm_2",
      "Files": {
            "Reference": "audio/samples/LRM_ALIGNED/CLEAN/00016__Cantoría__Oy Comamos Y Bebamos__soprano.wav",
            "FSN": "audio/samples/LRM_ALIGNED/FSN_FULL_DUAL/TEST_SET_FOR_HUMAN_ALIGNED00016__Cantoría__Oy Comamos Y Bebamos__soprano.wav",
            "NOISY": "audio/samples/LRM_ALIGNED/NOISY/00016__Cantoría__Oy Comamos Y Bebamos__soprano.wav",
            "FSN-BASELINE": "audio/samples/LRM_ALIGNED/BASELINE_NO_HINT/TEST_SET_FOR_HUMAN_ALIGNED00016__Cantoría__Oy Comamos Y Bebamos__soprano.wav",
        }
    },

    {
      "Advise": "Please listen to <b>reference</b> first. Then listen to the test items below and rate their <b>SIMILARITY compared to the reference</b>.",
      "Name": "Leakage Removal",
      "TestID": "lrm_3",
      "Files": {
            "Reference": "audio/samples/LRM_ALIGNED/CLEAN/00019__Cantoría__Oy Comamos Y Bebamos__tenor.wav",
            "FSN": "audio/samples/LRM_ALIGNED/FSN_FULL_DUAL/TEST_SET_FOR_HUMAN_ALIGNED00019__Cantoría__Oy Comamos Y Bebamos__tenor.wav",
            "NOISY": "audio/samples/LRM_ALIGNED/NOISY/00019__Cantoría__Oy Comamos Y Bebamos__tenor.wav",
            "FSN-BASELINE": "audio/samples/LRM_ALIGNED/BASELINE_NO_HINT/TEST_SET_FOR_HUMAN_ALIGNED00019__Cantoría__Oy Comamos Y Bebamos__tenor.wav",
        }
    },

    {
      "Advise": "Please listen to <b>reference</b> first. Then listen to the test items below and rate their <b>SIMILARITY compared to the reference</b>.",
      "Name": "Leakage Removal",
      "TestID": "lrm_4",
      "Files": {
            "Reference": "audio/samples/LRM_ALIGNED/CLEAN/00020__Cantoría__Teresica Hermana__alto.wav",
            "FSN": "audio/samples/LRM_ALIGNED/FSN_FULL_DUAL/TEST_SET_FOR_HUMAN_ALIGNED00020__Cantoría__Teresica Hermana__alto.wav",
            "NOISY": "audio/samples/LRM_ALIGNED/NOISY/00020__Cantoría__Teresica Hermana__alto.wav",
            "FSN-BASELINE": "audio/samples/LRM_ALIGNED/BASELINE_NO_HINT/TEST_SET_FOR_HUMAN_ALIGNED00020__Cantoría__Teresica Hermana__alto.wav",
        }
    },

    {
      "Advise": "Please listen to <b>reference</b> first. Then listen to the test items below and rate their <b>SIMILARITY compared to the reference</b>.",
      "Name": "Leakage Removal",
      "TestID": "lrm_5",
      "Files": {
            "Reference": "audio/samples/LRM_ALIGNED/CLEAN/00043__Cantoría__Sus, sus, sus__tenor.wav",
            "FSN": "audio/samples/LRM_ALIGNED/FSN_FULL_DUAL/TEST_SET_FOR_HUMAN_ALIGNED00043__Cantoría__Sus, sus, sus__tenor.wav",
            "NOISY": "audio/samples/LRM_ALIGNED/NOISY/00043__Cantoría__Sus, sus, sus__tenor.wav",
            "FSN-BASELINE": "audio/samples/LRM_ALIGNED/BASELINE_NO_HINT/TEST_SET_FOR_HUMAN_ALIGNED00043__Cantoría__Sus, sus, sus__tenor.wav",
        }
    },
  ]
}
