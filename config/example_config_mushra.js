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
  "LoopByDefault": true,
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b> and <b>ABSENCE OF NOISE</b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b> and <b>ABSENCE OF NOISE</b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b> and <b>ABSENCE OF NOISE</b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b> and <b>ABSENCE OF NOISE</b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>ALL</b> samples first. Listen <b>TO THE END</b> of each.</li> <li>Then rate them based on their <b>QUALITY</b> and <b>ABSENCE OF NOISE</b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_5",
      "Files": {
            "WUNET": "audio/samples/DENOISE_CANTAMUS/WUNet/Tenor_294_1696.wav",
            "FSN": "audio/samples/DENOISE_CANTAMUS/FSN_NEW/Tenor_294_1696.wav",
            "NOISY": "audio/samples/DENOISE_CANTAMUS/NOISY/Tenor_294_1696.wav",
        }
    },

    // =============================================
    // PARALLEL
    // =============================================

    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_parallel_0",
      "Files": {
            "Reference": "audio/samples/PARALLEL/CLEAN/f1_caro_straight_NOISE_257259_4286987-hq_c0.wav",
            "FSN": "audio/samples/PARALLEL/FSN_NEW/f1_caro_straight_NOISE_257259_4286987-hq_c0.wav",
            "NOISY": "audio/samples/PARALLEL/NOISY/f1_caro_straight_NOISE_257259_4286987-hq_c0.wav",
            "WUNET": "audio/samples/PARALLEL/WUNet/f1_caro_straight_NOISE_257259_4286987-hq_c0.wav",
        }
    },

    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_parallel_1",
      "Files": {
            "Reference": "audio/samples/PARALLEL/CLEAN/m1_dona_straight_NOISE_502455_9289659-hq_c1.wav",
            "FSN": "audio/samples/PARALLEL/FSN_NEW/m1_dona_straight_NOISE_502455_9289659-hq_c1.wav",
            "NOISY": "audio/samples/PARALLEL/NOISY/m1_dona_straight_NOISE_502455_9289659-hq_c1.wav",
            "WUNET": "audio/samples/PARALLEL/WUNet/m1_dona_straight_NOISE_502455_9289659-hq_c1.wav",
        }
    },

    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_parallel_2",
      "Files": {
            "Reference": "audio/samples/PARALLEL/CLEAN/m6_caro_straight_NOISE_EM32_403a_1_Noise_Fan_c19.wav",
            "FSN": "audio/samples/PARALLEL/FSN_NEW/m6_caro_straight_NOISE_EM32_403a_1_Noise_Fan_c19.wav",
            "NOISY": "audio/samples/PARALLEL/NOISY/m6_caro_straight_NOISE_EM32_403a_1_Noise_Fan_c19.wav",
            "WUNET": "audio/samples/PARALLEL/WUNet/m6_caro_straight_NOISE_EM32_403a_1_Noise_Fan_c19.wav",
        }
    },

    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_parallel_3",
      "Files": {
            "Reference": "audio/samples/PARALLEL/CLEAN/m7_caro_straight_NOISE_ch07.wav",
            "FSN": "audio/samples/PARALLEL/FSN_NEW/m7_caro_straight_NOISE_ch07.wav",
            "NOISY": "audio/samples/PARALLEL/NOISY/m7_caro_straight_NOISE_ch07.wav",
            "WUNET": "audio/samples/PARALLEL/WUNet/m7_caro_straight_NOISE_ch07.wav",
        }
    },

    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_parallel_4",
      "Files": {
            "Reference": "audio/samples/PARALLEL/CLEAN/f1_caro_vibrato_NOISE_ch14.wav",
            "FSN": "audio/samples/PARALLEL/FSN_NEW/f1_caro_vibrato_NOISE_ch14.wav",
            "NOISY": "audio/samples/PARALLEL/NOISY/f1_caro_vibrato_NOISE_ch14.wav",
            "WUNET": "audio/samples/PARALLEL/WUNet/f1_caro_vibrato_NOISE_ch14.wav",
        }
    },
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
      "Name": "Denoising",
      "TestID": "denoise_parallel_5",
      "Files": {
            "Reference": "audio/samples/PARALLEL/CLEAN/m3_row_spoken_NOISE_ch06.wav",
            "FSN": "audio/samples/PARALLEL/FSN_NEW/m3_row_spoken_NOISE_ch06.wav",
            "NOISY": "audio/samples/PARALLEL/NOISY/m3_row_spoken_NOISE_ch06.wav",
            "WUNET": "audio/samples/PARALLEL/WUNet/m3_row_spoken_NOISE_ch06.wav",
        }
    },

    // =============================================
    // LRM
    // =============================================
    
    {
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
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
      "Advise": "<ol style='text-align:left'><li>Please listen to <b>REFERENCE</b> first</li><li>Then listen to <b>ALL</b> samples (Test Items). Listen <b>TO THE END</b> of each.</li> <li>Then rate items on <b>Basic Audio Quality (BAQ)</b>. BAQ is  is used to judge <b>any and all detected differences</b> between the reference and the test item. On the scale, this is more informally referred to as <b><em>difference</em></b></li></ol>",
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
