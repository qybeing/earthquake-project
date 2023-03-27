import { data1 } from './curveData'
export interface DataProps {
    network: string
    station: string
    location: string
    channel: string
    start_time: string
    end_time: string
    curve_data: Array<number>
}
export const seismicData: DataProps[] = [
    {
        network: 'SX',
        station: 'ANZ',
        location: '00',
        channel: 'BHE',
        start_time: '2022-10-19 04:38:24',
        end_time: '2022-10-19 04:42:33',
        curve_data: data1
    }
]

export const siteData = [
    {
        name: 'AH.ANQ',
        value: [
            117.02,
            30.58
        ]
    },
    {
        name: 'AH.BAS',
        value: [
            117.3756,
            31.4727
        ]
    },
    {
        name: 'AH.BEB',
        value: [
            117.2974,
            32.9055
        ]
    },
    {
        name: 'AH.BZH',
        value: [
            115.7675,
            33.8334
        ]
    },
    {
        name: 'AH.BZY',
        value: [
            116.2164,
            31.3986
        ]
    },
    {
        name: 'AH.CHZ',
        value: [
            118.2801,
            32.2855
        ]
    },
    {
        name: 'AH.DYN',
        value: [
            117.4689,
            32.6442
        ]
    },
    {
        name: 'AH.FYT',
        value: [
            115.8031,
            32.946
        ]
    },
    {
        name: 'AH.FZL',
        value: [
            116.2704,
            31.3487
        ]
    },
    {
        name: 'AH.HBE',
        value: [
            116.79,
            33.9817
        ]
    },
    {
        name: 'AH.HEF',
        value: [
            117.142,
            31.824
        ]
    },
    {
        name: 'AH.HNA',
        value: [
            116.8039,
            32.6335
        ]
    },
    {
        name: 'AH.HSH',
        value: [
            118.0577,
            31.7696
        ]
    },
    {
        name: 'AH.HUS',
        value: [
            118.3778,
            29.7061
        ]
    },
    {
        name: 'AH.JAS',
        value: [
            118.2625,
            32.8106
        ]
    },
    {
        name: 'AH.JIX',
        value: [
            118.3778,
            30.6992
        ]
    },
    {
        name: 'AH.JZA',
        value: [
            115.8839,
            31.6889
        ]
    },
    {
        name: 'AH.LAN',
        value: [
            116.501,
            31.715
        ]
    },
    {
        name: 'AH.LNA',
        value: [
            116.142,
            31.34
        ]
    },
    {
        name: 'AH.MAS',
        value: [
            118.5689,
            31.6927
        ]
    },
    {
        name: 'AH.MCG',
        value: [
            116.48,
            33.35
        ]
    },
    {
        name: 'AH.SCH',
        value: [
            116.9842,
            31.348
        ]
    },
    {
        name: 'AH.SIX',
        value: [
            117.8591,
            33.5576
        ]
    },
    {
        name: 'AH.SJH',
        value: [
            116.0859,
            31.4361
        ]
    },
    {
        name: 'AH.TOL',
        value: [
            117.819,
            30.9246
        ]
    },
    {
        name: 'BJ.BBS',
        value: [
            116.24,
            39.91
        ]
    },
    {
        name: 'BJ.CIQ',
        value: [
            116.57,
            39.79
        ]
    },
    {
        name: 'BJ.DHC',
        value: [
            116.11,
            39.86
        ]
    },
    {
        name: 'BJ.FHY',
        value: [
            116.69,
            39.62
        ]
    },
    {
        name: 'BJ.JIZ',
        value: [
            116.56,
            40
        ]
    },
    {
        name: 'BJ.LBP',
        value: [
            116.21,
            40.57
        ]
    },
    {
        name: 'BJ.LLM',
        value: [
            116.64,
            40.63
        ]
    },
    {
        name: 'BJ.MAF',
        value: [
            117,
            40.05
        ]
    },
    {
        name: 'BJ.MIY',
        value: [
            116.83,
            40.47
        ]
    },
    {
        name: 'BJ.NKY',
        value: [
            115.97,
            39.69
        ]
    },
    {
        name: 'BJ.NLS',
        value: [
            116.65,
            40.21
        ]
    },
    {
        name: 'BJ.SSL',
        value: [
            116.23,
            40.25
        ]
    },
    {
        name: 'BJ.SZJ',
        value: [
            116.3,
            40
        ]
    },
    {
        name: 'BJ.TIT',
        value: [
            116.41,
            39.89
        ]
    },
    {
        name: 'BJ.XBZ',
        value: [
            115.97,
            40.34
        ]
    },
    {
        name: 'BJ.XIJ',
        value: [
            116.88,
            39.83
        ]
    },
    {
        name: 'BJ.YAZ',
        value: [
            116.83,
            40.15
        ]
    },
    {
        name: 'BJ.YUF',
        value: [
            116.32,
            39.52
        ]
    },
    {
        name: 'BJ.ZHT',
        value: [
            115.68,
            39.96
        ]
    },
    {
        name: 'BU.BDH',
        value: [
            119.4735,
            39.8254
        ]
    },
    {
        name: 'BU.BJT',
        value: [
            116.17,
            40.02
        ]
    },
    {
        name: 'BU.CDT',
        value: [
            117.9158,
            41.0153
        ]
    },
    {
        name: 'BU.CHL',
        value: [
            119.0962,
            39.7585
        ]
    },
    {
        name: 'BU.DAX',
        value: [
            116.3447,
            39.7506
        ]
    },
    {
        name: 'BU.DOH',
        value: [
            118.3278,
            39.7522
        ]
    },
    {
        name: 'BU.DSQ',
        value: [
            116.4264,
            40.0811
        ]
    },
    {
        name: 'BU.FHS',
        value: [
            116.3093,
            39.9459
        ]
    },
    {
        name: 'BU.GUY',
        value: [
            115.8217,
            41.6645
        ]
    },
    {
        name: 'BU.HBZ',
        value: [
            114.3082,
            38.2482
        ]
    },
    {
        name: 'BU.HUA',
        value: [
            114.4414,
            40.653
        ]
    },
    {
        name: 'BU.LAY',
        value: [
            114.9797,
            39.5103
        ]
    },
    {
        name: 'BU.LBG',
        value: [
            116.5956,
            40.8994
        ]
    },
    {
        name: 'BU.LQS',
        value: [
            116.0817,
            40.1017
        ]
    },
    {
        name: 'BU.MDY',
        value: [
            116.5602,
            40.3944
        ]
    },
    {
        name: 'BU.NSC',
        value: [
            117.2544,
            40.1397
        ]
    },
    {
        name: 'BU.SFS',
        value: [
            115.8138,
            39.6611
        ]
    },
    {
        name: 'BU.SHC',
        value: [
            115.5231,
            40.4406
        ]
    },
    {
        name: 'BU.SZL',
        value: [
            117.217,
            40.3072
        ]
    },
    {
        name: 'BU.TAS',
        value: [
            115.493,
            40.0836
        ]
    },
    {
        name: 'BU.TST',
        value: [
            117.1276,
            40.5371
        ]
    },
    {
        name: 'BU.WAX',
        value: [
            115.0628,
            38.8639
        ]
    },
    {
        name: 'BU.WEA',
        value: [
            116.4534,
            38.8469
        ]
    },
    {
        name: 'BU.XOX',
        value: [
            116.0936,
            38.9594
        ]
    },
    {
        name: 'BU.XUH',
        value: [
            115.0428,
            40.4783
        ]
    },
    {
        name: 'BU.ZHL',
        value: [
            115.1331,
            40.1572
        ]
    },
    {
        name: 'BU.ZJT',
        value: [
            114.9018,
            40.8307
        ]
    },
    {
        name: 'BU.ZKD',
        value: [
            115.9222,
            39.6881
        ]
    },
    {
        name: 'BU.ZUH',
        value: [
            117.6761,
            40.1919
        ]
    },
    {
        name: 'CQ.CHK',
        value: [
            108.6461,
            31.9627
        ]
    },
    {
        name: 'CQ.CHS',
        value: [
            107.2325,
            29.905
        ]
    },
    {
        name: 'CQ.CQT',
        value: [
            106.573,
            29.4222
        ]
    },
    {
        name: 'CQ.FUL',
        value: [
            107.4375,
            29.7263
        ]
    },
    {
        name: 'CQ.HCB',
        value: [
            109.1,
            31.53
        ]
    },
    {
        name: 'CQ.QIJ',
        value: [
            108.7958,
            29.5639
        ]
    },
    {
        name: 'CQ.ROC',
        value: [
            105.4431,
            29.3793
        ]
    },
    {
        name: 'CQ.SHZ',
        value: [
            108.3847,
            30.2444
        ]
    },
    {
        name: 'CQ.WAS',
        value: [
            106.9167,
            28.875
        ]
    },
    {
        name: 'CQ.WAZ',
        value: [
            108.4607,
            30.752
        ]
    },
    {
        name: 'CQ.WUL',
        value: [
            107.8265,
            29.1881
        ]
    },
    {
        name: 'CQ.WUX',
        value: [
            109.6107,
            31.401
        ]
    },
    {
        name: 'CQ.XIS',
        value: [
            108.95,
            28.42
        ]
    },
    {
        name: 'CQ.YUB',
        value: [
            106.8273,
            29.8583
        ]
    },
    {
        name: 'FJ.CTTZ',
        value: [
            116.35,
            25.84
        ]
    },
    {
        name: 'FJ.DSXP',
        value: [
            117.43,
            23.71
        ]
    },
    {
        name: 'FJ.FDQY',
        value: [
            120.26,
            27.12
        ]
    },
    {
        name: 'FJ.FQDZ',
        value: [
            119.29,
            25.7
        ]
    },
    {
        name: 'FJ.FZCM',
        value: [
            119.37,
            26.01
        ]
    },
    {
        name: 'FJ.GTSK',
        value: [
            118.73,
            26.37
        ]
    },
    {
        name: 'FJ.HAHF',
        value: [
            117.52,
            25.01
        ]
    },
    {
        name: 'FJ.HAJF',
        value: [
            118.96,
            24.98
        ]
    },
    {
        name: 'FJ.LJTL',
        value: [
            119.92,
            26.35
        ]
    },
    {
        name: 'FJ.LYXP',
        value: [
            117.03,
            25.13
        ]
    },
    {
        name: 'FJ.MQDQ',
        value: [
            118.91,
            26.38
        ]
    },
    {
        name: 'FJ.MXXF',
        value: [
            117.19,
            26.35
        ]
    },
    {
        name: 'FJ.NDZW',
        value: [
            119.56,
            26.68
        ]
    },
    {
        name: 'FJ.NPDK',
        value: [
            118.19,
            26.62
        ]
    },
    {
        name: 'FJ.PCNP',
        value: [
            118.52,
            27.91
        ]
    },
    {
        name: 'FJ.PHSG',
        value: [
            117.34,
            24.4
        ]
    },
    {
        name: 'FJ.PTLC',
        value: [
            119.01,
            25.45
        ]
    },
    {
        name: 'FJ.PTNR',
        value: [
            119.47,
            25.22
        ]
    },
    {
        name: 'FJ.PTTC',
        value: [
            119.76,
            25.5
        ]
    },
    {
        name: 'FJ.QZH',
        value: [
            118.59,
            24.94
        ]
    },
    {
        name: 'FJ.SHLC',
        value: [
            116.45,
            25.03
        ]
    },
    {
        name: 'FJ.SNQY',
        value: [
            119.48,
            27.4
        ]
    },
    {
        name: 'FJ.SWDT',
        value: [
            117.48,
            27.33
        ]
    },
    {
        name: 'FJ.TNSC',
        value: [
            117.18,
            26.91
        ]
    },
    {
        name: 'FJ.WYXF',
        value: [
            118.01,
            27.75
        ]
    },
    {
        name: 'FJ.XMSM',
        value: [
            118.08,
            24.45
        ]
    },
    {
        name: 'FJ.YAXT',
        value: [
            117.12,
            25.72
        ]
    },
    {
        name: 'FJ.YAYX',
        value: [
            117.36,
            25.99
        ]
    },
    {
        name: 'FJ.YCSG',
        value: [
            118.23,
            25.34
        ]
    },
    {
        name: 'FJ.YDXS',
        value: [
            116.63,
            24.7
        ]
    },
    {
        name: 'FJ.YXBM',
        value: [
            118.11,
            26.04
        ]
    },
    {
        name: 'FJ.ZHNZ',
        value: [
            118.86,
            27.36
        ]
    },
    {
        name: 'FJ.ZZJH',
        value: [
            117.63,
            24.47
        ]
    },
    {
        name: 'GD.CHZ',
        value: [
            116.64,
            23.67
        ]
    },
    {
        name: 'GD.DGD',
        value: [
            114.3,
            22.06
        ]
    },
    {
        name: 'GD.DNB',
        value: [
            111.21,
            21.65
        ]
    },
    {
        name: 'GD.DOG',
        value: [
            113.72,
            22.88
        ]
    },
    {
        name: 'GD.FES',
        value: [
            116.21,
            23.82
        ]
    },
    {
        name: 'GD.GAZ',
        value: [
            111.01,
            22.05
        ]
    },
    {
        name: 'GD.GZH',
        value: [
            113.65,
            23.65
        ]
    },
    {
        name: 'GD.HEJ',
        value: [
            110.55,
            21.93
        ]
    },
    {
        name: 'GD.HUD',
        value: [
            113.23,
            23.52
        ]
    },
    {
        name: 'GD.HUJ',
        value: [
            112.3,
            24.04
        ]
    },
    {
        name: 'GD.HUZ',
        value: [
            114.42,
            23.24
        ]
    },
    {
        name: 'GD.HYJ',
        value: [
            114.59,
            23.72
        ]
    },
    {
        name: 'GD.JIX',
        value: [
            115.7,
            23.43
        ]
    },
    {
        name: 'GD.LCH',
        value: [
            115.27,
            24.1
        ]
    },
    {
        name: 'GD.LIP',
        value: [
            114.46,
            24.36
        ]
    },
    {
        name: 'GD.LIZ',
        value: [
            112.39,
            24.8
        ]
    },
    {
        name: 'GD.LTK',
        value: [
            114.65,
            23.66
        ]
    },
    {
        name: 'GD.MEZ',
        value: [
            116.14,
            24.32
        ]
    },
    {
        name: 'GD.NAO',
        value: [
            117.01,
            23.43
        ]
    },
    {
        name: 'GD.NAP',
        value: [
            117.28,
            23.26
        ]
    },
    {
        name: 'GD.PUN',
        value: [
            116.14,
            23.29
        ]
    },
    {
        name: 'GD.SCD',
        value: [
            112.8,
            21.71
        ]
    },
    {
        name: 'GD.SHD',
        value: [
            111,
            21.44
        ]
    },
    {
        name: 'GD.SHG',
        value: [
            113.58,
            24.86
        ]
    },
    {
        name: 'GD.SHT',
        value: [
            116.63,
            23.42
        ]
    },
    {
        name: 'GD.SHW',
        value: [
            115.37,
            22.79
        ]
    },
    {
        name: 'GD.SLG',
        value: [
            113.35,
            23.09
        ]
    },
    {
        name: 'GD.SZN',
        value: [
            114.14,
            22.55
        ]
    },
    {
        name: 'GD.TIS',
        value: [
            112.88,
            22.27
        ]
    },
    {
        name: 'GD.TIX',
        value: [
            116.51,
            23.13
        ]
    },
    {
        name: 'GD.XFJ',
        value: [
            114.66,
            23.74
        ]
    },
    {
        name: 'GD.XIG',
        value: [
            114.64,
            23.78
        ]
    },
    {
        name: 'GD.XNH',
        value: [
            113.03,
            22.57
        ]
    },
    {
        name: 'GD.XNY',
        value: [
            110.93,
            22.35
        ]
    },
    {
        name: 'GD.YGC',
        value: [
            111.94,
            22.42
        ]
    },
    {
        name: 'GD.YGD',
        value: [
            112.25,
            21.71
        ]
    },
    {
        name: 'GD.YGJ',
        value: [
            111.95,
            21.86
        ]
    },
    {
        name: 'GD.YGX',
        value: [
            111.6,
            21.75
        ]
    },
    {
        name: 'GD.YND',
        value: [
            113.36,
            24.13
        ]
    },
    {
        name: 'GD.ZHH',
        value: [
            113.57,
            22.27
        ]
    },
    {
        name: 'GD.ZHJ',
        value: [
            110.38,
            21.39
        ]
    },
    {
        name: 'GD.ZHQ',
        value: [
            112.54,
            23.18
        ]
    },
    {
        name: 'GD.ZHS',
        value: [
            113.36,
            22.49
        ]
    },
    {
        name: 'GD.ZIJ',
        value: [
            115.17,
            23.7
        ]
    },
    {
        name: 'GS.AXX',
        value: [
            95.8128,
            40.4145
        ]
    },
    {
        name: 'GS.BYT',
        value: [
            104.1302,
            36.5809
        ]
    },
    {
        name: 'GS.CHM',
        value: [
            96.7749,
            39.8805
        ]
    },
    {
        name: 'GS.CXT',
        value: [
            105.7613,
            33.7312
        ]
    },
    {
        name: 'GS.DBT',
        value: [
            103.2304,
            34.0601
        ]
    },
    {
        name: 'GS.DHT',
        value: [
            94.8117,
            40.0276
        ]
    },
    {
        name: 'GS.GLT',
        value: [
            103.095,
            37.3784
        ]
    },
    {
        name: 'GS.GTA',
        value: [
            99.8167,
            39.4
        ]
    },
    {
        name: 'GS.HCH',
        value: [
            108.4608,
            36.2504
        ]
    },
    {
        name: 'GS.HJT',
        value: [
            102.0114,
            37.8314
        ]
    },
    {
        name: 'GS.HNT',
        value: [
            105.0701,
            35.6911
        ]
    },
    {
        name: 'GS.HXP',
        value: [
            102.1102,
            38.3907
        ]
    },
    {
        name: 'GS.HXT',
        value: [
            107.2705,
            36.5896
        ]
    },
    {
        name: 'GS.HYS',
        value: [
            102.8314,
            38.4007
        ]
    },
    {
        name: 'GS.HZT',
        value: [
            102.9115,
            35.01
        ]
    },
    {
        name: 'GS.JFS',
        value: [
            98.7412,
            39.3907
        ]
    },
    {
        name: 'GS.JNT',
        value: [
            105.7713,
            35.5309
        ]
    },
    {
        name: 'GS.JTA',
        value: [
            104.0902,
            37.1903
        ]
    },
    {
        name: 'GS.JYG',
        value: [
            98.2104,
            39.8114
        ]
    },
    {
        name: 'GS.LQT',
        value: [
            102.652,
            34.5379
        ]
    },
    {
        name: 'GS.LTT',
        value: [
            103.3606,
            34.6711
        ]
    },
    {
        name: 'GS.LXA',
        value: [
            103.263,
            35.6275
        ]
    },
    {
        name: 'GS.LYT',
        value: [
            95.5008,
            41.0901
        ]
    },
    {
        name: 'GS.LZH',
        value: [
            103.8444,
            36.0833
        ]
    },
    {
        name: 'GS.MIQ',
        value: [
            103.2504,
            39.07
        ]
    },
    {
        name: 'GS.MQT',
        value: [
            102.0601,
            34.02
        ]
    },
    {
        name: 'GS.MXT',
        value: [
            104.02,
            34.4307
        ]
    },
    {
        name: 'GS.NXT',
        value: [
            107.9215,
            35.5609
        ]
    },
    {
        name: 'GS.PLT',
        value: [
            106.6811,
            35.4508
        ]
    },
    {
        name: 'GS.QTS',
        value: [
            97.7412,
            39.7003
        ]
    },
    {
        name: 'GS.SBC',
        value: [
            95.9215,
            39.4908
        ]
    },
    {
        name: 'GS.SDT',
        value: [
            101.333,
            38.7713
        ]
    },
    {
        name: 'GS.SGS',
        value: [
            103.8845,
            37.5356
        ]
    },
    {
        name: 'GS.SGT',
        value: [
            102.7613,
            37.621
        ]
    },
    {
        name: 'GS.SNT',
        value: [
            99.611,
            38.8414
        ]
    },
    {
        name: 'GS.TSS',
        value: [
            106.0206,
            34.3425
        ]
    },
    {
        name: 'GS.WDT',
        value: [
            104.9917,
            33.3606
        ]
    },
    {
        name: 'GS.WSH',
        value: [
            105.05,
            34.6611
        ]
    },
    {
        name: 'GS.WXT',
        value: [
            104.6811,
            32.9516
        ]
    },
    {
        name: 'GS.WYT',
        value: [
            104.1,
            35.04
        ]
    },
    {
        name: 'GS.YDT',
        value: [
            103.3205,
            36.8013
        ]
    },
    {
        name: 'GS.YJZ',
        value: [
            98.6411,
            40.3907
        ]
    },
    {
        name: 'GS.YMG',
        value: [
            93.6611,
            40.5208
        ]
    },
    {
        name: 'GS.YWX',
        value: [
            96.9015,
            41.0906
        ]
    },
    {
        name: 'GS.ZHC',
        value: [
            106.3005,
            34.9316
        ]
    },
    {
        name: 'GS.ZHQ',
        value: [
            104.3806,
            33.8114
        ]
    },
    {
        name: 'GS.ZHY',
        value: [
            100.5309,
            39.0915
        ]
    },
    {
        name: 'GS.ZYT',
        value: [
            107.018,
            35.7781
        ]
    },
    {
        name: 'GX.BHS',
        value: [
            109.2125,
            21.6525
        ]
    },
    {
        name: 'GX.BSS',
        value: [
            106.5565,
            23.8951
        ]
    },
    {
        name: 'GX.CZS',
        value: [
            107.354,
            22.3734
        ]
    },
    {
        name: 'GX.DHX',
        value: [
            107.9883,
            23.7489
        ]
    },
    {
        name: 'GX.DXS',
        value: [
            107.4966,
            21.6718
        ]
    },
    {
        name: 'GX.DXX',
        value: [
            107.186,
            22.8385
        ]
    },
    {
        name: 'GX.GGS',
        value: [
            109.618,
            23.0553
        ]
    },
    {
        name: 'GX.GUL',
        value: [
            110.3661,
            25.2911
        ]
    },
    {
        name: 'GX.HCS',
        value: [
            108.0215,
            24.6729
        ]
    },
    {
        name: 'GX.HZS',
        value: [
            111.5674,
            24.4258
        ]
    },
    {
        name: 'GX.LNS',
        value: [
            109.2801,
            22.4202
        ]
    },
    {
        name: 'GX.NNS',
        value: [
            108.1512,
            22.8911
        ]
    },
    {
        name: 'GX.PGX',
        value: [
            107.5781,
            23.3277
        ]
    },
    {
        name: 'GX.PNX',
        value: [
            110.4351,
            23.6136
        ]
    },
    {
        name: 'GX.PXS',
        value: [
            106.7512,
            22.1301
        ]
    },
    {
        name: 'GX.QZS',
        value: [
            108.6368,
            22.276
        ]
    },
    {
        name: 'GX.TE',
        value: [
            107.168,
            24.9823
        ]
    },
    {
        name: 'GX.WZD',
        value: [
            109.1015,
            21.0306
        ]
    },
    {
        name: 'GX.WZS',
        value: [
            111.2339,
            23.4808
        ]
    },
    {
        name: 'GX.XCT',
        value: [
            108.6101,
            23.9483
        ]
    },
    {
        name: 'GX.YLS',
        value: [
            110.173,
            22.6351
        ]
    },
    {
        name: 'GX.YTT',
        value: [
            107.5175,
            24.0293
        ]
    },
    {
        name: 'GZ.AST',
        value: [
            106.0552,
            26.1518
        ]
    },
    {
        name: 'GZ.BJT',
        value: [
            105.3497,
            27.2435
        ]
    },
    {
        name: 'GZ.DJT',
        value: [
            108.13,
            28.22
        ]
    },
    {
        name: 'GZ.KLT',
        value: [
            107.986,
            26.5438
        ]
    },
    {
        name: 'GZ.LBT',
        value: [
            108.0274,
            25.3226
        ]
    },
    {
        name: 'GZ.LDT',
        value: [
            106.7488,
            25.4249
        ]
    },
    {
        name: 'GZ.LPS',
        value: [
            104.77,
            26.65
        ]
    },
    {
        name: 'GZ.LPT',
        value: [
            109.217,
            26.1787
        ]
    },
    {
        name: 'GZ.WNT',
        value: [
            104.3029,
            26.9072
        ]
    },
    {
        name: 'GZ.XYT',
        value: [
            104.9,
            25.04
        ]
    },
    {
        name: 'GZ.YPT',
        value: [
            108.8132,
            27.2121
        ]
    },
    {
        name: 'GZ.ZFT',
        value: [
            105.629,
            25.3872
        ]
    },
    {
        name: 'GZ.ZYT',
        value: [
            106.851,
            27.7663
        ]
    },
    {
        name: 'HA.AY',
        value: [
            114.296,
            36.0841
        ]
    },
    {
        name: 'HA.DA',
        value: [
            111.32,
            34.8
        ]
    },
    {
        name: 'HA.HEB',
        value: [
            114.163,
            35.8904
        ]
    },
    {
        name: 'HA.HH',
        value: [
            113.61,
            34.71
        ]
    },
    {
        name: 'HA.HX',
        value: [
            113.441,
            35.4475
        ]
    },
    {
        name: 'HA.JS',
        value: [
            113.24,
            34.61
        ]
    },
    {
        name: 'HA.JY',
        value: [
            112.449,
            35.1629
        ]
    },
    {
        name: 'HA.JZ',
        value: [
            113.213,
            35.2675
        ]
    },
    {
        name: 'HA.KAF',
        value: [
            114.335,
            34.8207
        ]
    },
    {
        name: 'HA.LS',
        value: [
            111.04,
            34.0183
        ]
    },
    {
        name: 'HA.LUS',
        value: [
            112.484,
            33.7474
        ]
    },
    {
        name: 'HA.LYN',
        value: [
            112.47,
            34.55
        ]
    },
    {
        name: 'HA.LZH',
        value: [
            113.8348,
            36.0614
        ]
    },
    {
        name: 'HA.NY',
        value: [
            112.27,
            33.14
        ]
    },
    {
        name: 'HA.PDS',
        value: [
            113.298,
            33.7116
        ]
    },
    {
        name: 'HA.PY',
        value: [
            115.01,
            35.77
        ]
    },
    {
        name: 'HA.QF',
        value: [
            115.09,
            35.9
        ]
    },
    {
        name: 'HA.SC',
        value: [
            115.418,
            31.7905
        ]
    },
    {
        name: 'HA.SHS',
        value: [
            114.649,
            33.5475
        ]
    },
    {
        name: 'HA.SQ',
        value: [
            115.64,
            34.46
        ]
    },
    {
        name: 'HA.XC',
        value: [
            113.8381,
            34.0304
        ]
    },
    {
        name: 'HA.XX',
        value: [
            114.539,
            35.6618
        ]
    },
    {
        name: 'HA.XY',
        value: [
            114.012,
            32.1326
        ]
    },
    {
        name: 'HA.YJ',
        value: [
            114.1833,
            35.15
        ]
    },
    {
        name: 'HA.ZK',
        value: [
            114.64,
            33.66
        ]
    },
    {
        name: 'HA.ZMD',
        value: [
            113.745,
            33.1334
        ]
    },
    {
        name: 'HB.DJI',
        value: [
            111.5254,
            32.5527
        ]
    },
    {
        name: 'HB.DWU',
        value: [
            114.12,
            31.4986
        ]
    },
    {
        name: 'HB.ENS',
        value: [
            109.4951,
            30.2763
        ]
    },
    {
        name: 'HB.FXI',
        value: [
            110.724,
            31.9381
        ]
    },
    {
        name: 'HB.HFE',
        value: [
            110.0213,
            29.9036
        ]
    },
    {
        name: 'HB.HME',
        value: [
            115.894,
            30.135
        ]
    },
    {
        name: 'HB.JME',
        value: [
            112.1688,
            31.1191
        ]
    },
    {
        name: 'HB.JYU',
        value: [
            113.8389,
            29.816
        ]
    },
    {
        name: 'HB.LCH',
        value: [
            108.8821,
            30.3718
        ]
    },
    {
        name: 'HB.MCH',
        value: [
            115.1551,
            31.1315
        ]
    },
    {
        name: 'HB.NZH',
        value: [
            111.616,
            31.3919
        ]
    },
    {
        name: 'HB.QJI',
        value: [
            112.7733,
            30.4497
        ]
    },
    {
        name: 'HB.SSH',
        value: [
            112.6898,
            29.6463
        ]
    },
    {
        name: 'HB.SYA',
        value: [
            110.7186,
            32.5968
        ]
    },
    {
        name: 'HB.SZH',
        value: [
            113.39,
            31.63
        ]
    },
    {
        name: 'HB.SZI',
        value: [
            111.7971,
            30.201
        ]
    },
    {
        name: 'HB.WHA',
        value: [
            114.5068,
            30.5059
        ]
    },
    {
        name: 'HB.WHN',
        value: [
            114.3538,
            30.5429
        ]
    },
    {
        name: 'HB.XFA',
        value: [
            112.0416,
            32.0025
        ]
    },
    {
        name: 'HB.XNI',
        value: [
            114.4106,
            29.7158
        ]
    },
    {
        name: 'HB.XSH',
        value: [
            110.8421,
            31.26
        ]
    },
    {
        name: 'HB.YCH',
        value: [
            111.3155,
            30.7836
        ]
    },
    {
        name: 'HB.YDU',
        value: [
            111.2111,
            30.2136
        ]
    },
    {
        name: 'HB.YNX',
        value: [
            115.1124,
            30.0227
        ]
    },
    {
        name: 'HB.YXI',
        value: [
            110.4319,
            32.9864
        ]
    },
    {
        name: 'HB.ZHX',
        value: [
            112.7273,
            31.1724
        ]
    },
    {
        name: 'HB.ZSH',
        value: [
            110.2167,
            32.2497
        ]
    },
    {
        name: 'HB.ZUX',
        value: [
            109.711,
            32.324
        ]
    },
    {
        name: 'HE.CAZ',
        value: [
            116.84,
            38.34
        ]
    },
    {
        name: 'HE.CHC',
        value: [
            115.84,
            40.91
        ]
    },
    {
        name: 'HE.CHD',
        value: [
            117.92,
            41.02
        ]
    },
    {
        name: 'HE.CLI',
        value: [
            119.1,
            39.76
        ]
    },
    {
        name: 'HE.CXT',
        value: [
            114.05,
            36.43
        ]
    },
    {
        name: 'HE.FEN',
        value: [
            116.62,
            41.22
        ]
    },
    {
        name: 'HE.FUC',
        value: [
            116.16,
            37.86
        ]
    },
    {
        name: 'HE.FXT',
        value: [
            114.95,
            36.62
        ]
    },
    {
        name: 'HE.GAN',
        value: [
            114.02,
            38.37
        ]
    },
    {
        name: 'HE.GAZ',
        value: [
            115.18,
            37.13
        ]
    },
    {
        name: 'HE.HEJ',
        value: [
            116.09,
            38.45
        ]
    },
    {
        name: 'HE.HNS',
        value: [
            114.71,
            37.4
        ]
    },
    {
        name: 'HE.HST',
        value: [
            113.95,
            36.19
        ]
    },
    {
        name: 'HE.HUH',
        value: [
            117.46,
            38.39
        ]
    },
    {
        name: 'HE.JNX',
        value: [
            114.15,
            38.03
        ]
    },
    {
        name: 'HE.JTG',
        value: [
            118.99,
            39.23
        ]
    },
    {
        name: 'HE.KAB',
        value: [
            114.59,
            41.85
        ]
    },
    {
        name: 'HE.KUC',
        value: [
            118.47,
            40.59
        ]
    },
    {
        name: 'HE.LIC',
        value: [
            114.39,
            37.45
        ]
    },
    {
        name: 'HE.LIX',
        value: [
            115.56,
            38.49
        ]
    },
    {
        name: 'HE.LOH',
        value: [
            117.71,
            41.32
        ]
    },
    {
        name: 'HE.LUQ',
        value: [
            114.31,
            38
        ]
    },
    {
        name: 'HE.LZT',
        value: [
            114.63,
            36.34
        ]
    },
    {
        name: 'HE.MEC',
        value: [
            117.1,
            38.06
        ]
    },
    {
        name: 'HE.QIL',
        value: [
            118.9,
            40.42
        ]
    },
    {
        name: 'HE.QIX',
        value: [
            118.32,
            40.2
        ]
    },
    {
        name: 'HE.REX',
        value: [
            114.69,
            37.13
        ]
    },
    {
        name: 'HE.SHX',
        value: [
            115.56,
            38.01
        ]
    },
    {
        name: 'HE.SXT',
        value: [
            113.64,
            36.55
        ]
    },
    {
        name: 'HE.TAG',
        value: [
            114.55,
            38.03
        ]
    },
    {
        name: 'HE.TAH',
        value: [
            118.43,
            39.25
        ]
    },
    {
        name: 'HE.TLK',
        value: [
            119.04,
            40.14
        ]
    },
    {
        name: 'HE.WAT',
        value: [
            114.05,
            36.81
        ]
    },
    {
        name: 'HE.WEC',
        value: [
            117.75,
            41.93
        ]
    },
    {
        name: 'HE.WUJ',
        value: [
            114.96,
            38.24
        ]
    },
    {
        name: 'HE.XIH',
        value: [
            115.22,
            37.52
        ]
    },
    {
        name: 'HE.XIL',
        value: [
            117.47,
            40.41
        ]
    },
    {
        name: 'HE.XIT',
        value: [
            114.37,
            38.53
        ]
    },
    {
        name: 'HE.XLD',
        value: [
            118.02,
            40.39
        ]
    },
    {
        name: 'HE.XLE',
        value: [
            114.66,
            38.35
        ]
    },
    {
        name: 'HE.XTT',
        value: [
            114.31,
            37.12
        ]
    },
    {
        name: 'HE.XUS',
        value: [
            115.66,
            39.02
        ]
    },
    {
        name: 'HE.YAY',
        value: [
            114.17,
            40.16
        ]
    },
    {
        name: 'HE.YIX',
        value: [
            115.37,
            39.35
        ]
    },
    {
        name: 'HE.YON',
        value: [
            114.42,
            36.75
        ]
    },
    {
        name: 'HE.YOQ',
        value: [
            116.44,
            39.23
        ]
    },
    {
        name: 'HE.YUS',
        value: [
            114.37,
            37.79
        ]
    },
    {
        name: 'HE.ZAH',
        value: [
            114.4,
            37.66
        ]
    },
    {
        name: 'HE.ZAQ',
        value: [
            115.85,
            37.44
        ]
    },
    {
        name: 'HE.ZDN',
        value: [
            114.58,
            38.15
        ]
    },
    {
        name: 'HE.ZHB',
        value: [
            114.49,
            41.4
        ]
    },
    {
        name: 'HE.ZHX',
        value: [
            114.78,
            37.75
        ]
    },
    {
        name: 'HE.ZJK',
        value: [
            114.9,
            40.83
        ]
    },
    {
        name: 'HI.BSH',
        value: [
            109.1808,
            19.2478
        ]
    },
    {
        name: 'HI.BSL',
        value: [
            110.2616,
            19.3633
        ]
    },
    {
        name: 'HI.CHM',
        value: [
            110.0034,
            19.5968
        ]
    },
    {
        name: 'HI.DAN',
        value: [
            110.3239,
            19.67
        ]
    },
    {
        name: 'HI.DOF',
        value: [
            108.7292,
            19.0655
        ]
    },
    {
        name: 'HI.HSK',
        value: [
            110.215,
            19.9285
        ]
    },
    {
        name: 'HI.JFL',
        value: [
            108.7895,
            18.704
        ]
    },
    {
        name: 'HI.LSH',
        value: [
            109.9957,
            18.4998
        ]
    },
    {
        name: 'HI.LZH',
        value: [
            110.176,
            20.5812
        ]
    },
    {
        name: 'HI.NAD',
        value: [
            109.6189,
            19.5337
        ]
    },
    {
        name: 'HI.QIH',
        value: [
            110.4762,
            19.2217
        ]
    },
    {
        name: 'HI.QSL',
        value: [
            110.7542,
            19.6656
        ]
    },
    {
        name: 'HI.QXL',
        value: [
            110.599,
            20.0869
        ]
    },
    {
        name: 'HI.QZN',
        value: [
            109.8443,
            19.0294
        ]
    },
    {
        name: 'HI.SAJ',
        value: [
            110.6413,
            19.8887
        ]
    },
    {
        name: 'HI.SAY',
        value: [
            109.4935,
            18.204
        ]
    },
    {
        name: 'HI.SHP',
        value: [
            110.3151,
            19.9499
        ]
    },
    {
        name: 'HI.SLL',
        value: [
            109.4323,
            19.8082
        ]
    },
    {
        name: 'HI.WAN',
        value: [
            110.4238,
            18.8007
        ]
    },
    {
        name: 'HI.WET',
        value: [
            110.8704,
            19.9578
        ]
    },
    {
        name: 'HI.WZS',
        value: [
            109.5276,
            18.7972
        ]
    },
    {
        name: 'HI.XSA',
        value: [
            112.48,
            16.36
        ]
    },
    {
        name: 'HI.YML',
        value: [
            110.2795,
            19.853
        ]
    },
    {
        name: 'HL.BAQ',
        value: [
            132.1489,
            46.3296
        ]
    },
    {
        name: 'HL.BEL',
        value: [
            127.1581,
            46.9717
        ]
    },
    {
        name: 'HL.BJS',
        value: [
            126.081,
            48.687
        ]
    },
    {
        name: 'HL.BNX',
        value: [
            127.403,
            45.739
        ]
    },
    {
        name: 'HL.DNI',
        value: [
            131.0911,
            44.0572
        ]
    },
    {
        name: 'HL.FUY',
        value: [
            134.275,
            48.355
        ]
    },
    {
        name: 'HL.HEG',
        value: [
            130.2364,
            47.3528
        ]
    },
    {
        name: 'HL.HEH',
        value: [
            127.41,
            50.253
        ]
    },
    {
        name: 'HL.HHL',
        value: [
            128.89,
            44.35
        ]
    },
    {
        name: 'HL.JGD',
        value: [
            124.0923,
            50.3185
        ]
    },
    {
        name: 'HL.JIY',
        value: [
            129.866,
            49.0412
        ]
    },
    {
        name: 'HL.JMS',
        value: [
            130.3245,
            46.7325
        ]
    },
    {
        name: 'HL.LBE',
        value: [
            130.8286,
            47.596
        ]
    },
    {
        name: 'HL.LIH',
        value: [
            128.4996,
            44.3312
        ]
    },
    {
        name: 'HL.MDJ',
        value: [
            129.589,
            44.616
        ]
    },
    {
        name: 'HL.MIH',
        value: [
            131.8099,
            45.6263
        ]
    },
    {
        name: 'HL.MOH',
        value: [
            122.349,
            53.455
        ]
    },
    {
        name: 'HL.NEH',
        value: [
            124.5637,
            48.4844
        ]
    },
    {
        name: 'HL.NZN',
        value: [
            122.8821,
            47.5374
        ]
    },
    {
        name: 'HL.QAN',
        value: [
            127.6181,
            46.584
        ]
    },
    {
        name: 'HL.QTH',
        value: [
            131.079,
            45.7422
        ]
    },
    {
        name: 'HL.SEL',
        value: [
            128.53,
            44.19
        ]
    },
    {
        name: 'HL.SHZ',
        value: [
            128.956,
            44.062
        ]
    },
    {
        name: 'HL.SYS',
        value: [
            131.093,
            46.6589
        ]
    },
    {
        name: 'HL.TAH',
        value: [
            124.6672,
            52.3361
        ]
    },
    {
        name: 'HL.TOH',
        value: [
            128.6508,
            46.0847
        ]
    },
    {
        name: 'HL.TUJ',
        value: [
            126.023,
            48.5968
        ]
    },
    {
        name: 'HL.WDL',
        value: [
            126.1361,
            48.6718
        ]
    },
    {
        name: 'HL.WUC',
        value: [
            127.0801,
            45.1247
        ]
    },
    {
        name: 'HL.XBH',
        value: [
            128.66,
            44.18
        ]
    },
    {
        name: 'HL.XUK',
        value: [
            128.9159,
            49.0813
        ]
    },
    {
        name: 'HL.YAS',
        value: [
            128.4036,
            45.3377
        ]
    },
    {
        name: 'HL.YCH',
        value: [
            128.5647,
            47.6345
        ]
    },
    {
        name: 'HL.YIL',
        value: [
            129.2854,
            46.4763
        ]
    },
    {
        name: 'HL.ZHY',
        value: [
            124.3784,
            45.6815
        ]
    },
    {
        name: 'HN.CHL',
        value: [
            113.5059,
            26.7951
        ]
    },
    {
        name: 'HN.CHZ',
        value: [
            113.0397,
            25.8187
        ]
    },
    {
        name: 'HN.CNS',
        value: [
            112.93,
            28.1819
        ]
    },
    {
        name: 'HN.HEY',
        value: [
            112.5189,
            26.9203
        ]
    },
    {
        name: 'HN.HOJ',
        value: [
            109.9951,
            27.1145
        ]
    },
    {
        name: 'HN.HUR',
        value: [
            112.5563,
            29.5498
        ]
    },
    {
        name: 'HN.JGS',
        value: [
            111.89,
            29.39
        ]
    },
    {
        name: 'HN.JIS',
        value: [
            109.7469,
            28.1483
        ]
    },
    {
        name: 'HN.LOD',
        value: [
            112.0054,
            27.7291
        ]
    },
    {
        name: 'HN.MIL',
        value: [
            113.0769,
            28.8044
        ]
    },
    {
        name: 'HN.NIX',
        value: [
            112.3449,
            27.9915
        ]
    },
    {
        name: 'HN.SHY',
        value: [
            111.451,
            27.2121
        ]
    },
    {
        name: 'HN.TAY',
        value: [
            111.4603,
            28.877
        ]
    },
    {
        name: 'HN.YIY',
        value: [
            112.323,
            28.5771
        ]
    },
    {
        name: 'HN.YOZ',
        value: [
            111.6169,
            26.2224
        ]
    },
    {
        name: 'HN.ZJJ',
        value: [
            110.5567,
            29.351
        ]
    },
    {
        name: 'JL.AGT',
        value: [
            123.7635,
            45.598
        ]
    },
    {
        name: 'JL.BCT',
        value: [
            122.2068,
            45.5543
        ]
    },
    {
        name: 'JL.BST',
        value: [
            126.3685,
            41.9452
        ]
    },
    {
        name: 'JL.CBS',
        value: [
            128.07,
            42.07
        ]
    },
    {
        name: 'JL.CBT',
        value: [
            128.174,
            41.42
        ]
    },
    {
        name: 'JL.CLT',
        value: [
            124.045,
            44.2781
        ]
    },
    {
        name: 'JL.CN2',
        value: [
            125.45,
            43.8
        ]
    },
    {
        name: 'JL.DDP',
        value: [
            128.1006,
            42.0539
        ]
    },
    {
        name: 'JL.DHT',
        value: [
            128.198,
            43.344
        ]
    },
    {
        name: 'JL.FMT',
        value: [
            126.664,
            43.7278
        ]
    },
    {
        name: 'JL.FST',
        value: [
            127.381,
            42.2576
        ]
    },
    {
        name: 'JL.HCT',
        value: [
            130.465,
            42.6423
        ]
    },
    {
        name: 'JL.HSH',
        value: [
            128.1,
            40.733
        ]
    },
    {
        name: 'JL.HST',
        value: [
            127.14,
            42.9492
        ]
    },
    {
        name: 'JL.JCT',
        value: [
            126.393,
            42.3517
        ]
    },
    {
        name: 'JL.JYT',
        value: [
            126.81,
            42.3723
        ]
    },
    {
        name: 'JL.LHT',
        value: [
            125.717,
            42.286
        ]
    },
    {
        name: 'JL.LYT',
        value: [
            125.149,
            42.9476
        ]
    },
    {
        name: 'JL.MJT',
        value: [
            127.594,
            41.9478
        ]
    },
    {
        name: 'JL.PST',
        value: [
            126.078,
            42.9501
        ]
    },
    {
        name: 'JL.QAT',
        value: [
            124.004,
            45.0061
        ]
    },
    {
        name: 'JL.QXZ',
        value: [
            128.0679,
            42.0292
        ]
    },
    {
        name: 'JL.SGT',
        value: [
            124.907,
            44.0894
        ]
    },
    {
        name: 'JL.SLT',
        value: [
            123.9005,
            43.6881
        ]
    },
    {
        name: 'JL.SMF',
        value: [
            128.2694,
            42.03
        ]
    },
    {
        name: 'JL.SMT',
        value: [
            128.174,
            42.1882
        ]
    },
    {
        name: 'JL.SPT',
        value: [
            124.5349,
            43.1997
        ]
    },
    {
        name: 'JL.SYT',
        value: [
            124.76,
            45.2517
        ]
    },
    {
        name: 'JL.SYZT',
        value: [
            125.674,
            43.5389
        ]
    },
    {
        name: 'JL.THT',
        value: [
            125.998,
            41.6971
        ]
    },
    {
        name: 'JL.TYT',
        value: [
            123.031,
            44.7918
        ]
    },
    {
        name: 'JL.WDT',
        value: [
            128.02,
            41.99
        ]
    },
    {
        name: 'JL.XDP',
        value: [
            128.0352,
            42.0633
        ]
    },
    {
        name: 'JL.YFT',
        value: [
            126.512,
            41.3621
        ]
    },
    {
        name: 'JL.YNB',
        value: [
            129.489,
            43.0029
        ]
    },
    {
        name: 'JL.YST',
        value: [
            126.7519,
            44.7636
        ]
    },
    {
        name: 'JL.ZXT',
        value: [
            128.106,
            42.41
        ]
    },
    {
        name: 'JS.BY',
        value: [
            119.2667,
            33.2625
        ]
    },
    {
        name: 'JS.CS',
        value: [
            120.7147,
            31.67
        ]
    },
    {
        name: 'JS.CZ',
        value: [
            120.0978,
            31.7725
        ]
    },
    {
        name: 'JS.DH',
        value: [
            118.7719,
            34.505
        ]
    },
    {
        name: 'JS.GAY',
        value: [
            118.9831,
            34.9433
        ]
    },
    {
        name: 'JS.GC',
        value: [
            119.0169,
            31.3531
        ]
    },
    {
        name: 'JS.GUY',
        value: [
            119.2378,
            34.3094
        ]
    },
    {
        name: 'JS.GY',
        value: [
            119.43,
            32.73
        ]
    },
    {
        name: 'JS.HA',
        value: [
            120.6589,
            32.4989
        ]
    },
    {
        name: 'JS.HUA',
        value: [
            119.005,
            33.6147
        ]
    },
    {
        name: 'JS.JJ',
        value: [
            120.3031,
            32.0658
        ]
    },
    {
        name: 'JS.JT',
        value: [
            119.5428,
            31.7342
        ]
    },
    {
        name: 'JS.KS',
        value: [
            120.95,
            31.39
        ]
    },
    {
        name: 'JS.LAS',
        value: [
            119.2833,
            33.7717
        ]
    },
    {
        name: 'JS.LH',
        value: [
            118.9447,
            32.515
        ]
    },
    {
        name: 'JS.LIS',
        value: [
            119.1136,
            31.6464
        ]
    },
    {
        name: 'JS.LY',
        value: [
            119.4619,
            31.3839
        ]
    },
    {
        name: 'JS.LYG',
        value: [
            119.2425,
            34.6414
        ]
    },
    {
        name: 'JS.NJ2',
        value: [
            118.8544,
            32.0517
        ]
    },
    {
        name: 'JS.NT',
        value: [
            120.8906,
            31.9517
        ]
    },
    {
        name: 'JS.PX',
        value: [
            116.9,
            34.8
        ]
    },
    {
        name: 'JS.PZ',
        value: [
            117.97,
            34.52
        ]
    },
    {
        name: 'JS.QD',
        value: [
            121.6853,
            31.8364
        ]
    },
    {
        name: 'JS.QSD',
        value: [
            119.83,
            34.92
        ]
    },
    {
        name: 'JS.RD',
        value: [
            121.1353,
            32.4014
        ]
    },
    {
        name: 'JS.SH',
        value: [
            118.1564,
            33.5444
        ]
    },
    {
        name: 'JS.SQ',
        value: [
            118.3067,
            34.05
        ]
    },
    {
        name: 'JS.SY',
        value: [
            120.36,
            33.74
        ]
    },
    {
        name: 'JS.TZ',
        value: [
            119.9192,
            32.4092
        ]
    },
    {
        name: 'JS.WX',
        value: [
            120.2228,
            31.5253
        ]
    },
    {
        name: 'JS.XH',
        value: [
            119.8467,
            32.8886
        ]
    },
    {
        name: 'JS.XIY',
        value: [
            118.3892,
            34.3808
        ]
    },
    {
        name: 'JS.XW',
        value: [
            119.5422,
            34.4981
        ]
    },
    {
        name: 'JS.XY',
        value: [
            118.49,
            33.07
        ]
    },
    {
        name: 'JS.XZ',
        value: [
            117.1658,
            34.2314
        ]
    },
    {
        name: 'JS.YC',
        value: [
            120.02,
            33.37
        ]
    },
    {
        name: 'JS.YX',
        value: [
            119.6369,
            31.155
        ]
    },
    {
        name: 'JS.ZJ',
        value: [
            119.4472,
            32.1483
        ]
    },
    {
        name: 'JX.ANY',
        value: [
            115.394,
            25.143
        ]
    },
    {
        name: 'JX.DAY',
        value: [
            114.364,
            25.3908
        ]
    },
    {
        name: 'JX.DUC',
        value: [
            116.194,
            29.2563
        ]
    },
    {
        name: 'JX.FEC',
        value: [
            115.728,
            27.9325
        ]
    },
    {
        name: 'JX.GAA',
        value: [
            115.3529,
            28.4179
        ]
    },
    {
        name: 'JX.GAZ',
        value: [
            114.975,
            25.7903
        ]
    },
    {
        name: 'JX.HUC',
        value: [
            115.774,
            25.6063
        ]
    },
    {
        name: 'JX.JDZ',
        value: [
            117.261,
            29.2754
        ]
    },
    {
        name: 'JX.JGS',
        value: [
            114.161,
            26.5618
        ]
    },
    {
        name: 'JX.JIA',
        value: [
            115.0445,
            27.0635
        ]
    },
    {
        name: 'JX.JIJ',
        value: [
            116.01,
            29.6474
        ]
    },
    {
        name: 'JX.JIX',
        value: [
            116.247,
            28.2122
        ]
    },
    {
        name: 'JX.LEA',
        value: [
            115.848,
            27.4101
        ]
    },
    {
        name: 'JX.LON',
        value: [
            114.817,
            24.7694
        ]
    },
    {
        name: 'JX.NAC',
        value: [
            116.576,
            27.5393
        ]
    },
    {
        name: 'JX.NNC',
        value: [
            115.8,
            28.77
        ]
    },
    {
        name: 'JX.SHC',
        value: [
            116.331,
            26.2987
        ]
    },
    {
        name: 'JX.SHR',
        value: [
            117.976,
            28.4434
        ]
    },
    {
        name: 'JX.WAA',
        value: [
            114.803,
            26.3652
        ]
    },
    {
        name: 'JX.XIS',
        value: [
            114.563,
            29.0397
        ]
    },
    {
        name: 'JX.XUW',
        value: [
            115.608,
            24.9954
        ]
    },
    {
        name: 'JX.YIC',
        value: [
            114.37,
            27.809
        ]
    },
    {
        name: 'JX.YOX',
        value: [
            115.606,
            29.0832
        ]
    },
    {
        name: 'JX.YUG',
        value: [
            116.625,
            28.826
        ]
    },
    {
        name: 'LN.ANS',
        value: [
            123.0134,
            41.1054
        ]
    },
    {
        name: 'LN.BEP',
        value: [
            120.6987,
            41.7833
        ]
    },
    {
        name: 'LN.BXI',
        value: [
            123.7797,
            41.267
        ]
    },
    {
        name: 'LN.BZH',
        value: [
            121.7641,
            41.5991
        ]
    },
    {
        name: 'LN.CHY',
        value: [
            120.4853,
            41.5733
        ]
    },
    {
        name: 'LN.DDO',
        value: [
            124.3903,
            40.1457
        ]
    },
    {
        name: 'LN.DL2',
        value: [
            121.6283,
            38.9062
        ]
    },
    {
        name: 'LN.FKU',
        value: [
            123.3468,
            42.5083
        ]
    },
    {
        name: 'LN.FSH',
        value: [
            123.9167,
            41.8833
        ]
    },
    {
        name: 'LN.FXI',
        value: [
            121.5993,
            42.0528
        ]
    },
    {
        name: 'LN.GAX',
        value: [
            122.3663,
            40.4133
        ]
    },
    {
        name: 'LN.GSH',
        value: [
            122.2555,
            41.3148
        ]
    },
    {
        name: 'LN.GUS',
        value: [
            123.5833,
            39.9
        ]
    },
    {
        name: 'LN.H58',
        value: [
            122.2555,
            40.9883
        ]
    },
    {
        name: 'LN.HSH',
        value: [
            121.274,
            39.5373
        ]
    },
    {
        name: 'LN.HUR',
        value: [
            125.3538,
            41.2788
        ]
    },
    {
        name: 'LN.HXQ',
        value: [
            122.7716,
            42.5846
        ]
    },
    {
        name: 'LN.JCA',
        value: [
            119.8769,
            40.8286
        ]
    },
    {
        name: 'LN.JZH',
        value: [
            121.1399,
            41.0754
        ]
    },
    {
        name: 'LN.KDN',
        value: [
            124.7821,
            40.741
        ]
    },
    {
        name: 'LN.LHT',
        value: [
            123.95,
            41.83
        ]
    },
    {
        name: 'LN.LYA',
        value: [
            119.3823,
            41.2187
        ]
    },
    {
        name: 'LN.LYN',
        value: [
            123.2833,
            41.2667
        ]
    },
    {
        name: 'LN.MQI',
        value: [
            124.5889,
            41.7679
        ]
    },
    {
        name: 'LN.NAP',
        value: [
            120.7582,
            41.089
        ]
    },
    {
        name: 'LN.QYU',
        value: [
            124.9286,
            42.0788
        ]
    },
    {
        name: 'LN.SHS',
        value: [
            120.966,
            40.7219
        ]
    },
    {
        name: 'LN.SNY',
        value: [
            123.578,
            41.8278
        ]
    },
    {
        name: 'LN.SUZ',
        value: [
            120.2442,
            40.3766
        ]
    },
    {
        name: 'LN.TIL',
        value: [
            123.9,
            42.2667
        ]
    },
    {
        name: 'LN.WFD',
        value: [
            121.9874,
            39.6298
        ]
    },
    {
        name: 'LN.XFN',
        value: [
            124.712,
            42.742
        ]
    },
    {
        name: 'LN.XMN',
        value: [
            122.8678,
            42.0709
        ]
    },
    {
        name: 'LN.XYN',
        value: [
            123.2595,
            40.2745
        ]
    },
    {
        name: 'LN.YKO',
        value: [
            122.6032,
            40.6835
        ]
    },
    {
        name: 'NM.AGL',
        value: [
            122.6275,
            43.3034
        ]
    },
    {
        name: 'NM.ARS',
        value: [
            119.952,
            47.1742
        ]
    },
    {
        name: 'NM.BAC',
        value: [
            115.2681,
            41.8989
        ]
    },
    {
        name: 'NM.BHS',
        value: [
            112.0258,
            40.965
        ]
    },
    {
        name: 'NM.BLM',
        value: [
            110.428,
            41.71
        ]
    },
    {
        name: 'NM.BTO',
        value: [
            109.8778,
            40.7437
        ]
    },
    {
        name: 'NM.BYT',
        value: [
            105.7168,
            38.8461
        ]
    },
    {
        name: 'NM.CHF',
        value: [
            118.9806,
            42.2966
        ]
    },
    {
        name: 'NM.CHR',
        value: [
            121.177,
            47.9734
        ]
    },
    {
        name: 'NM.CSQ',
        value: [
            111.048,
            40.7279
        ]
    },
    {
        name: 'NM.DSH',
        value: [
            110.064,
            39.8004
        ]
    },
    {
        name: 'NM.DSM',
        value: [
            107.054,
            41.0947
        ]
    },
    {
        name: 'NM.GNH',
        value: [
            121.4618,
            50.7768
        ]
    },
    {
        name: 'NM.HHC',
        value: [
            111.5583,
            40.8667
        ]
    },
    {
        name: 'NM.HLG',
        value: [
            111.844,
            40.3762
        ]
    },
    {
        name: 'NM.HLH',
        value: [
            119.659,
            45.4689
        ]
    },
    {
        name: 'NM.HLR',
        value: [
            119.74,
            49.27
        ]
    },
    {
        name: 'NM.IDR',
        value: [
            122.89,
            46.7313
        ]
    },
    {
        name: 'NM.JIN',
        value: [
            113.152,
            40.9968
        ]
    },
    {
        name: 'NM.JIP',
        value: [
            117.545,
            43.2445
        ]
    },
    {
        name: 'NM.LCH',
        value: [
            112.5109,
            40.5411
        ]
    },
    {
        name: 'NM.LIX',
        value: [
            118.054,
            43.6221
        ]
    },
    {
        name: 'NM.LUB',
        value: [
            120.882,
            44.5462
        ]
    },
    {
        name: 'NM.MDG',
        value: [
            120.778,
            51.2719
        ]
    },
    {
        name: 'NM.MZL',
        value: [
            117.44,
            49.5545
        ]
    },
    {
        name: 'NM.NIC',
        value: [
            118.875,
            41.7251
        ]
    },
    {
        name: 'NM.NJT',
        value: [
            123.488,
            48.1703
        ]
    },
    {
        name: 'NM.QSH',
        value: [
            111.6734,
            39.8988
        ]
    },
    {
        name: 'NM.RLT',
        value: [
            111.9228,
            43.686
        ]
    },
    {
        name: 'NM.TIS',
        value: [
            120.112,
            43.863
        ]
    },
    {
        name: 'NM.WJH',
        value: [
            108.078,
            41.3041
        ]
    },
    {
        name: 'NM.WLH',
        value: [
            111.706,
            41.5191
        ]
    },
    {
        name: 'NM.WLT',
        value: [
            122.0271,
            46.0398
        ]
    },
    {
        name: 'NM.WUH',
        value: [
            106.8392,
            39.6645
        ]
    },
    {
        name: 'NM.XIH',
        value: [
            119.889,
            42.2545
        ]
    },
    {
        name: 'NM.XIQ',
        value: [
            116.786,
            48.6518
        ]
    },
    {
        name: 'NM.XLT',
        value: [
            116.0805,
            43.8998
        ]
    },
    {
        name: 'NM.XSZ',
        value: [
            108.734,
            40.7398
        ]
    },
    {
        name: 'NM.ZLT',
        value: [
            122.652,
            48.0293
        ]
    },
    {
        name: 'NQ.NA0',
        value: [
            92.094,
            31.4948
        ]
    },
    {
        name: 'NQ.NA1',
        value: [
            92.0901,
            31.4959
        ]
    },
    {
        name: 'NQ.NA2',
        value: [
            92.0968,
            31.4973
        ]
    },
    {
        name: 'NQ.NA3',
        value: [
            92.0948,
            31.4912
        ]
    },
    {
        name: 'NQ.NB1',
        value: [
            92.1016,
            31.5059
        ]
    },
    {
        name: 'NQ.NB2',
        value: [
            92.1086,
            31.492
        ]
    },
    {
        name: 'NQ.NB3',
        value: [
            92.0962,
            31.4818
        ]
    },
    {
        name: 'NQ.NB4',
        value: [
            92.0803,
            31.4887
        ]
    },
    {
        name: 'NQ.NB5',
        value: [
            92.0833,
            31.5041
        ]
    },
    {
        name: 'NX.GYU',
        value: [
            106.1701,
            35.9639
        ]
    },
    {
        name: 'NX.HYU',
        value: [
            105.6008,
            36.5012
        ]
    },
    {
        name: 'NX.JYU',
        value: [
            106.3393,
            35.4863
        ]
    },
    {
        name: 'NX.LWU',
        value: [
            106.3313,
            38.1011
        ]
    },
    {
        name: 'NX.NSS',
        value: [
            106.0829,
            37.6962
        ]
    },
    {
        name: 'NX.SZS',
        value: [
            106.6599,
            39.283
        ]
    },
    {
        name: 'NX.TLE',
        value: [
            106.6968,
            38.8074
        ]
    },
    {
        name: 'NX.TXN',
        value: [
            106.2827,
            37.3032
        ]
    },
    {
        name: 'NX.XJI',
        value: [
            105.758,
            36.0877
        ]
    },
    {
        name: 'NX.XSH',
        value: [
            105.2029,
            37.249
        ]
    },
    {
        name: 'NX.YCH',
        value: [
            105.9328,
            38.6086
        ]
    },
    {
        name: 'NX.YCI',
        value: [
            107.4372,
            37.7785
        ]
    },
    {
        name: 'NX.ZHW',
        value: [
            105.2441,
            37.5857
        ]
    },
    {
        name: 'QH.BAM',
        value: [
            100.727,
            32.9486
        ]
    },
    {
        name: 'QH.DAT',
        value: [
            101.6973,
            36.9439
        ]
    },
    {
        name: 'QH.DAW',
        value: [
            100.2484,
            34.4782
        ]
    },
    {
        name: 'QH.DCD',
        value: [
            95.3759,
            37.9324
        ]
    },
    {
        name: 'QH.DLH',
        value: [
            97.3775,
            37.3807
        ]
    },
    {
        name: 'QH.DUL',
        value: [
            98.1195,
            36.2822
        ]
    },
    {
        name: 'QH.GOM',
        value: [
            94.8145,
            36.1984
        ]
    },
    {
        name: 'QH.HTG',
        value: [
            90.7138,
            37.8664
        ]
    },
    {
        name: 'QH.HUL',
        value: [
            102.2481,
            36.0737
        ]
    },
    {
        name: 'QH.HUY',
        value: [
            101.1918,
            36.6562
        ]
    },
    {
        name: 'QH.LED',
        value: [
            102.3972,
            36.5514
        ]
    },
    {
        name: 'QH.LEH',
        value: [
            93.4144,
            38.8189
        ]
    },
    {
        name: 'QH.LJS',
        value: [
            101.45,
            36.3553
        ]
    },
    {
        name: 'QH.LJX',
        value: [
            101.8392,
            35.9929
        ]
    },
    {
        name: 'QH.LWS',
        value: [
            102.1214,
            36.9182
        ]
    },
    {
        name: 'QH.LYX',
        value: [
            101.1814,
            35.8714
        ]
    },
    {
        name: 'QH.MAD',
        value: [
            98.2081,
            34.9199
        ]
    },
    {
        name: 'QH.MEY',
        value: [
            101.4,
            37.4716
        ]
    },
    {
        name: 'QH.MIH',
        value: [
            102.7842,
            36.3687
        ]
    },
    {
        name: 'QH.QIL',
        value: [
            100.1818,
            38.1497
        ]
    },
    {
        name: 'QH.QML',
        value: [
            95.8297,
            34.1709
        ]
    },
    {
        name: 'QH.QSS',
        value: [
            101.9749,
            36.2682
        ]
    },
    {
        name: 'QH.TIJ',
        value: [
            98.8953,
            37.2491
        ]
    },
    {
        name: 'QH.TOR',
        value: [
            102.0096,
            35.5191
        ]
    },
    {
        name: 'QH.TTH',
        value: [
            92.3206,
            34.2187
        ]
    },
    {
        name: 'QH.XIH',
        value: [
            99.8089,
            35.507
        ]
    },
    {
        name: 'QH.XIN',
        value: [
            101.7247,
            36.6278
        ]
    },
    {
        name: 'QH.XUH',
        value: [
            102.4976,
            35.8625
        ]
    },
    {
        name: 'QH.YUS',
        value: [
            97.0155,
            33.0119
        ]
    },
    {
        name: 'QH.ZAD',
        value: [
            95.3169,
            32.8943
        ]
    },
    {
        name: 'SC.AXI',
        value: [
            104.4311,
            31.638
        ]
    },
    {
        name: 'SC.AYU',
        value: [
            105.3365,
            30.0521
        ]
    },
    {
        name: 'SC.BAX',
        value: [
            102.8131,
            30.3715
        ]
    },
    {
        name: 'SC.BTA',
        value: [
            99.1172,
            30.0101
        ]
    },
    {
        name: 'SC.BYD',
        value: [
            103.1877,
            27.8097
        ]
    },
    {
        name: 'SC.BZH',
        value: [
            106.7445,
            31.8408
        ]
    },
    {
        name: 'SC.CD2',
        value: [
            103.7578,
            30.91
        ]
    },
    {
        name: 'SC.CXI',
        value: [
            105.9504,
            31.707
        ]
    },
    {
        name: 'SC.DFU',
        value: [
            101.1215,
            30.991
        ]
    },
    {
        name: 'SC.EMS',
        value: [
            103.4542,
            29.5767
        ]
    },
    {
        name: 'SC.GZA',
        value: [
            102.1726,
            30.1173
        ]
    },
    {
        name: 'SC.GZI',
        value: [
            100.0185,
            31.6101
        ]
    },
    {
        name: 'SC.HLI',
        value: [
            102.2528,
            26.653
        ]
    },
    {
        name: 'SC.HMS',
        value: [
            104.3979,
            29.5717
        ]
    },
    {
        name: 'SC.HSH',
        value: [
            102.9867,
            32.0637
        ]
    },
    {
        name: 'SC.HWS',
        value: [
            104.7361,
            28.6396
        ]
    },
    {
        name: 'SC.HYS',
        value: [
            106.8402,
            30.4163
        ]
    },
    {
        name: 'SC.HYU',
        value: [
            102.5242,
            32.813
        ]
    },
    {
        name: 'SC.JJS',
        value: [
            104.5456,
            31.0045
        ]
    },
    {
        name: 'SC.JLI',
        value: [
            104.5156,
            28.1789
        ]
    },
    {
        name: 'SC.JLO',
        value: [
            101.5125,
            28.9958
        ]
    },
    {
        name: 'SC.JMG',
        value: [
            105.5597,
            32.2054
        ]
    },
    {
        name: 'SC.JYA',
        value: [
            103.9276,
            29.7939
        ]
    },
    {
        name: 'SC.JZG',
        value: [
            104.2363,
            33.2573
        ]
    },
    {
        name: 'SC.LBO',
        value: [
            103.5703,
            28.2722
        ]
    },
    {
        name: 'SC.LGH',
        value: [
            100.8615,
            27.7143
        ]
    },
    {
        name: 'SC.LTA',
        value: [
            100.2694,
            30.0004
        ]
    },
    {
        name: 'SC.LZH',
        value: [
            105.4136,
            28.8724
        ]
    },
    {
        name: 'SC.MBI',
        value: [
            103.5336,
            28.8405
        ]
    },
    {
        name: 'SC.MDS',
        value: [
            103.0408,
            30.0748
        ]
    },
    {
        name: 'SC.MEK',
        value: [
            102.2239,
            31.9039
        ]
    },
    {
        name: 'SC.MGU',
        value: [
            103.1346,
            28.3274
        ]
    },
    {
        name: 'SC.MLI',
        value: [
            101.2719,
            27.9324
        ]
    },
    {
        name: 'SC.MNI',
        value: [
            102.1739,
            28.3326
        ]
    },
    {
        name: 'SC.MXI',
        value: [
            103.8553,
            31.6815
        ]
    },
    {
        name: 'SC.PGE',
        value: [
            102.5424,
            27.3839
        ]
    },
    {
        name: 'SC.PWU',
        value: [
            104.5482,
            32.4157
        ]
    },
    {
        name: 'SC.PZH',
        value: [
            101.7425,
            26.5033
        ]
    },
    {
        name: 'SC.QCH',
        value: [
            105.2277,
            32.5932
        ]
    },
    {
        name: 'SC.REG',
        value: [
            102.9647,
            33.5815
        ]
    },
    {
        name: 'SC.RTA',
        value: [
            100.9799,
            32.2687
        ]
    },
    {
        name: 'SC.SMI',
        value: [
            102.3495,
            29.226
        ]
    },
    {
        name: 'SC.SMK',
        value: [
            102.75,
            26.8553
        ]
    },
    {
        name: 'SC.SPA',
        value: [
            103.6031,
            32.6497
        ]
    },
    {
        name: 'SC.TQU',
        value: [
            102.7643,
            30.0735
        ]
    },
    {
        name: 'SC.WCA',
        value: [
            106.1967,
            32.1771
        ]
    },
    {
        name: 'SC.WCH',
        value: [
            103.5876,
            31.479
        ]
    },
    {
        name: 'SC.WMP',
        value: [
            103.7895,
            29.0526
        ]
    },
    {
        name: 'SC.XCE',
        value: [
            99.7917,
            28.9417
        ]
    },
    {
        name: 'SC.XCO',
        value: [
            105.9016,
            31.0183
        ]
    },
    {
        name: 'SC.XHA',
        value: [
            107.7175,
            31.3738
        ]
    },
    {
        name: 'SC.XJI',
        value: [
            102.3579,
            30.995
        ]
    },
    {
        name: 'SC.XSB',
        value: [
            102.4478,
            27.8622
        ]
    },
    {
        name: 'SC.YGD',
        value: [
            104.1025,
            30.2009
        ]
    },
    {
        name: 'SC.YJI',
        value: [
            101.0117,
            30.0344
        ]
    },
    {
        name: 'SC.YTI',
        value: [
            105.3612,
            31.212
        ]
    },
    {
        name: 'SC.YYC',
        value: [
            102.2596,
            27.8486
        ]
    },
    {
        name: 'SC.YYU',
        value: [
            101.6776,
            27.4669
        ]
    },
    {
        name: 'SC.YZP',
        value: [
            103.5689,
            30.8692
        ]
    },
    {
        name: 'SC.ZJG',
        value: [
            104.6729,
            31.7925
        ]
    },
    {
        name: 'SD.ANQ',
        value: [
            119.22,
            36.37
        ]
    },
    {
        name: 'SD.BHC',
        value: [
            120.91,
            38.39
        ]
    },
    {
        name: 'SD.CHD',
        value: [
            120.74,
            37.91
        ]
    },
    {
        name: 'SD.CHW',
        value: [
            115.87,
            34.94
        ]
    },
    {
        name: 'SD.CSH',
        value: [
            118.05,
            34.85
        ]
    },
    {
        name: 'SD.DOY',
        value: [
            118.5,
            37.47
        ]
    },
    {
        name: 'SD.DSD',
        value: [
            116.75,
            35.1
        ]
    },
    {
        name: 'SD.DSH',
        value: [
            117.67,
            38.01
        ]
    },
    {
        name: 'SD.DZH',
        value: [
            116.3,
            37.45
        ]
    },
    {
        name: 'SD.HAH',
        value: [
            118.98,
            37.12
        ]
    },
    {
        name: 'SD.HAY',
        value: [
            121.32,
            36.82
        ]
    },
    {
        name: 'SD.HEZ',
        value: [
            115.44,
            35.25
        ]
    },
    {
        name: 'SD.JIN',
        value: [
            117.04,
            36.64
        ]
    },
    {
        name: 'SD.JIX',
        value: [
            116.35,
            35.4
        ]
    },
    {
        name: 'SD.JUN',
        value: [
            118.85,
            35.17
        ]
    },
    {
        name: 'SD.JUX',
        value: [
            118.9,
            35.54
        ]
    },
    {
        name: 'SD.LAY',
        value: [
            120.72,
            36.99
        ]
    },
    {
        name: 'SD.LCH',
        value: [
            116.03,
            36.43
        ]
    },
    {
        name: 'SD.LIS',
        value: [
            118.69,
            34.95
        ]
    },
    {
        name: 'SD.LOK',
        value: [
            120.51,
            37.55
        ]
    },
    {
        name: 'SD.LQU',
        value: [
            118.49,
            36.41
        ]
    },
    {
        name: 'SD.LSH',
        value: [
            116.08,
            35.81
        ]
    },
    {
        name: 'SD.LZH',
        value: [
            121,
            37.22
        ]
    },
    {
        name: 'SD.NLA',
        value: [
            117.98,
            35.52
        ]
    },
    {
        name: 'SD.QID',
        value: [
            120.4,
            36.06
        ]
    },
    {
        name: 'SD.RCH',
        value: [
            122.42,
            37.17
        ]
    },
    {
        name: 'SD.RSH',
        value: [
            121.6,
            36.92
        ]
    },
    {
        name: 'SD.RZH',
        value: [
            119.52,
            35.42
        ]
    },
    {
        name: 'SD.SHH',
        value: [
            117.31,
            37.2
        ]
    },
    {
        name: 'SD.TCH',
        value: [
            118.46,
            34.7
        ]
    },
    {
        name: 'SD.TIA',
        value: [
            117.1,
            36.25
        ]
    },
    {
        name: 'SD.WED',
        value: [
            121.92,
            37.18
        ]
    },
    {
        name: 'SD.WEF',
        value: [
            119.12,
            36.7
        ]
    },
    {
        name: 'SD.WEH',
        value: [
            122.09,
            37.51
        ]
    },
    {
        name: 'SD.WUL',
        value: [
            119.2,
            35.75
        ]
    },
    {
        name: 'SD.XIT',
        value: [
            117.76,
            35.95
        ]
    },
    {
        name: 'SD.YSH',
        value: [
            118.63,
            35.79
        ]
    },
    {
        name: 'SD.YTA',
        value: [
            121.39,
            37.52
        ]
    },
    {
        name: 'SD.ZCH',
        value: [
            117.01,
            35.38
        ]
    },
    {
        name: 'SH.BJT',
        value: [
            124.927,
            29.1246
        ]
    },
    {
        name: 'SH.DAX',
        value: [
            121.5333,
            31.5833
        ]
    },
    {
        name: 'SH.DOT',
        value: [
            121.95,
            31.55
        ]
    },
    {
        name: 'SH.DYS',
        value: [
            122.0667,
            30.5833
        ]
    },
    {
        name: 'SH.HUH',
        value: [
            119.7975,
            30.4478
        ]
    },
    {
        name: 'SH.JIZ',
        value: [
            120.9033,
            31.0775
        ]
    },
    {
        name: 'SH.NAH',
        value: [
            121.7556,
            31.0475
        ]
    },
    {
        name: 'SH.QHS',
        value: [
            121.2592,
            30.7922
        ]
    },
    {
        name: 'SH.SHX',
        value: [
            121.4353,
            31.2186
        ]
    },
    {
        name: 'SH.SSE',
        value: [
            121.186,
            31.1
        ]
    },
    {
        name: 'SH.TMS',
        value: [
            121.1483,
            31.0783
        ]
    },
    {
        name: 'SH.TPS',
        value: [
            120.4942,
            31.2892
        ]
    },
    {
        name: 'SH.XKS',
        value: [
            121.1419,
            31.0578
        ]
    },
    {
        name: 'SH.ZHY',
        value: [
            121.5167,
            31.2333
        ]
    },
    {
        name: 'SN.ANKG',
        value: [
            109.0372,
            32.6698
        ]
    },
    {
        name: 'SN.BIXT',
        value: [
            108.0833,
            35.0667
        ]
    },
    {
        name: 'SN.FUPI',
        value: [
            109.1454,
            34.974
        ]
    },
    {
        name: 'SN.HEYT',
        value: [
            110.0633,
            35.4067
        ]
    },
    {
        name: 'SN.HUAX',
        value: [
            109.7197,
            34.4009
        ]
    },
    {
        name: 'SN.HUYT',
        value: [
            110.1667,
            34.52
        ]
    },
    {
        name: 'SN.HZHG',
        value: [
            107.4325,
            33.2532
        ]
    },
    {
        name: 'SN.HZHT',
        value: [
            106.994,
            32.989
        ]
    },
    {
        name: 'SN.JYAT',
        value: [
            108.7528,
            34.7089
        ]
    },
    {
        name: 'SN.LANT',
        value: [
            109.3756,
            34.1128
        ]
    },
    {
        name: 'SN.LINT',
        value: [
            109.2124,
            34.3523
        ]
    },
    {
        name: 'SN.LIYO',
        value: [
            107.8064,
            34.6766
        ]
    },
    {
        name: 'SN.LOXT',
        value: [
            106.767,
            34.939
        ]
    },
    {
        name: 'SN.LUYA',
        value: [
            106.1395,
            33.3568
        ]
    },
    {
        name: 'SN.MEIX',
        value: [
            107.817,
            34.1283
        ]
    },
    {
        name: 'SN.MIAX',
        value: [
            106.8002,
            33.2293
        ]
    },
    {
        name: 'SN.NSHT',
        value: [
            108.3234,
            33.3253
        ]
    },
    {
        name: 'SN.PCHT',
        value: [
            109.4267,
            35.0583
        ]
    },
    {
        name: 'SN.QLIT',
        value: [
            108.2172,
            34.5697
        ]
    },
    {
        name: 'SN.SHAZ',
        value: [
            109.874,
            33.5124
        ]
    },
    {
        name: 'SN.SHNA',
        value: [
            110.8654,
            33.518
        ]
    },
    {
        name: 'SN.SHWA',
        value: [
            106.9373,
            34.5538
        ]
    },
    {
        name: 'SN.SUDE',
        value: [
            110.2312,
            37.4946
        ]
    },
    {
        name: 'SN.TABT',
        value: [
            107.2852,
            34.0707
        ]
    },
    {
        name: 'SN.TOCH',
        value: [
            109.1251,
            35.392
        ]
    },
    {
        name: 'SN.XAN',
        value: [
            108.9242,
            34.0317
        ]
    },
    {
        name: 'SN.XIXI',
        value: [
            107.7161,
            32.9101
        ]
    },
    {
        name: 'SN.YAAN',
        value: [
            109.3254,
            36.8721
        ]
    },
    {
        name: 'SN.YULG',
        value: [
            110.5075,
            38.8559
        ]
    },
    {
        name: 'SN.YULT',
        value: [
            109.5006,
            38.4428
        ]
    },
    {
        name: 'SN.ZOZT',
        value: [
            108.3242,
            34.0553
        ]
    },
    {
        name: 'SX.ANZ',
        value: [
            112.25,
            36.16
        ]
    },
    {
        name: 'SX.BOD',
        value: [
            111.001,
            38.9549
        ]
    },
    {
        name: 'SX.CHZ',
        value: [
            113.18,
            36.2244
        ]
    },
    {
        name: 'SX.DAX',
        value: [
            113.0557,
            39.0518
        ]
    },
    {
        name: 'SX.DOS',
        value: [
            112.741,
            37.9294
        ]
    },
    {
        name: 'SX.HMA',
        value: [
            111.41,
            35.58
        ]
    },
    {
        name: 'SX.HSH',
        value: [
            113.7208,
            39.6684
        ]
    },
    {
        name: 'SX.HZH',
        value: [
            111.899,
            36.6099
        ]
    },
    {
        name: 'SX.JIC',
        value: [
            112.436,
            37.7123
        ]
    },
    {
        name: 'SX.KEL',
        value: [
            111.7198,
            38.7784
        ]
    },
    {
        name: 'SX.LIC',
        value: [
            113.291,
            35.6906
        ]
    },
    {
        name: 'SX.LIF',
        value: [
            111.3667,
            36.0883
        ]
    },
    {
        name: 'SX.LIS',
        value: [
            111.2418,
            37.529
        ]
    },
    {
        name: 'SX.LNQ',
        value: [
            114.021,
            39.3823
        ]
    },
    {
        name: 'SX.LOF',
        value: [
            111.9509,
            38.0411
        ]
    },
    {
        name: 'SX.NIW',
        value: [
            112.336,
            38.687
        ]
    },
    {
        name: 'SX.PIG',
        value: [
            111.5135,
            39.4516
        ]
    },
    {
        name: 'SX.SHZ',
        value: [
            113.2374,
            40.1416
        ]
    },
    {
        name: 'SX.SZZ',
        value: [
            113.7131,
            40.0845
        ]
    },
    {
        name: 'SX.TAG',
        value: [
            112.5782,
            37.3671
        ]
    },
    {
        name: 'SX.TIY',
        value: [
            113.003,
            38.43
        ]
    },
    {
        name: 'SX.XAX',
        value: [
            111.2367,
            35.12
        ]
    },
    {
        name: 'SX.XAY',
        value: [
            112.946,
            36.6677
        ]
    },
    {
        name: 'SX.XIX',
        value: [
            110.95,
            36.7
        ]
    },
    {
        name: 'SX.XIY',
        value: [
            113.7208,
            37.569
        ]
    },
    {
        name: 'SX.YAC',
        value: [
            112.407,
            35.4424
        ]
    },
    {
        name: 'SX.YAY',
        value: [
            114.1577,
            39.955
        ]
    },
    {
        name: 'SX.YJI',
        value: [
            110.6462,
            34.8389
        ]
    },
    {
        name: 'SX.YMG',
        value: [
            112.8067,
            39.2289
        ]
    },
    {
        name: 'SX.YUY',
        value: [
            112.3693,
            40.0235
        ]
    },
    {
        name: 'SX.ZCH',
        value: [
            113.3483,
            40.2723
        ]
    },
    {
        name: 'SX.ZOQ',
        value: [
            113.3502,
            37.0993
        ]
    },
    {
        name: 'TJ.ANK',
        value: [
            117.219,
            39.1708
        ]
    },
    {
        name: 'TJ.BAD',
        value: [
            117.275,
            39.7319
        ]
    },
    {
        name: 'TJ.BET',
        value: [
            117.743,
            39.1294
        ]
    },
    {
        name: 'TJ.CAD',
        value: [
            117.461,
            39.6108
        ]
    },
    {
        name: 'TJ.CGZ',
        value: [
            117.105,
            38.7781
        ]
    },
    {
        name: 'TJ.CHH',
        value: [
            117.15,
            39.1344
        ]
    },
    {
        name: 'TJ.CHT',
        value: [
            117.369,
            39.2292
        ]
    },
    {
        name: 'TJ.DAG',
        value: [
            117.704,
            38.9778
        ]
    },
    {
        name: 'TJ.DOT',
        value: [
            117.323,
            38.8325
        ]
    },
    {
        name: 'TJ.DZG',
        value: [
            117.237,
            39.1094
        ]
    },
    {
        name: 'TJ.EWZ',
        value: [
            117.37,
            39.3958
        ]
    },
    {
        name: 'TJ.FTZ',
        value: [
            117.754,
            39.5686
        ]
    },
    {
        name: 'TJ.GUG',
        value: [
            117.503,
            38.9298
        ]
    },
    {
        name: 'TJ.HAG',
        value: [
            117.793,
            39.2414
        ]
    },
    {
        name: 'TJ.HBT',
        value: [
            117.133,
            39.5806
        ]
    },
    {
        name: 'TJ.JIH',
        value: [
            116.861,
            38.9408
        ]
    },
    {
        name: 'TJ.JIX',
        value: [
            117.496,
            40.0764
        ]
    },
    {
        name: 'TJ.LUT',
        value: [
            117.738,
            39.375
        ]
    },
    {
        name: 'TJ.NHZ',
        value: [
            117.098,
            39.0283
        ]
    },
    {
        name: 'TJ.QIG',
        value: [
            117.0196,
            39.205
        ]
    },
    {
        name: 'TJ.SJT',
        value: [
            118.002,
            39.2433
        ]
    },
    {
        name: 'TJ.SJZ',
        value: [
            117.382,
            38.6325
        ]
    },
    {
        name: 'TJ.T23',
        value: [
            117.517,
            39.0528
        ]
    },
    {
        name: 'TJ.TJH',
        value: [
            117.556,
            38.7497
        ]
    },
    {
        name: 'TJ.WAK',
        value: [
            116.853,
            38.7697
        ]
    },
    {
        name: 'TJ.WUQ',
        value: [
            116.9557,
            39.4484
        ]
    },
    {
        name: 'TJ.XAZ',
        value: [
            117.524,
            39.7581
        ]
    },
    {
        name: 'TJ.XIZ',
        value: [
            117.344,
            39.0272
        ]
    },
    {
        name: 'TJ.XZZ',
        value: [
            117.192,
            38.6606
        ]
    },
    {
        name: 'TJ.YGZ',
        value: [
            117.248,
            39.91
        ]
    },
    {
        name: 'TJ.ZTZ',
        value: [
            117.199,
            39.2719
        ]
    },
    {
        name: 'XJ.AHQ',
        value: [
            78.4599,
            40.93
        ]
    },
    {
        name: 'XJ.AKS',
        value: [
            80.1095,
            41.1446
        ]
    },
    {
        name: 'XJ.ALR',
        value: [
            81.319,
            40.494
        ]
    },
    {
        name: 'XJ.ALS',
        value: [
            82.119,
            45.153
        ]
    },
    {
        name: 'XJ.ALT',
        value: [
            88.1276,
            47.8842
        ]
    },
    {
        name: 'XJ.ATS',
        value: [
            75.844,
            39.804
        ]
    },
    {
        name: 'XJ.BAC',
        value: [
            81.624,
            41.859
        ]
    },
    {
        name: 'XJ.BCH',
        value: [
            78.7825,
            39.7933
        ]
    },
    {
        name: 'XJ.BKO',
        value: [
            93.0142,
            43.5233
        ]
    },
    {
        name: 'XJ.BLT',
        value: [
            86.659,
            42.945
        ]
    },
    {
        name: 'XJ.BPM',
        value: [
            76.836,
            39.883
        ]
    },
    {
        name: 'XJ.BTS',
        value: [
            90.5139,
            45.2839
        ]
    },
    {
        name: 'XJ.CBC',
        value: [
            81.4392,
            43.5211
        ]
    },
    {
        name: 'XJ.FUH',
        value: [
            87.179,
            46.993
        ]
    },
    {
        name: 'XJ.FUY',
        value: [
            89.63,
            46.97
        ]
    },
    {
        name: 'XJ.GAZ',
        value: [
            88.5767,
            43.525
        ]
    },
    {
        name: 'XJ.HBH',
        value: [
            86.552,
            48.231
        ]
    },
    {
        name: 'XJ.HEF',
        value: [
            85.768,
            46.77
        ]
    },
    {
        name: 'XJ.HTA',
        value: [
            79.9159,
            37.0595
        ]
    },
    {
        name: 'XJ.HTB',
        value: [
            86.5844,
            44.0869
        ]
    },
    {
        name: 'XJ.HTTZ0',
        value: [
            79.06,
            37.16
        ]
    },
    {
        name: 'XJ.HTTZ1',
        value: [
            79.0595,
            37.1641
        ]
    },
    {
        name: 'XJ.HTTZ2',
        value: [
            79.054,
            37.1608
        ]
    },
    {
        name: 'XJ.HTTZ3',
        value: [
            79.0586,
            37.1695
        ]
    },
    {
        name: 'XJ.HTTZ4',
        value: [
            79.0656,
            37.162
        ]
    },
    {
        name: 'XJ.HTTZ5',
        value: [
            79.0722,
            37.1731
        ]
    },
    {
        name: 'XJ.HTTZ6',
        value: [
            79.0749,
            37.1586
        ]
    },
    {
        name: 'XJ.HTTZ7',
        value: [
            79.0575,
            37.1506
        ]
    },
    {
        name: 'XJ.HTTZ8',
        value: [
            79.0429,
            37.1616
        ]
    },
    {
        name: 'XJ.HTTZ9',
        value: [
            79.0522,
            37.1763
        ]
    },
    {
        name: 'XJ.HYS',
        value: [
            89.441,
            42.976
        ]
    },
    {
        name: 'XJ.JHE',
        value: [
            82.9698,
            44.6255
        ]
    },
    {
        name: 'XJ.KMS',
        value: [
            88.1732,
            42.2682
        ]
    },
    {
        name: 'XJ.KMY',
        value: [
            84.8149,
            45.6565
        ]
    },
    {
        name: 'XJ.KNS',
        value: [
            87.5119,
            48.5369
        ]
    },
    {
        name: 'XJ.KOL',
        value: [
            85.81,
            41.8899
        ]
    },
    {
        name: 'XJ.KSH',
        value: [
            75.566,
            39.145
        ]
    },
    {
        name: 'XJ.KSZ',
        value: [
            75.941,
            39.591
        ]
    },
    {
        name: 'XJ.KUC',
        value: [
            82.8572,
            41.8531
        ]
    },
    {
        name: 'XJ.LHG',
        value: [
            87.0606,
            43.6378
        ]
    },
    {
        name: 'XJ.LSG',
        value: [
            84.275,
            45.5639
        ]
    },
    {
        name: 'XJ.LTA',
        value: [
            84.167,
            42.022
        ]
    },
    {
        name: 'XJ.MGT',
        value: [
            77.7517,
            38.7044
        ]
    },
    {
        name: 'XJ.MIF',
        value: [
            83.6039,
            36.706
        ]
    },
    {
        name: 'XJ.MUL',
        value: [
            90.2959,
            43.8086
        ]
    },
    {
        name: 'XJ.QHE',
        value: [
            90.73,
            46.491
        ]
    },
    {
        name: 'XJ.QMO',
        value: [
            85.481,
            37.293
        ]
    },
    {
        name: 'XJ.RGN',
        value: [
            87.5614,
            43.8653
        ]
    },
    {
        name: 'XJ.RUQ',
        value: [
            88.828,
            38.973
        ]
    },
    {
        name: 'XJ.SCH',
        value: [
            85.6869,
            43.9172
        ]
    },
    {
        name: 'XJ.SHZ',
        value: [
            85.85,
            44.2
        ]
    },
    {
        name: 'XJ.SMY',
        value: [
            79.731,
            41.638
        ]
    },
    {
        name: 'XJ.SSH',
        value: [
            91.2583,
            42.173
        ]
    },
    {
        name: 'XJ.SSL',
        value: [
            78.1129,
            36.3328
        ]
    },
    {
        name: 'XJ.STZ',
        value: [
            86.6531,
            43.7133
        ]
    },
    {
        name: 'XJ.TAC',
        value: [
            83.167,
            46.938
        ]
    },
    {
        name: 'XJ.TAG',
        value: [
            75.1699,
            37.7799
        ]
    },
    {
        name: 'XJ.TAZ',
        value: [
            80.8519,
            38.4516
        ]
    },
    {
        name: 'XJ.TCH',
        value: [
            88.0878,
            43.8886
        ]
    },
    {
        name: 'XJ.WCW',
        value: [
            89.032,
            44.901
        ]
    },
    {
        name: 'XJ.WMQ',
        value: [
            87.695,
            43.6544
        ]
    },
    {
        name: 'XJ.WNQ',
        value: [
            81,
            44.98
        ]
    },
    {
        name: 'XJ.WSC',
        value: [
            87.6853,
            43.4569
        ]
    },
    {
        name: 'XJ.WSU',
        value: [
            84.6408,
            44.1231
        ]
    },
    {
        name: 'XJ.WSX',
        value: [
            87.3193,
            38.6864
        ]
    },
    {
        name: 'XJ.WUQ',
        value: [
            75.2381,
            39.7397
        ]
    },
    {
        name: 'XJ.WUS',
        value: [
            79.22,
            41.2
        ]
    },
    {
        name: 'XJ.XKR',
        value: [
            77.576,
            39.828
        ]
    },
    {
        name: 'XJ.XNY',
        value: [
            83.303,
            43.564
        ]
    },
    {
        name: 'XJ.XYD',
        value: [
            85.457,
            44.659
        ]
    },
    {
        name: 'XJ.YCH',
        value: [
            77.361,
            37.39
        ]
    },
    {
        name: 'XJ.YJS',
        value: [
            76.486,
            38.521
        ]
    },
    {
        name: 'XJ.YMS',
        value: [
            94.002,
            41.944
        ]
    },
    {
        name: 'XJ.YPH',
        value: [
            76.737,
            39.209
        ]
    },
    {
        name: 'XJ.YUM',
        value: [
            82.681,
            46.002
        ]
    },
    {
        name: 'XJ.YUT',
        value: [
            81.997,
            36.429
        ]
    },
    {
        name: 'XJ.YWU',
        value: [
            94.65,
            43.23
        ]
    },
    {
        name: 'XJ.ZSU',
        value: [
            80.367,
            42.676
        ]
    },
    {
        name: 'XZ.CAD',
        value: [
            97.17,
            31.14
        ]
    },
    {
        name: 'XZ.CHY',
        value: [
            97.47,
            28.66
        ]
    },
    {
        name: 'XZ.DQI',
        value: [
            95.64,
            31.41
        ]
    },
    {
        name: 'XZ.DXI',
        value: [
            91.07,
            30.53
        ]
    },
    {
        name: 'XZ.GZE',
        value: [
            84.07,
            32.29
        ]
    },
    {
        name: 'XZ.LIZ',
        value: [
            94.34,
            29.7
        ]
    },
    {
        name: 'XZ.LKZ',
        value: [
            90.39,
            28.97
        ]
    },
    {
        name: 'XZ.LSA',
        value: [
            91.12,
            29.71
        ]
    },
    {
        name: 'XZ.MZG',
        value: [
            91.75,
            29.85
        ]
    },
    {
        name: 'XZ.NAQ',
        value: [
            92.09,
            31.45
        ]
    },
    {
        name: 'XZ.NMA',
        value: [
            87.23,
            31.8
        ]
    },
    {
        name: 'XZ.NMU',
        value: [
            90.15,
            29.43
        ]
    },
    {
        name: 'XZ.PLA',
        value: [
            81.27,
            30.19
        ]
    },
    {
        name: 'XZ.RKZ',
        value: [
            88.87,
            29.23
        ]
    },
    {
        name: 'XZ.SNA',
        value: [
            91.75,
            29.22
        ]
    },
    {
        name: 'XZ.SQHE',
        value: [
            80.01,
            32.52
        ]
    },
    {
        name: 'XZ.SUH',
        value: [
            88.83,
            33.2
        ]
    },
    {
        name: 'XZ.ZHF',
        value: [
            86.56,
            28.36
        ]
    },
    {
        name: 'YN.BAS',
        value: [
            99.1466,
            25.118
        ]
    },
    {
        name: 'YN.CAY',
        value: [
            99.2585,
            23.1364
        ]
    },
    {
        name: 'YN.CUX',
        value: [
            101.5356,
            25.0293
        ]
    },
    {
        name: 'YN.CZS',
        value: [
            98.667,
            24.904
        ]
    },
    {
        name: 'YN.DAY',
        value: [
            101.3164,
            25.7268
        ]
    },
    {
        name: 'YN.DOC',
        value: [
            103.1866,
            26.0922
        ]
    },
    {
        name: 'YN.EYA',
        value: [
            99.9475,
            26.1088
        ]
    },
    {
        name: 'YN.FUN',
        value: [
            105.6202,
            23.6249
        ]
    },
    {
        name: 'YN.GEJ',
        value: [
            103.1596,
            23.3535
        ]
    },
    {
        name: 'YN.GOS',
        value: [
            98.6707,
            27.7449
        ]
    },
    {
        name: 'YN.GYA',
        value: [
            106.664,
            26.459
        ]
    },
    {
        name: 'YN.HEQ',
        value: [
            100.1512,
            26.549
        ]
    },
    {
        name: 'YN.HLT',
        value: [
            102.7475,
            25.1483
        ]
    },
    {
        name: 'YN.HUP',
        value: [
            101.1993,
            26.5871
        ]
    },
    {
        name: 'YN.JIG',
        value: [
            100.7351,
            23.5019
        ]
    },
    {
        name: 'YN.JIH',
        value: [
            100.7382,
            22.0194
        ]
    },
    {
        name: 'YN.JIP',
        value: [
            103.2234,
            22.7825
        ]
    },
    {
        name: 'YN.JIS',
        value: [
            102.7598,
            23.6504
        ]
    },
    {
        name: 'YN.KMI',
        value: [
            102.7475,
            25.1483
        ]
    },
    {
        name: 'YN.LAC',
        value: [
            99.9206,
            22.5524
        ]
    },
    {
        name: 'YN.LIC',
        value: [
            100.0689,
            23.8785
        ]
    },
    {
        name: 'YN.LIJ',
        value: [
            100.2322,
            26.8956
        ]
    },
    {
        name: 'YN.LOP',
        value: [
            104.2911,
            24.8856
        ]
    },
    {
        name: 'YN.LUQ',
        value: [
            102.4497,
            25.5408
        ]
    },
    {
        name: 'YN.LUS',
        value: [
            98.8518,
            25.8317
        ]
    },
    {
        name: 'YN.MAL',
        value: [
            103.5752,
            25.4273
        ]
    },
    {
        name: 'YN.MAS',
        value: [
            98.5925,
            24.4245
        ]
    },
    {
        name: 'YN.MEL',
        value: [
            99.5796,
            22.3365
        ]
    },
    {
        name: 'YN.MIL',
        value: [
            103.3885,
            24.4058
        ]
    },
    {
        name: 'YN.MIZ',
        value: [
            98.42,
            25.132
        ]
    },
    {
        name: 'YN.MLA',
        value: [
            101.5276,
            21.4259
        ]
    },
    {
        name: 'YN.MLP',
        value: [
            104.7024,
            23.1284
        ]
    },
    {
        name: 'YN.MZT',
        value: [
            98.495,
            25.215
        ]
    },
    {
        name: 'YN.QIJ',
        value: [
            102.9434,
            26.9095
        ]
    },
    {
        name: 'YN.QKT',
        value: [
            98.335,
            25.217
        ]
    },
    {
        name: 'YN.RHT',
        value: [
            98.438,
            24.955
        ]
    },
    {
        name: 'YN.RST',
        value: [
            98.391,
            24.91
        ]
    },
    {
        name: 'YN.SBT',
        value: [
            98.541,
            24.953
        ]
    },
    {
        name: 'YN.SIM',
        value: [
            101.014,
            22.7756
        ]
    },
    {
        name: 'YN.TNC',
        value: [
            98.5197,
            25.0289
        ]
    },
    {
        name: 'YN.TOH',
        value: [
            102.7881,
            24.1128
        ]
    },
    {
        name: 'YN.TUS',
        value: [
            100.254,
            25.6093
        ]
    },
    {
        name: 'YN.WAD',
        value: [
            98.0709,
            24.0851
        ]
    },
    {
        name: 'YN.WES',
        value: [
            104.2518,
            23.4076
        ]
    },
    {
        name: 'YN.XHT',
        value: [
            98.485,
            24.749
        ]
    },
    {
        name: 'YN.XUW',
        value: [
            104.1357,
            26.0881
        ]
    },
    {
        name: 'YN.YAJ',
        value: [
            104.2315,
            28.1117
        ]
    },
    {
        name: 'YN.YIM',
        value: [
            102.144,
            24.7002
        ]
    },
    {
        name: 'YN.YOD',
        value: [
            99.2454,
            24.0357
        ]
    },
    {
        name: 'YN.YOS',
        value: [
            100.7683,
            26.6941
        ]
    },
    {
        name: 'YN.YUJ',
        value: [
            101.978,
            23.5659
        ]
    },
    {
        name: 'YN.YUL',
        value: [
            99.3717,
            25.8854
        ]
    },
    {
        name: 'YN.YUM',
        value: [
            101.8607,
            25.6894
        ]
    },
    {
        name: 'YN.YUX',
        value: [
            100.1475,
            24.4348
        ]
    },
    {
        name: 'YN.ZAT',
        value: [
            103.7179,
            27.3221
        ]
    },
    {
        name: 'YN.ZOD',
        value: [
            99.6984,
            27.8232
        ]
    },
    {
        name: 'ZJ.BEL',
        value: [
            121.8329,
            29.8873
        ]
    },
    {
        name: 'ZJ.CHA',
        value: [
            118.413,
            29.4695
        ]
    },
    {
        name: 'ZJ.CHX',
        value: [
            119.6578,
            31.0865
        ]
    },
    {
        name: 'ZJ.HAY',
        value: [
            120.8476,
            30.3831
        ]
    },
    {
        name: 'ZJ.HAZ',
        value: [
            120.114,
            30.2665
        ]
    },
    {
        name: 'ZJ.HUZ',
        value: [
            120.0952,
            30.8423
        ]
    },
    {
        name: 'ZJ.JAX',
        value: [
            120.8877,
            30.7802
        ]
    },
    {
        name: 'ZJ.JIN',
        value: [
            119.6304,
            27.9805
        ]
    },
    {
        name: 'ZJ.LIA',
        value: [
            118.9578,
            30.1433
        ]
    },
    {
        name: 'ZJ.NIB',
        value: [
            121.5202,
            29.9837
        ]
    },
    {
        name: 'ZJ.NIH',
        value: [
            121.7042,
            29.2458
        ]
    },
    {
        name: 'ZJ.QIY',
        value: [
            119.0635,
            27.6164
        ]
    },
    {
        name: 'ZJ.SHS',
        value: [
            122.4507,
            30.7055
        ]
    },
    {
        name: 'ZJ.TIT',
        value: [
            121.0373,
            29.1451
        ]
    },
    {
        name: 'ZJ.WEZ',
        value: [
            120.6677,
            27.9271
        ]
    },
    {
        name: 'ZJ.WXJ',
        value: [
            118.8256,
            28.6961
        ]
    },
    {
        name: 'ZJ.XAJ',
        value: [
            119.2708,
            29.4817
        ]
    },
    {
        name: 'ZJ.XIC',
        value: [
            120.8622,
            29.4818
        ]
    },
    {
        name: 'ZJ.XSH',
        value: [
            120.1052,
            29.8938
        ]
    },
    {
        name: 'ZJ.YIX',
        value: [
            121.3262,
            29.8008
        ]
    },
    {
        name: 'ZJ.YOK',
        value: [
            120.2008,
            28.9621
        ]
    },
    {
        name: 'ZJ.YUQ',
        value: [
            121.0803,
            28.4149
        ]
    },
    {
        name: 'ZJ.YUY',
        value: [
            121.0939,
            29.9534
        ]
    },
    {
        name: 'ZJ.ZHS',
        value: [
            122.1165,
            30.0378
        ]
    },
    {
        name: 'AI.BELA',
        value: [
            -34.6269,
            -77.875
        ]
    },
    {
        name: 'AI.ESPZ',
        value: [
            -56.9964,
            -63.3981
        ]
    },
    {
        name: 'AI.ORCD',
        value: [
            -44.7361,
            -60.7381
        ]
    },
    {
        name: 'AI.SMAI',
        value: [
            -67.1059,
            -68.1302
        ]
    },
    {
        name: 'AU.ARMA',
        value: [
            151.6293,
            -30.4183
        ]
    },
    {
        name: 'AU.AS31',
        value: [
            133.904,
            -23.666
        ]
    },
    {
        name: 'AU.BBOO',
        value: [
            136.0588,
            -32.8102
        ]
    },
    {
        name: 'AU.BLDU',
        value: [
            116.7091,
            -30.6147
        ]
    },
    {
        name: 'AU.CMSA',
        value: [
            145.6916,
            -31.5375
        ]
    },
    {
        name: 'AU.CNB',
        value: [
            149.3633,
            -35.315
        ]
    },
    {
        name: 'AU.COEN',
        value: [
            143.1749,
            -13.9574
        ]
    },
    {
        name: 'AU.CTA',
        value: [
            146.25,
            -20.0876
        ]
    },
    {
        name: 'AU.EIDS',
        value: [
            151.0817,
            -25.3691
        ]
    },
    {
        name: 'AU.FITZ',
        value: [
            125.639,
            -18.102
        ]
    },
    {
        name: 'AU.FORT',
        value: [
            128.059,
            -30.779
        ]
    },
    {
        name: 'AU.GIRL',
        value: [
            114.234,
            -22.643
        ]
    },
    {
        name: 'AU.HTT',
        value: [
            138.9217,
            -33.4306
        ]
    },
    {
        name: 'AU.INKA',
        value: [
            140.7456,
            -27.741
        ]
    },
    {
        name: 'AU.KDU',
        value: [
            132.4727,
            -12.6869
        ]
    },
    {
        name: 'AU.KMBL',
        value: [
            121.8821,
            -31.3669
        ]
    },
    {
        name: 'AU.KNRA',
        value: [
            128.7627,
            -15.6769
        ]
    },
    {
        name: 'AU.LCRK',
        value: [
            138.2162,
            -30.4472
        ]
    },
    {
        name: 'AU.LHI',
        value: [
            159.0613,
            -31.52
        ]
    },
    {
        name: 'AU.MANU',
        value: [
            147.3662,
            -2.0432
        ]
    },
    {
        name: 'AU.MAW',
        value: [
            62.871,
            -67.604
        ]
    },
    {
        name: 'AU.MCQ',
        value: [
            158.9561,
            -54.4986
        ]
    },
    {
        name: 'AU.MEEK',
        value: [
            118.6135,
            -26.6376
        ]
    },
    {
        name: 'AU.MILA',
        value: [
            149.155,
            -37.0547
        ]
    },
    {
        name: 'AU.MOO',
        value: [
            147.1903,
            -42.4417
        ]
    },
    {
        name: 'AU.MORW',
        value: [
            116.0403,
            -29.0679
        ]
    },
    {
        name: 'AU.MTN',
        value: [
            131.1327,
            -12.8436
        ]
    },
    {
        name: 'AU.MULG',
        value: [
            134.0585,
            -30.2818
        ]
    },
    {
        name: 'AU.MUN',
        value: [
            116.2083,
            -31.9783
        ]
    },
    {
        name: 'AU.NFK',
        value: [
            167.9389,
            -29.0433
        ]
    },
    {
        name: 'AU.NIUE',
        value: [
            -169.9272,
            -19.0763
        ]
    },
    {
        name: 'AU.NWAO',
        value: [
            117.2333,
            -32.9268
        ]
    },
    {
        name: 'AU.OOD',
        value: [
            135.688,
            -27.7944
        ]
    },
    {
        name: 'AU.PSA00',
        value: [
            119.8458,
            -21.5725
        ]
    },
    {
        name: 'AU.PSAA1',
        value: [
            119.8362,
            -21.5767
        ]
    },
    {
        name: 'AU.PSAA2',
        value: [
            119.8467,
            -21.5628
        ]
    },
    {
        name: 'AU.PSAA3',
        value: [
            119.8549,
            -21.5781
        ]
    },
    {
        name: 'AU.PSAB1',
        value: [
            119.8218,
            -21.5689
        ]
    },
    {
        name: 'AU.PSAB2',
        value: [
            119.8611,
            -21.5548
        ]
    },
    {
        name: 'AU.PSAB3',
        value: [
            119.8547,
            -21.5933
        ]
    },
    {
        name: 'AU.PSAC1',
        value: [
            119.8092,
            -21.5336
        ]
    },
    {
        name: 'AU.PSAC2',
        value: [
            119.9006,
            -21.5625
        ]
    },
    {
        name: 'AU.PSAC3',
        value: [
            119.8277,
            -21.6215
        ]
    },
    {
        name: 'AU.PSAD1',
        value: [
            119.8301,
            -21.4547
        ]
    },
    {
        name: 'AU.PSAD2',
        value: [
            119.9627,
            -21.6173
        ]
    },
    {
        name: 'AU.PSAD3',
        value: [
            119.7797,
            -21.6432
        ]
    },
    {
        name: 'AU.QIS',
        value: [
            139.6052,
            -20.5577
        ]
    },
    {
        name: 'AU.QLP',
        value: [
            144.235,
            -26.5837
        ]
    },
    {
        name: 'AU.RABL',
        value: [
            152.1637,
            -4.1911
        ]
    },
    {
        name: 'AU.RIV',
        value: [
            151.1583,
            -33.8294
        ]
    },
    {
        name: 'AU.STKA',
        value: [
            141.5952,
            -31.8769
        ]
    },
    {
        name: 'AU.TOO',
        value: [
            145.4906,
            -37.5714
        ]
    },
    {
        name: 'AU.WB10',
        value: [
            134.3928,
            -19.7671
        ]
    },
    {
        name: 'AU.WB2',
        value: [
            134.3511,
            -19.9428
        ]
    },
    {
        name: 'AU.WR8',
        value: [
            134.5005,
            -19.9558
        ]
    },
    {
        name: 'AU.WRKA',
        value: [
            128.2961,
            -25.0375
        ]
    },
    {
        name: 'AU.XMI',
        value: [
            105.6884,
            -10.4501
        ]
    },
    {
        name: 'AU.XMIS',
        value: [
            105.652,
            -10.4807
        ]
    },
    {
        name: 'AU.YNG',
        value: [
            148.3963,
            -34.298
        ]
    },
    {
        name: 'CU.ANWB',
        value: [
            -61.7856,
            17.6685
        ]
    },
    {
        name: 'CU.BBGH',
        value: [
            -59.5588,
            13.1434
        ]
    },
    {
        name: 'CU.BCIP',
        value: [
            -79.8373,
            9.1665
        ]
    },
    {
        name: 'CU.GRGR',
        value: [
            -61.654,
            12.1324
        ]
    },
    {
        name: 'CU.GRTK',
        value: [
            -71.1327,
            21.5115
        ]
    },
    {
        name: 'CU.GTBY',
        value: [
            -75.1108,
            19.9268
        ]
    },
    {
        name: 'CU.MTDJ',
        value: [
            -77.5345,
            18.2261
        ]
    },
    {
        name: 'CU.SDDR',
        value: [
            -71.2878,
            18.9821
        ]
    },
    {
        name: 'CU.TGUH',
        value: [
            -87.273,
            14.057
        ]
    },
    {
        name: 'G.AIS',
        value: [
            77.5692,
            -37.7963
        ]
    },
    {
        name: 'G.ATD',
        value: [
            42.8466,
            11.5307
        ]
    },
    {
        name: 'G.CAN',
        value: [
            148.999,
            -35.321
        ]
    },
    {
        name: 'G.CCD',
        value: [
            123.305,
            -75.1065
        ]
    },
    {
        name: 'G.CLF',
        value: [
            2.26,
            48.0258
        ]
    },
    {
        name: 'G.COYC',
        value: [
            -72.0814,
            -45.573
        ]
    },
    {
        name: 'G.CRZF',
        value: [
            51.861,
            -46.43
        ]
    },
    {
        name: 'G.DRV',
        value: [
            140.002,
            -66.665
        ]
    },
    {
        name: 'G.DZM',
        value: [
            166.4438,
            -22.0716
        ]
    },
    {
        name: 'GE.APE',
        value: [
            25.5306,
            37.0689
        ]
    },
    {
        name: 'GE.BKB',
        value: [
            116.9048,
            -1.1073
        ]
    },
    {
        name: 'GE.BKNI',
        value: [
            101.0396,
            0.3262
        ]
    },
    {
        name: 'GE.BOA',
        value: [
            -85.6659,
            12.4493
        ]
    },
    {
        name: 'GE.BOAB',
        value: [
            -85.6659,
            12.4493
        ]
    },
    {
        name: 'GE.BRNL',
        value: [
            13.358,
            52.4278
        ]
    },
    {
        name: 'G.ECH',
        value: [
            7.158,
            48.216
        ]
    },
    {
        name: 'GE.CISI',
        value: [
            107.8153,
            -7.5557
        ]
    },
    {
        name: 'GE.CSS',
        value: [
            33.331,
            34.9611
        ]
    },
    {
        name: 'GE.DAG',
        value: [
            -18.655,
            76.7713
        ]
    },
    {
        name: 'GE.DAMY',
        value: [
            44.3917,
            14.5725
        ]
    },
    {
        name: 'GE.DSB',
        value: [
            -6.3762,
            53.2452
        ]
    },
    {
        name: 'GE.EIL',
        value: [
            34.9512,
            29.6699
        ]
    },
    {
        name: 'GE.FAKI',
        value: [
            132.2489,
            -2.9192
        ]
    },
    {
        name: 'GE.FLT1',
        value: [
            11.2372,
            52.3306
        ]
    },
    {
        name: 'GE.GSI',
        value: [
            97.5755,
            1.3039
        ]
    },
    {
        name: 'GE.GVD',
        value: [
            24.0873,
            34.8392
        ]
    },
    {
        name: 'GE.HLG',
        value: [
            7.8839,
            54.1847
        ]
    },
    {
        name: 'GE.HMDM',
        value: [
            73.1822,
            6.7731
        ]
    },
    {
        name: 'GE.IBBN',
        value: [
            7.7592,
            52.3063
        ]
    },
    {
        name: 'GE.ISP',
        value: [
            30.5093,
            37.8433
        ]
    },
    {
        name: 'GE.JAGI',
        value: [
            114.1521,
            -8.4702
        ]
    },
    {
        name: 'GE.KAAM',
        value: [
            72.9949,
            0.4926
        ]
    },
    {
        name: 'GE.KARN',
        value: [
            23.9174,
            35.4019
        ]
    },
    {
        name: 'GE.KBS',
        value: [
            11.9417,
            78.9256
        ]
    },
    {
        name: 'GE.KBU',
        value: [
            69.1347,
            34.5151
        ]
    },
    {
        name: 'GE.KMBO',
        value: [
            37.2523,
            -1.1268
        ]
    },
    {
        name: 'GE.KSDI',
        value: [
            35.659,
            33.192
        ]
    },
    {
        name: 'GE.KWP',
        value: [
            22.7078,
            49.6305
        ]
    },
    {
        name: 'GE.LAST',
        value: [
            25.4786,
            35.1611
        ]
    },
    {
        name: 'GE.LHMI',
        value: [
            96.9472,
            5.2288
        ]
    },
    {
        name: 'GE.LUWI',
        value: [
            122.7717,
            -1.0418
        ]
    },
    {
        name: 'GE.LVC',
        value: [
            -68.9113,
            -22.6182
        ]
    },
    {
        name: 'GE.MALT',
        value: [
            38.4273,
            38.3134
        ]
    },
    {
        name: 'GE.MATE',
        value: [
            16.7044,
            40.6491
        ]
    },
    {
        name: 'GE.MMRI',
        value: [
            122.2376,
            -8.6357
        ]
    },
    {
        name: 'GE.MNAI',
        value: [
            102.9557,
            -4.3605
        ]
    },
    {
        name: 'GE.MORC',
        value: [
            17.5428,
            49.7766
        ]
    },
    {
        name: 'GE.MTE',
        value: [
            -7.5442,
            40.3997
        ]
    },
    {
        name: 'GE.PMBI',
        value: [
            104.6993,
            -2.9024
        ]
    },
    {
        name: 'GE.PMG',
        value: [
            147.1539,
            -9.4092
        ]
    },
    {
        name: 'GE.PSZ',
        value: [
            19.8944,
            47.9184
        ]
    },
    {
        name: 'GE.PUL',
        value: [
            30.317,
            59.767
        ]
    },
    {
        name: 'GE.RGN',
        value: [
            13.3214,
            54.5477
        ]
    },
    {
        name: 'GE.RUE',
        value: [
            13.78,
            52.4759
        ]
    },
    {
        name: 'GE.SANT',
        value: [
            25.459,
            36.371
        ]
    },
    {
        name: 'GE.SAUI',
        value: [
            131.2988,
            -7.9826
        ]
    },
    {
        name: 'GE.SIVA',
        value: [
            24.81,
            35.0175
        ]
    },
    {
        name: 'GE.SLIT',
        value: [
            22.2905,
            57.6287
        ]
    },
    {
        name: 'GE.SMRI',
        value: [
            110.4407,
            -7.0492
        ]
    },
    {
        name: 'GE.SNAA',
        value: [
            -2.8379,
            -71.6707
        ]
    },
    {
        name: 'GE.SOCY',
        value: [
            53.9874,
            12.187
        ]
    },
    {
        name: 'GE.SOEI',
        value: [
            124.2672,
            -9.7553
        ]
    },
    {
        name: 'GE.STU',
        value: [
            9.195,
            48.7719
        ]
    },
    {
        name: 'GE.SUMG',
        value: [
            -38.4539,
            72.5763
        ]
    },
    {
        name: 'GE.SUW',
        value: [
            23.1808,
            54.0125
        ]
    },
    {
        name: 'GE.TIRR',
        value: [
            28.4128,
            44.4581
        ]
    },
    {
        name: 'GE.TNTI',
        value: [
            127.3667,
            0.7718
        ]
    },
    {
        name: 'GE.TOLI',
        value: [
            120.7944,
            1.1214
        ]
    },
    {
        name: 'GE.UGM',
        value: [
            110.5231,
            -7.9125
        ]
    },
    {
        name: 'GE.VAL',
        value: [
            -10.2442,
            51.9394
        ]
    },
    {
        name: 'GE.VSU',
        value: [
            26.7347,
            58.462
        ]
    },
    {
        name: 'GE.WIN',
        value: [
            17.0915,
            -22.5691
        ]
    },
    {
        name: 'GE.WLF',
        value: [
            6.1526,
            49.6646
        ]
    },
    {
        name: 'GE.ZKR',
        value: [
            26.217,
            35.1147
        ]
    },
    {
        name: 'G.FDF',
        value: [
            -61.143,
            14.735
        ]
    },
    {
        name: 'G.FOMA',
        value: [
            46.9788,
            -24.9756
        ]
    },
    {
        name: 'G.HDC',
        value: [
            -84.1114,
            10.0021
        ]
    },
    {
        name: 'G.HYB',
        value: [
            78.553,
            17.417
        ]
    },
    {
        name: 'G.INU',
        value: [
            137.029,
            35.35
        ]
    },
    {
        name: 'G.IVI',
        value: [
            -48.1712,
            61.2058
        ]
    },
    {
        name: 'G.KIP',
        value: [
            -158.0112,
            21.42
        ]
    },
    {
        name: 'G.MBO',
        value: [
            -16.9555,
            14.392
        ]
    },
    {
        name: 'G.MPG',
        value: [
            -52.6445,
            5.1101
        ]
    },
    {
        name: 'G.NOUC',
        value: [
            166.3066,
            -22.0986
        ]
    },
    {
        name: 'G.PAF',
        value: [
            70.2107,
            -49.351
        ]
    },
    {
        name: 'G.PEL',
        value: [
            -70.6749,
            -33.1436
        ]
    },
    {
        name: 'G.PPTF',
        value: [
            -149.5652,
            -17.5896
        ]
    },
    {
        name: 'G.RER',
        value: [
            55.7399,
            -21.1712
        ]
    },
    {
        name: 'G.ROCAM',
        value: [
            63.3701,
            -19.7555
        ]
    },
    {
        name: 'G.RODM',
        value: [
            63.4413,
            -19.6962
        ]
    },
    {
        name: 'G.SANVU',
        value: [
            167.2032,
            -15.4471
        ]
    },
    {
        name: 'G.SPB',
        value: [
            -47.427,
            -23.5927
        ]
    },
    {
        name: 'G.SSB',
        value: [
            4.542,
            45.279
        ]
    },
    {
        name: 'G.TAM',
        value: [
            5.527,
            22.791
        ]
    },
    {
        name: 'G.TAOE',
        value: [
            -140.1478,
            -8.8549
        ]
    },
    {
        name: 'GT.BOSA',
        value: [
            25.2555,
            -28.6141
        ]
    },
    {
        name: 'GT.DBIC',
        value: [
            -4.8566,
            6.6702
        ]
    },
    {
        name: 'GT.LBTB',
        value: [
            25.5967,
            -25.0151
        ]
    },
    {
        name: 'GT.LPAZ',
        value: [
            -68.1307,
            -16.2879
        ]
    },
    {
        name: 'GT.PLCA',
        value: [
            -70.5508,
            -40.7328
        ]
    },
    {
        name: 'GT.VNDA',
        value: [
            161.8528,
            -77.5172
        ]
    },
    {
        name: 'G.UNM',
        value: [
            -99.1781,
            19.3297
        ]
    },
    {
        name: 'G.WUS',
        value: [
            79.218,
            41.199
        ]
    },
    {
        name: 'II.AAK',
        value: [
            74.494,
            42.639
        ]
    },
    {
        name: 'II.ABKT',
        value: [
            58.1189,
            37.9304
        ]
    },
    {
        name: 'II.ABPO',
        value: [
            47.229,
            -19.018
        ]
    },
    {
        name: 'II.ALE',
        value: [
            -62.35,
            82.5033
        ]
    },
    {
        name: 'II.ARU',
        value: [
            58.5625,
            56.4302
        ]
    },
    {
        name: 'II.ASCN',
        value: [
            -14.3601,
            -7.9327
        ]
    },
    {
        name: 'II.BFO',
        value: [
            8.3311,
            48.3319
        ]
    },
    {
        name: 'II.BORG',
        value: [
            -21.3268,
            64.7474
        ]
    },
    {
        name: 'II.BRVK',
        value: [
            70.2828,
            53.0581
        ]
    },
    {
        name: 'II.CMLA',
        value: [
            -25.5243,
            37.7637
        ]
    },
    {
        name: 'II.COCO',
        value: [
            96.8349,
            -12.1901
        ]
    },
    {
        name: 'II.DGAR',
        value: [
            72.4525,
            -7.4121
        ]
    },
    {
        name: 'II.EFI',
        value: [
            -58.0637,
            -51.6753
        ]
    },
    {
        name: 'II.ERM',
        value: [
            143.1572,
            42.015
        ]
    },
    {
        name: 'II.ESK',
        value: [
            -3.205,
            55.3167
        ]
    },
    {
        name: 'II.FFC',
        value: [
            -101.9783,
            54.725
        ]
    },
    {
        name: 'II.HOPE',
        value: [
            -36.4879,
            -54.2836
        ]
    },
    {
        name: 'II.JTS',
        value: [
            -84.9525,
            10.2908
        ]
    },
    {
        name: 'II.KAPI',
        value: [
            119.7517,
            -5.0142
        ]
    },
    {
        name: 'II.KDAK',
        value: [
            -152.5835,
            57.7828
        ]
    },
    {
        name: 'II.KIV',
        value: [
            42.6863,
            43.9553
        ]
    },
    {
        name: 'II.KURK',
        value: [
            78.6202,
            50.7154
        ]
    },
    {
        name: 'II.KWAJ',
        value: [
            167.613,
            8.8019
        ]
    },
    {
        name: 'II.LVZ',
        value: [
            34.6514,
            67.8979
        ]
    },
    {
        name: 'II.MBAR',
        value: [
            30.7382,
            -0.6019
        ]
    },
    {
        name: 'II.MSEY',
        value: [
            55.4792,
            -4.6737
        ]
    },
    {
        name: 'II.MSVF',
        value: [
            178.0528,
            -17.7448
        ]
    },
    {
        name: 'II.NIL',
        value: [
            73.2686,
            33.6506
        ]
    },
    {
        name: 'II.NNA',
        value: [
            -76.8422,
            -11.9875
        ]
    },
    {
        name: 'II.NRIL',
        value: [
            88.4414,
            69.5049
        ]
    },
    {
        name: 'II.OBN',
        value: [
            36.5674,
            55.1146
        ]
    },
    {
        name: 'II.PALK',
        value: [
            80.7022,
            7.2728
        ]
    },
    {
        name: 'II.PFO',
        value: [
            -116.4555,
            33.6107
        ]
    },
    {
        name: 'II.RAYN',
        value: [
            45.5032,
            23.5225
        ]
    },
    {
        name: 'II.RPN',
        value: [
            -109.3344,
            -27.1267
        ]
    },
    {
        name: 'II.SACV',
        value: [
            -23.6085,
            14.9702
        ]
    },
    {
        name: 'II.SHEL',
        value: [
            -5.7457,
            -15.9588
        ]
    },
    {
        name: 'II.SUR',
        value: [
            20.8117,
            -32.3797
        ]
    },
    {
        name: 'II.TAU',
        value: [
            147.3204,
            -42.9099
        ]
    },
    {
        name: 'II.TLY',
        value: [
            103.6438,
            51.6807
        ]
    },
    {
        name: 'II.UOSS',
        value: [
            56.2042,
            24.9453
        ]
    },
    {
        name: 'II.WRAB',
        value: [
            134.36,
            -19.9336
        ]
    },
    {
        name: 'II.XPFO',
        value: [
            -116.4555,
            33.6107
        ]
    },
    {
        name: 'IU.ADK',
        value: [
            -176.6842,
            51.8823
        ]
    },
    {
        name: 'IU.AFI',
        value: [
            -171.7773,
            -13.9093
        ]
    },
    {
        name: 'IU.ANMO',
        value: [
            -106.4571,
            34.946
        ]
    },
    {
        name: 'IU.ANTO',
        value: [
            32.7934,
            39.868
        ]
    },
    {
        name: 'IU.BBSR',
        value: [
            -64.6963,
            32.3713
        ]
    },
    {
        name: 'IU.BILL',
        value: [
            166.4531,
            68.0653
        ]
    },
    {
        name: 'IU.CASY',
        value: [
            110.5354,
            -66.2792
        ]
    },
    {
        name: 'IU.CCM',
        value: [
            -91.2446,
            38.0557
        ]
    },
    {
        name: 'IU.CHTO',
        value: [
            98.9443,
            18.8141
        ]
    },
    {
        name: 'IU.COLA',
        value: [
            -147.8616,
            64.8736
        ]
    },
    {
        name: 'IU.COR',
        value: [
            -123.3046,
            44.5855
        ]
    },
    {
        name: 'IU.CTAO',
        value: [
            146.2545,
            -20.0882
        ]
    },
    {
        name: 'IU.DAV',
        value: [
            125.5791,
            7.0697
        ]
    },
    {
        name: 'IU.DWPF',
        value: [
            -81.4327,
            28.1103
        ]
    },
    {
        name: 'IU.FUNA',
        value: [
            179.1966,
            -8.5259
        ]
    },
    {
        name: 'IU.FURI',
        value: [
            38.6798,
            8.8952
        ]
    },
    {
        name: 'IU.GNI',
        value: [
            44.741,
            40.148
        ]
    },
    {
        name: 'IU.GRFO',
        value: [
            11.2203,
            49.6909
        ]
    },
    {
        name: 'IU.GUMO',
        value: [
            144.8684,
            13.5893
        ]
    },
    {
        name: 'IU.HKT',
        value: [
            -95.8384,
            29.9618
        ]
    },
    {
        name: 'IU.HNR',
        value: [
            159.9475,
            -9.4387
        ]
    },
    {
        name: 'IU.HRV',
        value: [
            -71.5583,
            42.5064
        ]
    },
    {
        name: 'IU.INCN',
        value: [
            126.6239,
            37.4776
        ]
    },
    {
        name: 'IU.JOHN',
        value: [
            -169.5292,
            16.7329
        ]
    },
    {
        name: 'IU.KBL',
        value: [
            69.0432,
            34.5408
        ]
    },
    {
        name: 'IU.KBS',
        value: [
            11.9385,
            78.9154
        ]
    },
    {
        name: 'IU.KEV',
        value: [
            27.0035,
            69.7565
        ]
    },
    {
        name: 'IU.KIEV',
        value: [
            29.2242,
            50.7012
        ]
    },
    {
        name: 'IU.KIP',
        value: [
            -158.0112,
            21.42
        ]
    },
    {
        name: 'IU.KMBO',
        value: [
            37.2525,
            -1.1271
        ]
    },
    {
        name: 'IU.KNTN',
        value: [
            -171.7186,
            -2.7744
        ]
    },
    {
        name: 'IU.KONO',
        value: [
            9.5982,
            59.6491
        ]
    },
    {
        name: 'IU.KOWA',
        value: [
            -4.014,
            14.4967
        ]
    },
    {
        name: 'IU.LCO',
        value: [
            -70.7004,
            -29.011
        ]
    },
    {
        name: 'IU.LSZ',
        value: [
            28.1882,
            -15.2779
        ]
    },
    {
        name: 'IU.LVC',
        value: [
            -68.9111,
            -22.6127
        ]
    },
    {
        name: 'IU.MA2',
        value: [
            150.77,
            59.5756
        ]
    },
    {
        name: 'IU.MACI',
        value: [
            -16.5082,
            28.2502
        ]
    },
    {
        name: 'IU.MAJO',
        value: [
            138.2041,
            36.5457
        ]
    },
    {
        name: 'IU.MAKZ',
        value: [
            81.977,
            46.808
        ]
    },
    {
        name: 'IU.MBWA',
        value: [
            119.7313,
            -21.159
        ]
    },
    {
        name: 'IU.MIDW',
        value: [
            -177.3698,
            28.2156
        ]
    },
    {
        name: 'IU.MSKU',
        value: [
            13.6116,
            -1.6557
        ]
    },
    {
        name: 'IU.NWAO',
        value: [
            117.239,
            -32.9277
        ]
    },
    {
        name: 'IU.OTAV',
        value: [
            -78.4508,
            0.2376
        ]
    },
    {
        name: 'IU.PAB',
        value: [
            -4.3499,
            39.5446
        ]
    },
    {
        name: 'IU.PAYG',
        value: [
            -90.2861,
            -0.6742
        ]
    },
    {
        name: 'IU.PET',
        value: [
            158.6499,
            53.0233
        ]
    },
    {
        name: 'IU.PMG',
        value: [
            147.1597,
            -9.4047
        ]
    },
    {
        name: 'IU.PMSA',
        value: [
            -64.0489,
            -64.7744
        ]
    },
    {
        name: 'IU.POHA',
        value: [
            -155.5326,
            19.7573
        ]
    },
    {
        name: 'IU.PTCN',
        value: [
            -130.0953,
            -25.0713
        ]
    },
    {
        name: 'IU.PTGA',
        value: [
            -59.9666,
            -0.7308
        ]
    },
    {
        name: 'IU.QSPA',
        value: [
            144.4382,
            -89.9289
        ]
    },
    {
        name: 'IU.RAR',
        value: [
            -159.7733,
            -21.2125
        ]
    },
    {
        name: 'IU.RCBR',
        value: [
            -35.9014,
            -5.8274
        ]
    },
    {
        name: 'IU.RSSD',
        value: [
            -104.0359,
            44.1212
        ]
    },
    {
        name: 'IU.SAML',
        value: [
            -63.1831,
            -8.9489
        ]
    },
    {
        name: 'IU.SBA',
        value: [
            166.7572,
            -77.8492
        ]
    },
    {
        name: 'IU.SDV',
        value: [
            -70.634,
            8.8839
        ]
    },
    {
        name: 'IU.SFJD',
        value: [
            -50.6208,
            66.9961
        ]
    },
    {
        name: 'IU.SJG',
        value: [
            -66.15,
            18.1091
        ]
    },
    {
        name: 'IU.SLBS',
        value: [
            -109.9443,
            23.6858
        ]
    },
    {
        name: 'IU.SNZO',
        value: [
            174.7043,
            -41.3087
        ]
    },
    {
        name: 'IU.SSPA',
        value: [
            -77.8876,
            40.6358
        ]
    },
    {
        name: 'IU.TARA',
        value: [
            172.9229,
            1.3549
        ]
    },
    {
        name: 'IU.TATO',
        value: [
            121.4971,
            24.9735
        ]
    },
    {
        name: 'IU.TEIG',
        value: [
            -88.2763,
            20.2263
        ]
    },
    {
        name: 'IU.TIXI',
        value: [
            128.8667,
            71.6341
        ]
    },
    {
        name: 'IU.TRQA',
        value: [
            -61.9787,
            -38.0568
        ]
    },
    {
        name: 'IU.TSUM',
        value: [
            17.5838,
            -19.2022
        ]
    },
    {
        name: 'IU.TUC',
        value: [
            -110.7847,
            32.3098
        ]
    },
    {
        name: 'IU.ULN',
        value: [
            107.0532,
            47.8651
        ]
    },
    {
        name: 'IU.WAKE',
        value: [
            166.652,
            19.2834
        ]
    },
    {
        name: 'IU.WCI',
        value: [
            -86.2939,
            38.2289
        ]
    },
    {
        name: 'IU.WVT',
        value: [
            -87.83,
            36.1297
        ]
    },
    {
        name: 'IU.XMAS',
        value: [
            -157.4457,
            2.0448
        ]
    },
    {
        name: 'IU.YAK',
        value: [
            129.6805,
            62.031
        ]
    },
    {
        name: 'IU.YSS',
        value: [
            142.7604,
            46.9587
        ]
    },
    {
        name: 'TW.ANPB',
        value: [
            121.5202,
            25.1865
        ]
    },
    {
        name: 'TW.CHGB',
        value: [
            121.174,
            24.0602
        ]
    },
    {
        name: 'TW.HGSD',
        value: [
            121.4239,
            23.4921
        ]
    },
    {
        name: 'TW.KMNB',
        value: [
            118.3882,
            24.4638
        ]
    },
    {
        name: 'TW.LYUB',
        value: [
            121.584,
            22.0017
        ]
    },
    {
        name: 'TW.NACB',
        value: [
            121.5947,
            24.1738
        ]
    },
    {
        name: 'TW.PHUB',
        value: [
            119.5801,
            23.5114
        ]
    },
    {
        name: 'TW.RLNB',
        value: [
            120.3594,
            23.8911
        ]
    },
    {
        name: 'TW.SSLB',
        value: [
            120.954,
            23.7875
        ]
    },
    {
        name: 'TW.TDCB',
        value: [
            121.1583,
            24.252
        ]
    },
    {
        name: 'TW.TPUB',
        value: [
            120.6296,
            23.3005
        ]
    },
    {
        name: 'TW.TWGB',
        value: [
            121.0799,
            22.8176
        ]
    },
    {
        name: 'TW.TWKB',
        value: [
            120.8125,
            21.9406
        ]
    },
    {
        name: 'TW.WFSB',
        value: [
            121.7806,
            25.0716
        ]
    },
    {
        name: 'TW.YHNB',
        value: [
            121.3748,
            24.6698
        ]
    },
    {
        name: 'TW.YULB',
        value: [
            121.2973,
            23.3924
        ]
    }
]

export const networkData = [
    {
        name: 'AH',
        value: [
            '117.1054',
            '31.9957'
        ]
    },
    {
        name: 'BJ',
        value: [
            '116.4258',
            '40.0389'
        ]
    },
    {
        name: 'BU',
        value: [
            '116.3299',
            '40.0278'
        ]
    },
    {
        name: 'CQ',
        value: [
            '107.8718',
            '30.0163'
        ]
    },
    {
        name: 'FJ',
        value: [
            '118.2430',
            '25.8836'
        ]
    },
    {
        name: 'GD',
        value: [
            '113.7843',
            '23.0336'
        ]
    },
    {
        name: 'GS',
        value: [
            '102.2982',
            '37.0174'
        ]
    },
    {
        name: 'GX',
        value: [
            '108.6365',
            '23.1996'
        ]
    },
    {
        name: 'GZ',
        value: [
            '106.6754',
            '26.4652'
        ]
    },
    {
        name: 'HA',
        value: [
            '113.7011',
            '34.5099'
        ]
    },
    {
        name: 'HB',
        value: [
            '112.2032',
            '31.0156'
        ]
    },
    {
        name: 'HE',
        value: [
            '115.7766',
            '38.7172'
        ]
    },
    {
        name: 'HI',
        value: [
            '110.1057',
            '19.2962'
        ]
    },
    {
        name: 'HL',
        value: [
            '128.2154',
            '47.0365'
        ]
    },
    {
        name: 'HN',
        value: [
            '111.9386',
            '27.9177'
        ]
    },
    {
        name: 'JL',
        value: [
            '126.4892',
            '42.9819'
        ]
    },
    {
        name: 'JS',
        value: [
            '119.4419',
            '32.9816'
        ]
    },
    {
        name: 'JX',
        value: [
            '115.6428',
            '27.4020'
        ]
    },
    {
        name: 'LN',
        value: [
            '122.6083',
            '41.1809'
        ]
    },
    {
        name: 'NM',
        value: [
            '115.6563',
            '43.6730'
        ]
    },
    {
        name: 'NQ',
        value: [
            '92.0940',
            '31.4946'
        ]
    },
    {
        name: 'NX',
        value: [
            '106.1338',
            '37.4194'
        ]
    },
    {
        name: 'QH',
        value: [
            '99.1628',
            '36.0503'
        ]
    },
    {
        name: 'SC',
        value: [
            '103.3234',
            '30.1342'
        ]
    },
    {
        name: 'SD',
        value: [
            '118.8287',
            '36.3797'
        ]
    },
    {
        name: 'SH',
        value: [
            '121.5082',
            '30.9417'
        ]
    },
    {
        name: 'SN',
        value: [
            '108.6418',
            '34.6273'
        ]
    },
    {
        name: 'SX',
        value: [
            '112.4877',
            '37.8275'
        ]
    },
    {
        name: 'TJ',
        value: [
            '117.3588',
            '39.2119'
        ]
    },
    {
        name: 'XJ',
        value: [
            '83.3270',
            '41.7221'
        ]
    },
    {
        name: 'XZ',
        value: [
            '89.9878',
            '30.4256'
        ]
    },
    {
        name: 'YN',
        value: [
            '101.1232',
            '24.9076'
        ]
    },
    {
        name: 'ZJ',
        value: [
            '120.4901',
            '29.5910'
        ]
    },
    {
        name: 'AI',
        value: [
            '-50.8663',
            '-67.5353'
        ]
    },
    {
        name: 'AU',
        value: [
            '126.4057',
            '-25.7024'
        ]
    },
    {
        name: 'CU',
        value: [
            '-71.6861',
            '16.0905'
        ]
    },
    {
        name: 'G.',
        value: [
            '75.6895',
            '-29.9341'
        ]
    },
    {
        name: 'GE',
        value: [
            '14.2502',
            '18.9357'
        ]
    },
    {
        name: 'G.',
        value: [
            '7.1580',
            '48.2160'
        ]
    },
    {
        name: 'GE',
        value: [
            '46.5545',
            '25.2985'
        ]
    },
    {
        name: 'G.',
        value: [
            '1.4309',
            '-0.3797'
        ]
    },
    {
        name: 'GT',
        value: [
            '11.5278',
            '-30.2495'
        ]
    },
    {
        name: 'G.',
        value: [
            '-9.9800',
            '30.2644'
        ]
    },
    {
        name: 'II',
        value: [
            '25.9210',
            '19.3476'
        ]
    },
    {
        name: 'IU',
        value: [
            '1.4843',
            '16.0351'
        ]
    }
]
