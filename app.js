const STORAGE_KEY = "free-knit-workbench-v3";
const OLD_KEYS = ["free-knit-workbench-v2", "free-knit-workbench-v1"];
const PATTERN_SHARE_VERSION = 1;
const DEFAULT_BRAND = "未指定";
const DEFAULT_CATEGORY = "未分類";

const defaultData = {
  "settings": {
    "displayMode": "letter",
    "roundLabelMode": "r",
    "themeColor": "honey",
    "projectSort": "type-asc",
    "patternSort": "pinned-desc"
  },
  "brands": [
    "未指定",
    "萌娃娃 4股",
    "蘇禾 4股"
  ],
  "brandCards": [
    {
      "brand": "萌娃娃 4股",
      "colors": [
        {
          "id": "f1b7c84c-24bb-484a-b580-af93fdd3b156",
          "lot": "01",
          "colorName": "白色",
          "image": ""
        },
        {
          "id": "5007feec-352f-4bfd-aebe-b233c0ecbb8d",
          "lot": "02",
          "colorName": "奶白",
          "image": ""
        },
        {
          "id": "6110bc64-bc40-4da7-bf0b-339990e8276b",
          "lot": "03",
          "colorName": "膚色",
          "image": ""
        },
        {
          "id": "2b442012-23a5-481f-a35f-3e6338778445",
          "lot": "04",
          "colorName": "淺肉粉",
          "image": ""
        },
        {
          "id": "964419dc-6dfa-4405-b554-8a6cdd4e25fb",
          "lot": "05",
          "colorName": "粉紅",
          "image": ""
        },
        {
          "id": "b9c9c2d4-e883-4e81-a642-9be6b39eeecd",
          "lot": "06",
          "colorName": "深粉",
          "image": ""
        },
        {
          "id": "db5af01e-3eab-4084-a86c-3b8034129605",
          "lot": "07",
          "colorName": "胭脂紅",
          "image": ""
        },
        {
          "id": "51d77cd7-71c4-4d01-98b1-aa1fe06c81a2",
          "lot": "08",
          "colorName": "玫紅",
          "image": ""
        },
        {
          "id": "ff03749f-ba4e-46c8-b44b-25a00b4ddd5c",
          "lot": "09",
          "colorName": "大紅",
          "image": ""
        },
        {
          "id": "ec4b8581-a6ed-489e-87bb-6ded201741ec",
          "lot": "10",
          "colorName": "淺黃",
          "image": ""
        },
        {
          "id": "07e5b823-4988-4459-a025-fa8894f942ad",
          "lot": "11",
          "colorName": "金黃",
          "image": ""
        },
        {
          "id": "548e3e28-b4fe-4ee9-a744-4c7c391e67ac",
          "lot": "12",
          "colorName": "亮黃",
          "image": ""
        },
        {
          "id": "92d0b8f4-58df-4a38-83fe-e5a619f5740e",
          "lot": "13",
          "colorName": "橘黃",
          "image": ""
        },
        {
          "id": "5d8bcece-72e8-4f89-9fd4-dde765a0f8c5",
          "lot": "14",
          "colorName": "橘紅",
          "image": ""
        },
        {
          "id": "f76750a7-7ddb-49d8-8246-b6c85a6cb9e9",
          "lot": "15",
          "colorName": "粉紫",
          "image": ""
        },
        {
          "id": "8e97fb0d-4b34-4fce-8474-6e3ed197c6da",
          "lot": "16",
          "colorName": "紫色",
          "image": ""
        },
        {
          "id": "82f7402e-75da-489c-a2e9-f239633a12f7",
          "lot": "17",
          "colorName": "若水",
          "image": ""
        },
        {
          "id": "2a285e5d-3ad2-4611-aa41-80170e122065",
          "lot": "18",
          "colorName": "天藍",
          "image": ""
        },
        {
          "id": "b727c985-1372-42a3-8e0d-3a9bb4db4349",
          "lot": "19",
          "colorName": "深藍",
          "image": ""
        },
        {
          "id": "02ee0b92-e427-4a42-bcb4-2275aa29cf21",
          "lot": "20",
          "colorName": "寶藍",
          "image": ""
        },
        {
          "id": "86a8760a-f169-46c6-b9ed-4696b2e07d86",
          "lot": "21",
          "colorName": "藏青",
          "image": ""
        },
        {
          "id": "01f8926a-3cec-4199-bec0-46d664c4c3ea",
          "lot": "22",
          "colorName": "湖綠",
          "image": ""
        },
        {
          "id": "74679325-4e0c-4ba7-8124-bcf7b07c590f",
          "lot": "23",
          "colorName": "祖母綠",
          "image": ""
        },
        {
          "id": "042bbc8e-f8c1-44db-8e29-87d9c99f7a97",
          "lot": "24",
          "colorName": "嫩綠",
          "image": ""
        },
        {
          "id": "1c13418f-f452-4297-bf68-117214691190",
          "lot": "25",
          "colorName": "芽綠",
          "image": ""
        },
        {
          "id": "60dff6f5-59a1-4e7d-933b-68b799394d18",
          "lot": "26",
          "colorName": "軍綠",
          "image": ""
        },
        {
          "id": "b6bf2c68-cba0-4473-ab5a-babd93caa64a",
          "lot": "27",
          "colorName": "翠綠",
          "image": ""
        },
        {
          "id": "f36a93c0-d42d-42c7-813a-d4265f426191",
          "lot": "28",
          "colorName": "米色",
          "image": ""
        },
        {
          "id": "5a35c494-043e-4c51-a8b3-9a77b602b9eb",
          "lot": "29",
          "colorName": "奶茶",
          "image": ""
        },
        {
          "id": "be22a806-29c0-4a5a-9f21-b97ee6dcaebb",
          "lot": "30",
          "colorName": "黃棕",
          "image": ""
        },
        {
          "id": "f828b870-a82c-4994-a28b-d86eb3b47869",
          "lot": "31",
          "colorName": "淺咖",
          "image": ""
        },
        {
          "id": "4f7f1e99-dbf4-493f-b51b-4cbddaa1c0c2",
          "lot": "32",
          "colorName": "深咖",
          "image": ""
        },
        {
          "id": "ff9094d7-b0b3-476f-bb57-f3bcf310f845",
          "lot": "33",
          "colorName": "灰色",
          "image": ""
        },
        {
          "id": "1eefe9c1-d55d-4d45-a689-a6a117c677d3",
          "lot": "34",
          "colorName": "黑色",
          "image": ""
        },
        {
          "id": "5b2e93e6-7f32-4380-bc71-b9389b6c3886",
          "lot": "35",
          "colorName": "麥香",
          "image": ""
        },
        {
          "id": "85d7c7f2-533d-4721-ba8c-20601d76e62d",
          "lot": "36",
          "colorName": "淺灰",
          "image": ""
        },
        {
          "id": "c3e86bdb-5a53-4621-b728-da9423146260",
          "lot": "37",
          "colorName": "肉色",
          "image": ""
        },
        {
          "id": "e29c01bc-aaa9-4532-aea1-4e004cc00667",
          "lot": "38",
          "colorName": "煙紫",
          "image": ""
        },
        {
          "id": "5f9ce27d-0829-4949-89e5-f866bd7ec32a",
          "lot": "39",
          "colorName": "橘色",
          "image": ""
        },
        {
          "id": "a8d00344-4307-4e1d-86bf-c0a83dace4b1",
          "lot": "40",
          "colorName": "黃綠",
          "image": ""
        },
        {
          "id": "ea1b646e-22ee-4e0e-b302-cffd885aff52",
          "lot": "41",
          "colorName": "間青",
          "image": ""
        },
        {
          "id": "b4101027-3a55-41cb-8007-092685fd2b78",
          "lot": "42",
          "colorName": "牛仔藍",
          "image": ""
        },
        {
          "id": "8f0fde3a-1eeb-4c3d-b4cb-bb51f179ec60",
          "lot": "43",
          "colorName": "櫻花粉",
          "image": ""
        },
        {
          "id": "28f4153b-4c27-4019-a23f-20efd1045ae0",
          "lot": "44",
          "colorName": "珊瑚粉",
          "image": ""
        },
        {
          "id": "95d01281-c29b-4ad2-abbe-cff8dd6dcb68",
          "lot": "45",
          "colorName": "群藍",
          "image": ""
        },
        {
          "id": "d38cd25c-0118-4f20-90af-3be5e6399112",
          "lot": "46",
          "colorName": "靛藍",
          "image": ""
        },
        {
          "id": "f5c5681e-67a1-4788-a81a-e99abe00c17a",
          "lot": "47",
          "colorName": "薄荷",
          "image": ""
        },
        {
          "id": "21555fe7-1387-4548-9656-f74015e8b1bc",
          "lot": "48",
          "colorName": "秋黃",
          "image": ""
        },
        {
          "id": "98acaed4-7a1f-4617-bd9a-0cd97b3bfc23",
          "lot": "49",
          "colorName": "深紫",
          "image": ""
        },
        {
          "id": "2cd3d236-9c13-42fe-b381-8a9e6269376b",
          "lot": "50",
          "colorName": "深紅",
          "image": ""
        },
        {
          "id": "cba6c6aa-e33b-44ac-8a64-36d00253b3b3",
          "lot": "51",
          "colorName": "乳白",
          "image": ""
        },
        {
          "id": "fca81128-bb2f-490f-b575-b9f3666ff7bb",
          "lot": "52",
          "colorName": "桃紅",
          "image": ""
        },
        {
          "id": "038f86b6-c6d0-4e6e-8776-d520a5a72139",
          "lot": "53",
          "colorName": "紫紅",
          "image": ""
        },
        {
          "id": "de5f1500-0fe0-446b-aa13-5bf2771cef80",
          "lot": "54",
          "colorName": "森林綠",
          "image": ""
        },
        {
          "id": "311d5b72-e004-4668-832f-c773c793c5d6",
          "lot": "55",
          "colorName": "淺軍綠",
          "image": ""
        },
        {
          "id": "4e60c98b-5f78-44a4-b1b7-53781a16cec7",
          "lot": "56",
          "colorName": "淡雪青",
          "image": ""
        },
        {
          "id": "2c9515eb-1271-4de3-a260-cd20123405d7",
          "lot": "57",
          "colorName": "雪青",
          "image": ""
        },
        {
          "id": "fb6ec16f-0ff9-4d78-b5b8-3cf0141fa5be",
          "lot": "58",
          "colorName": "湖藍",
          "image": ""
        },
        {
          "id": "698c1c0a-a9f5-454a-bf8c-26a6fee4a1e3",
          "lot": "59",
          "colorName": "仙蹤綠",
          "image": ""
        },
        {
          "id": "be8c1dc2-a517-4425-92da-36ab94c49221",
          "lot": "60",
          "colorName": "淺棕",
          "image": ""
        },
        {
          "id": "f84d2ff1-dafb-4e8c-af45-90f85adafcfd",
          "lot": "61",
          "colorName": "棕色",
          "image": ""
        },
        {
          "id": "409ab463-80de-4f21-808c-38f1c2df215f",
          "lot": "62",
          "colorName": "紅棕",
          "image": ""
        },
        {
          "id": "b9caf884-dea1-4bfc-9fa3-56ae0e7e2e0f",
          "lot": "63",
          "colorName": "小雞黃",
          "image": ""
        },
        {
          "id": "cf1f74b7-5aa4-4b84-9201-aa72f1e444d8",
          "lot": "64",
          "colorName": "淺橘",
          "image": ""
        },
        {
          "id": "1e7f7042-d92c-4993-908c-341a375f60c8",
          "lot": "65",
          "colorName": "菊粉",
          "image": ""
        },
        {
          "id": "ddda743a-7815-4a8b-a5ee-6a5f2d577fbf",
          "lot": "66",
          "colorName": "酒紅",
          "image": ""
        },
        {
          "id": "e0eb667e-5722-4cc7-9f2a-c12b1fff1bba",
          "lot": "67",
          "colorName": "淺羅馬紅",
          "image": ""
        },
        {
          "id": "0abf3b1f-2eea-4aed-b0c2-1a12b5ea7b6e",
          "lot": "1301",
          "colorName": "青金色",
          "image": ""
        },
        {
          "id": "8acd4c45-c4d5-496e-94ac-41032536db29",
          "lot": "1302",
          "colorName": "聖誕綠",
          "image": ""
        },
        {
          "id": "79db9a6c-903f-4ed6-ac04-1d939d53a7e5",
          "lot": "1303",
          "colorName": "羅馬紅",
          "image": ""
        },
        {
          "id": "32ff127f-d1e1-4e7a-8a8d-6ac61dc95c8e",
          "lot": "1304",
          "colorName": "水藍色",
          "image": ""
        },
        {
          "id": "c01f1a64-ef36-4b31-a640-1a414339e028",
          "lot": "1305",
          "colorName": "亮粉",
          "image": ""
        },
        {
          "id": "01a3f1b8-1eb0-4245-b89b-ee480bbc98af",
          "lot": "1306",
          "colorName": "西瓜紅",
          "image": ""
        },
        {
          "id": "3efddce6-b51d-4ffe-b056-8b8245b75fd1",
          "lot": "1311",
          "colorName": "卡其",
          "image": ""
        },
        {
          "id": "0780b502-bd45-4838-abd5-8c095ba1f44f",
          "lot": "1312",
          "colorName": "淺藍",
          "image": ""
        },
        {
          "id": "9a3b673c-4512-419b-a253-ed3622ca0d6c",
          "lot": "1313",
          "colorName": "青草綠",
          "image": ""
        },
        {
          "id": "7fcaa006-cc5a-486b-accc-fc7f3897ac96",
          "lot": "1314",
          "colorName": "紫藤",
          "image": ""
        },
        {
          "id": "7fbfd6ae-4345-450c-ab19-19cf45c5f287",
          "lot": "1315",
          "colorName": "淺湖藍",
          "image": ""
        },
        {
          "id": "af034e6c-bf43-468d-90cb-3cc087235526",
          "lot": "1316",
          "colorName": "奶油黃",
          "image": ""
        },
        {
          "id": "ac7ba670-d612-4d21-8bd9-374c47609c11",
          "lot": "1317",
          "colorName": "肉橘粉",
          "image": ""
        },
        {
          "id": "298d0f24-3f78-48b0-abb1-1ece8c1da9d2",
          "lot": "1318",
          "colorName": "向日葵黃",
          "image": ""
        },
        {
          "id": "2f2369f8-f5ef-4acf-9a62-14bff0a32e40",
          "lot": "1319",
          "colorName": "新芽",
          "image": ""
        },
        {
          "id": "375fa189-5dbe-446a-8868-a63d58a0740d",
          "lot": "1320",
          "colorName": "香芋紫",
          "image": ""
        },
        {
          "id": "09e87e84-7af6-4687-81a4-f0d144a2051d",
          "lot": "1321",
          "colorName": "海貝紫",
          "image": ""
        },
        {
          "id": "a25acfa6-c7ff-418d-8b65-ea1e5d90135a",
          "lot": "1322",
          "colorName": "中灰",
          "image": ""
        },
        {
          "id": "f6c9e8dd-8df6-4739-b09d-580bd6811c75",
          "lot": "1323",
          "colorName": "豆沙綠",
          "image": ""
        },
        {
          "id": "9426b8fb-aa21-4eea-81f1-7d9e05ac8044",
          "lot": "1324",
          "colorName": "藕粉",
          "image": ""
        },
        {
          "id": "f0d82ca9-1063-4b73-b5d4-ae74743dd3ba",
          "lot": "1325",
          "colorName": "蒼綠",
          "image": ""
        },
        {
          "id": "dfff7d45-7934-4909-925e-eed3a38915dd",
          "lot": "1326",
          "colorName": "紫羅蘭",
          "image": ""
        },
        {
          "id": "f468a34d-8146-42b2-a0ec-c360f63651ad",
          "lot": "1327",
          "colorName": "初音未來",
          "image": ""
        },
        {
          "id": "20fd7cf8-ad00-484c-aba6-0ccf0eb9941d",
          "lot": "1328",
          "colorName": "淺粉",
          "image": ""
        },
        {
          "id": "9e6ef0bb-f780-4cfc-9eaa-a93030d7424c",
          "lot": "1329",
          "colorName": "亮桔",
          "image": ""
        },
        {
          "id": "0a8a8c10-2123-45df-8e01-027e9b104675",
          "lot": "1330",
          "colorName": "烏梅紫醬",
          "image": ""
        }
      ]
    },
    {
      "brand": "蘇禾 4股",
      "colors": [
        {
          "id": "3d30b405-50c0-40bf-9d33-fd1507f5b8ee",
          "lot": "01",
          "colorName": "姜黃",
          "image": ""
        },
        {
          "id": "cd436ab5-bfd6-41ce-88df-247ded317aac",
          "lot": "02",
          "colorName": "深粉",
          "image": ""
        },
        {
          "id": "282fe3d6-98de-4bf3-a096-650392bb7b6a",
          "lot": "03",
          "colorName": "淺橙",
          "image": ""
        },
        {
          "id": "5f9586fa-ad32-420c-b69c-262b19a782dd",
          "lot": "04",
          "colorName": "淺紫",
          "image": ""
        },
        {
          "id": "6d65d12b-2f1d-43d7-90f0-b836423bff3c",
          "lot": "05",
          "colorName": "青色",
          "image": ""
        },
        {
          "id": "c0978018-9fdb-4aed-acc3-8ff7b85a90ae",
          "lot": "06",
          "colorName": "乳白",
          "image": ""
        },
        {
          "id": "335ce934-8d7c-46a4-9779-729465f792de",
          "lot": "07",
          "colorName": "膚色",
          "image": ""
        },
        {
          "id": "d7352262-41c4-4549-9523-8ccaa59748ea",
          "lot": "08",
          "colorName": "紫色",
          "image": ""
        },
        {
          "id": "79291570-21f3-44fa-8d42-4bdcb09aa8d9",
          "lot": "09",
          "colorName": "雞黃",
          "image": ""
        },
        {
          "id": "cc00e18c-9237-43db-a72d-539d6f8b73a3",
          "lot": "10",
          "colorName": "粉紅",
          "image": ""
        },
        {
          "id": "f9c407d4-8e54-4342-9be8-1b74a3c776c2",
          "lot": "11",
          "colorName": "淺灰",
          "image": ""
        },
        {
          "id": "d2562284-6e20-437e-b738-30f235acd038",
          "lot": "12",
          "colorName": "淺紅",
          "image": ""
        },
        {
          "id": "294846d3-c9db-4f93-9ef8-568893288a9d",
          "lot": "13",
          "colorName": "淺綠",
          "image": ""
        },
        {
          "id": "65a65bf4-5fe1-4dbb-825d-d599e198c59d",
          "lot": "14",
          "colorName": "淺藍",
          "image": ""
        },
        {
          "id": "10e56947-df1e-454f-80d7-ae778c56c02a",
          "lot": "15",
          "colorName": "水藍",
          "image": ""
        },
        {
          "id": "340d0fe7-d3e9-49fc-b597-36b07c8597a8",
          "lot": "16",
          "colorName": "淺黃",
          "image": ""
        },
        {
          "id": "84cebe61-5932-4ece-9dd1-db9bc199b3bd",
          "lot": "17",
          "colorName": "靛青",
          "image": ""
        },
        {
          "id": "bf5dad26-1da1-49fb-8098-a77941fa9917",
          "lot": "18",
          "colorName": "卡其",
          "image": ""
        },
        {
          "id": "8e954d4d-7294-42c4-8a71-6c765db02488",
          "lot": "19",
          "colorName": "米色",
          "image": ""
        },
        {
          "id": "a241f553-ad4b-4a84-ad7b-5afa5caaa37d",
          "lot": "20",
          "colorName": "朱紅",
          "image": ""
        },
        {
          "id": "c85d32c1-44ff-47bd-93f2-df61915fcc71",
          "lot": "21",
          "colorName": "黑色",
          "image": ""
        },
        {
          "id": "df10c0b5-1c03-4977-9d67-41d91f579e87",
          "lot": "22",
          "colorName": "翠綠",
          "image": ""
        },
        {
          "id": "85a7de97-dc11-418d-9e39-b83be6f46322",
          "lot": "23",
          "colorName": "淺棕",
          "image": ""
        },
        {
          "id": "0667c3c1-3af1-4923-997b-67d30c2385aa",
          "lot": "24",
          "colorName": "淺羅馬紅",
          "image": ""
        },
        {
          "id": "d8aaeff0-3cd0-443d-a73a-1e249ae39018",
          "lot": "25",
          "colorName": "柳綠",
          "image": ""
        },
        {
          "id": "491a43a0-1fe1-4cf5-9a58-d2026a4fec98",
          "lot": "26",
          "colorName": "深棕",
          "image": ""
        },
        {
          "id": "f1799646-7bbe-4aef-9d7a-625a2cbdd1bb",
          "lot": "27",
          "colorName": "霧白",
          "image": ""
        },
        {
          "id": "66f41dd5-5df0-4128-a512-17c78fe5af67",
          "lot": "28",
          "colorName": "間青",
          "image": ""
        },
        {
          "id": "eb65ee8f-a693-4e06-988f-ce4c2a747be2",
          "lot": "29",
          "colorName": "深羅馬紅",
          "image": ""
        },
        {
          "id": "31460c72-fc1b-4602-97db-1ae99afa7618",
          "lot": "30",
          "colorName": "桔色",
          "image": ""
        },
        {
          "id": "946c6bc2-b892-40ae-ac06-cffe6256ef38",
          "lot": "31",
          "colorName": "珊瑚紅",
          "image": ""
        },
        {
          "id": "021f4dc2-56e4-4531-bdcc-78ef7c7284f0",
          "lot": "32",
          "colorName": "橄欖綠",
          "image": ""
        },
        {
          "id": "1f0d3392-72cc-4949-ad8e-506f9dfe7dd0",
          "lot": "33",
          "colorName": "深青",
          "image": ""
        },
        {
          "id": "73926ee3-669c-4978-9729-56f94ef8458f",
          "lot": "34",
          "colorName": "咖啡",
          "image": ""
        },
        {
          "id": "6cafe2b7-9957-480c-b5a4-a9e73970691b",
          "lot": "35",
          "colorName": "緋紅",
          "image": ""
        },
        {
          "id": "640c1908-4eb2-4f4e-99ba-c3227efab093",
          "lot": "36",
          "colorName": "灰色",
          "image": ""
        },
        {
          "id": "171f7474-76df-4e6b-9c9f-6371385cdcd5",
          "lot": "37",
          "colorName": "艾綠",
          "image": ""
        },
        {
          "id": "88d6dcee-1142-4556-9b34-9ae27f112d30",
          "lot": "38",
          "colorName": "胭脂紅",
          "image": ""
        },
        {
          "id": "0d2dff87-5b07-47ec-82ac-e74693da9516",
          "lot": "39",
          "colorName": "銀色",
          "image": ""
        },
        {
          "id": "cc7e0ff9-db65-4bb9-9ca2-82a9f89c0e63",
          "lot": "40",
          "colorName": "秋黃",
          "image": ""
        },
        {
          "id": "f2e0fecd-7c42-43bb-9301-220fa6d20259",
          "lot": "41",
          "colorName": "聖誕綠",
          "image": ""
        },
        {
          "id": "8405a1c1-bdc7-4b9b-81bb-e11be1375c1e",
          "lot": "42",
          "colorName": "孔雀藍",
          "image": ""
        },
        {
          "id": "72b8e8c0-643d-4a83-af56-da8f3604bced",
          "lot": "43",
          "colorName": "海棠紅",
          "image": ""
        },
        {
          "id": "a8a386b2-31e9-46a1-b6a4-e868f68272c6",
          "lot": "44",
          "colorName": "藏青",
          "image": ""
        },
        {
          "id": "28e0a0f9-ce89-4ecb-b45a-37cc21b774ca",
          "lot": "45",
          "colorName": "磚橙",
          "image": ""
        },
        {
          "id": "38e5f8b8-6041-4753-8cbc-5251b6c92cec",
          "lot": "46",
          "colorName": "爵士藍",
          "image": ""
        },
        {
          "id": "58ba018e-4bd2-46b7-a2e5-b895eb73c674",
          "lot": "47",
          "colorName": "天藍",
          "image": ""
        },
        {
          "id": "03ffb358-1848-45df-bcf3-11dc6285b436",
          "lot": "48",
          "colorName": "芽綠",
          "image": ""
        },
        {
          "id": "93943662-fdbb-4f8e-ac63-b4f7f9f098e3",
          "lot": "49",
          "colorName": "櫻花粉",
          "image": ""
        },
        {
          "id": "a81eb1a6-51a1-42d5-837d-e9d87254a4dc",
          "lot": "50",
          "colorName": "西瓜紅",
          "image": ""
        },
        {
          "id": "e16e9539-38cc-44ed-b038-e45c51566f81",
          "lot": "51",
          "colorName": "正紅",
          "image": ""
        },
        {
          "id": "b6eea200-0c08-401d-8108-3e5e1facb2ed",
          "lot": "52",
          "colorName": "深灰",
          "image": ""
        },
        {
          "id": "fea4137d-c7c6-4160-899b-6b11ae05d08d",
          "lot": "53",
          "colorName": "杏色",
          "image": ""
        },
        {
          "id": "812c5e36-fb9f-4e1c-86f6-91f1da085dc0",
          "lot": "54",
          "colorName": "水藍",
          "image": ""
        },
        {
          "id": "84215e0c-e093-4845-bab7-9a2cba8814ce",
          "lot": "55",
          "colorName": "藍色",
          "image": ""
        },
        {
          "id": "99089c0f-5c24-4d01-9e3e-f6346e7150e2",
          "lot": "56",
          "colorName": "金色",
          "image": ""
        },
        {
          "id": "24694bd3-b81a-4217-b1f3-86f40337169a",
          "lot": "57",
          "colorName": "深藍",
          "image": ""
        },
        {
          "id": "b224a5c5-f7db-4f18-8f87-90b38bccfb8d",
          "lot": "58",
          "colorName": "酒紅",
          "image": ""
        },
        {
          "id": "eb01c993-bc7b-4d94-8764-9027aed57e1e",
          "lot": "59",
          "colorName": "青碧綠",
          "image": ""
        },
        {
          "id": "e467a9b9-d38c-469e-bd52-56b514608d32",
          "lot": "60",
          "colorName": "明黃",
          "image": ""
        },
        {
          "id": "ec1846bc-a2a5-42c1-8122-c612c004285c",
          "lot": "61",
          "colorName": "栗色",
          "image": ""
        },
        {
          "id": "4ea7e1cf-828a-4b35-8258-75f98ee9e5b1",
          "lot": "62",
          "colorName": "深紫",
          "image": ""
        },
        {
          "id": "36182939-466e-4e86-abe4-9d93437965f7",
          "lot": "63",
          "colorName": "玫紅",
          "image": ""
        },
        {
          "id": "a5c5848c-3605-4a29-b8ac-af4d76a0229c",
          "lot": "64",
          "colorName": "本白",
          "image": ""
        }
      ]
    }
  ],
  "projectTypes": [
    "包包",
    "娃娃",
    "娃衣",
    "髮飾",
    "杯墊"
  ],
  "commonGroups": [
    {
      "id": "de0461b2-46d1-4186-92af-630725c8629f",
      "name": "(X,V)",
      "items": [
        {
          "stitchId": "sc"
        },
        {
          "stitchId": "scinc"
        }
      ]
    }
  ],
  "tools": [
    {
      "id": "b375e2c8-42a8-4503-aeba-71bc458d2f43",
      "name": "2.0 mm 鉤針",
      "brand": "金嵐",
      "url": ""
    }
  ],
  "stitches": [
    {
      "id": "ch",
      "zh": "鎖針",
      "letter": "ch"
    },
    {
      "id": "slst",
      "zh": "引拔針",
      "letter": "sl"
    },
    {
      "id": "sc",
      "zh": "短針",
      "letter": "X"
    },
    {
      "id": "hdc",
      "zh": "中長針",
      "letter": "T"
    },
    {
      "id": "dc",
      "zh": "長針",
      "letter": "F"
    },
    {
      "id": "tr",
      "zh": "長長針",
      "letter": "E"
    },
    {
      "id": "picot",
      "zh": "結粒針",
      "letter": "P"
    },
    {
      "id": "scinc",
      "zh": "兩針短針加針",
      "letter": "V"
    },
    {
      "id": "sc3inc",
      "zh": "三針短針加針",
      "letter": "W"
    },
    {
      "id": "hdcinc",
      "zh": "兩針中長針加針",
      "letter": "TV"
    },
    {
      "id": "01065c92-b8b8-4a32-abdf-43faa5e18377",
      "zh": "三針中長針加針",
      "letter": "TW"
    },
    {
      "id": "55e38d91-c10f-404d-a6ec-96d9f93b5691",
      "zh": "兩針長針加針",
      "letter": "FV"
    },
    {
      "id": "3b63bf9c-6e47-4c81-9eb3-e59c4124a70b",
      "zh": "三針長針加針",
      "letter": "FW"
    },
    {
      "id": "5043b9d9-c6e8-4838-ab08-6d6fd0f76a06",
      "zh": "兩針短針減針",
      "letter": "A"
    },
    {
      "id": "c887faf7-295f-4c0c-807b-b0c40f76ebef",
      "zh": "三針短針減針",
      "letter": "M"
    },
    {
      "id": "8bfa33b4-f130-475e-9721-42b81f7063d0",
      "zh": "兩針中長針減針",
      "letter": "TA"
    },
    {
      "id": "77b2e264-e663-419e-81d3-dd7073b32fca",
      "zh": "三針中長針減針",
      "letter": "TM"
    },
    {
      "id": "b2b52a04-9f9a-4db8-9ad9-78bebbc76cf4",
      "zh": "兩針長針減針",
      "letter": "FA"
    },
    {
      "id": "9159b6d0-96db-4954-9302-f510acfdab97",
      "zh": "三針長針減針",
      "letter": "FM"
    },
    {
      "id": "8ca1753a-660a-4f91-9ddf-8b2dd439a28e",
      "zh": "棗形針",
      "letter": "Q"
    }
  ],
  "brandWeights": {
    "未指定": 0,
    "萌娃娃 4股": 0,
    "蘇禾 4股": 0
  }
};

const DEFAULT_BRANDS = defaultData.brands;
const defaultStitches = defaultData.stitches;

const defaultState = {
  settings: structuredClone(defaultData.settings),
  brands: structuredClone(defaultData.brands),
  brandWeights: structuredClone(defaultData.brandWeights || {}),
  brandCards: structuredClone(defaultData.brandCards),
  projectTypes: structuredClone(defaultData.projectTypes),
  commonGroups: structuredClone(defaultData.commonGroups),
  tools: structuredClone(defaultData.tools),
  stitches: structuredClone(defaultData.stitches),
  projectFolders: [],
  patterns: [],
  projects: [],
  yarns: []
};

function splitBrandCategory(value) {
  if (!value || value === DEFAULT_BRAND) return { name: value || DEFAULT_BRAND, category: "" };
  const match = value.match(/^(.*)\s+([^ ]+)$/);
  return match ? { name: match[1], category: match[2] } : { name: value, category: "" };
}

function fullBrandCategoryName(name, category) {
  const cleanName = name.trim();
  const cleanCategory = category.trim();
  if (!cleanName || cleanName === DEFAULT_BRAND) return DEFAULT_BRAND;
  return cleanCategory ? `${cleanName} ${cleanCategory}` : cleanName;
}

function brandWeight(brand) {
  return Number(state?.brandWeights?.[brand] || 0);
}

let state = loadState();
let selectedProjectId = state.projects[0]?.id ?? null;
let selectedPatternId = state.patterns[0]?.id ?? null;
let selectedYarnId = state.yarns[0]?.id ?? null;
let selectedPartId = state.patterns[0]?.parts?.[0]?.id ?? null;
let selectedToolId = state.tools[0]?.id ?? null;
let selectedBrandName = "";
let actionPartId = null;
let actionPatternId = null;
let actionProjectId = null;
let actionYarnId = null;
let actionFolderName = "";
let selectedProjectIds = new Set();
let selectedPatternIds = new Set();
let selectedYarnIds = new Set();
let editingCommonGroupId = null;
let activeProjectFolder = null;
let targetSegmentForGroupId = null;
let activeStockType = "yarn";
let activeView = "projects";
let previousView = "projects";

const els = {
  appHeader: document.querySelector(".app-header"),
  backBtn: document.querySelector("#backBtn"),
  navTabs: document.querySelectorAll(".nav-tab"),
  views: document.querySelectorAll(".view"),
  projectList: document.querySelector("#projectList"),
  projectSort: document.querySelector("#projectSort"),
  newProjectBtn: document.querySelector("#newProjectBtn"),
  detailType: document.querySelector("#detailType"),
  detailName: document.querySelector("#detailName"),
  detailProgressFill: document.querySelector("#detailProgressFill"),
  detailPercent: document.querySelector("#detailPercent"),
  detailProgressText: document.querySelector("#detailProgressText"),
  projectPhotoPicker: document.querySelector("#projectPhotoPicker"),
  projectPhotoInput: document.querySelector("#projectPhotoInput"),
  projectPhoto: document.querySelector("#projectPhoto"),
  projectImages: document.querySelector("#projectImages"),
  attachedPatternList: document.querySelector("#attachedPatternList"),
  attachModal: document.querySelector("#attachModal"),
  attachPatternSearch: document.querySelector("#attachPatternSearch"),
  attachPatternOptions: document.querySelector("#attachPatternOptions"),
  closeAttachModal: document.querySelector("#closeAttachModal"),
  projectName: document.querySelector("#projectName"),
  projectType: document.querySelector("#projectType"),
  projectFolder: document.querySelector("#projectFolder"),
  projectPatternSelect: document.querySelector("#projectPatternSelect"),
  projectYarns: document.querySelector("#projectYarns"),
  projectSupplies: document.querySelector("#projectSupplies"),
  projectTools: document.querySelector("#projectTools"),
  projectNotes: document.querySelector("#projectNotes"),
  deleteProjectBtn: document.querySelector("#deleteProjectBtn"),
  roundTitle: document.querySelector("#roundTitle"),
  roundMeta: document.querySelector("#roundMeta"),
  legendList: document.querySelector("#legendList"),
  partProgressList: document.querySelector("#partProgressList"),
  writtenPattern: document.querySelector("#writtenPattern"),
  previousRoundBtn: document.querySelector("#previousRoundBtn"),
  nextRoundBtn: document.querySelector("#nextRoundBtn"),
  previousStitchBtn: document.querySelector("#previousStitchBtn"),
  nextStitchBtn: document.querySelector("#nextStitchBtn"),
  restartRoundBtn: document.querySelector("#restartRoundBtn"),
  completeRoundBtn: document.querySelector("#completeRoundBtn"),
  currentStitch: document.querySelector("#currentStitch"),
  totalStitches: document.querySelector("#totalStitches"),
  patternList: document.querySelector("#patternList"),
  patternSort: document.querySelector("#patternSort"),
  newPatternBtn: document.querySelector("#newPatternBtn"),
  openPatternImportBtn: document.querySelector("#openPatternImportBtn"),
  patternImportModal: document.querySelector("#patternImportModal"),
  closePatternImportModal: document.querySelector("#closePatternImportModal"),
  importPatternBtn: document.querySelector("#importPatternBtn"),
  importTextPatternBtn: document.querySelector("#importTextPatternBtn"),
  patternImportInput: document.querySelector("#patternImportInput"),
  patternEditTitle: document.querySelector("#patternEditTitle"),
  patternEditMeta: document.querySelector("#patternEditMeta"),
  deletePatternBtn: document.querySelector("#deletePatternBtn"),
  patternName: document.querySelector("#patternName"),
  patternSource: document.querySelector("#patternSource"),
  patternNotes: document.querySelector("#patternNotes"),
  patternYarns: document.querySelector("#patternYarns"),
  patternSupplies: document.querySelector("#patternSupplies"),
  patternSupplyUsageList: document.querySelector("#patternSupplyUsageList"),
  patternTools: document.querySelector("#patternTools"),
  patternImageInput: document.querySelector("#patternImageInput"),
  patternImages: document.querySelector("#patternImages"),
  addPartBtn: document.querySelector("#addPartBtn"),
  addSegmentBtn: document.querySelector("#addSegmentBtn"),
  segmentList: document.querySelector("#segmentList"),
  partEditTitle: document.querySelector("#partEditTitle"),
  partEditMeta: document.querySelector("#partEditMeta"),
  deletePartBtn: document.querySelector("#deletePartBtn"),
  partName: document.querySelector("#partName"),
  partNotes: document.querySelector("#partNotes"),
  partCopyCount: document.querySelector("#partCopyCount"),
  copyPartBtn: document.querySelector("#copyPartBtn"),
  partSegmentList: document.querySelector("#partSegmentList"),
  yarnEditTitle: document.querySelector("#yarnEditTitle"),
  stashList: document.querySelector("#stashList"),
  stockTypeTabs: document.querySelector("#stockTypeTabs"),
  colorCardYarnBtn: document.querySelector("#colorCardYarnBtn"),
  bulkYarnBtn: document.querySelector("#bulkYarnBtn"),
  newYarnBtn: document.querySelector("#newYarnBtn"),
  deleteYarnBtn: document.querySelector("#deleteYarnBtn"),
  yarnImageInput: document.querySelector("#yarnImageInput"),
  yarnImagePreview: document.querySelector("#yarnImagePreview"),
  yarnStockType: document.querySelector("#yarnStockType"),
  yarnColorName: document.querySelector("#yarnColorName"),
  yarnBrand: document.querySelector("#yarnBrand"),
  yarnLot: document.querySelector("#yarnLot"),
  yarnAmount: document.querySelector("#yarnAmount"),
  yarnUnit: document.querySelector("#yarnUnit"),
  yarnWeight: document.querySelector("#yarnWeight"),
  yarnUrl: document.querySelector("#yarnUrl"),
  yarnNotes: document.querySelector("#yarnNotes"),
  supplyColorsSection: document.querySelector("#supplyColorsSection"),
  supplyColorList: document.querySelector("#supplyColorList"),
  addSupplyColorBtn: document.querySelector("#addSupplyColorBtn"),
  displayMode: document.querySelector("#displayMode"),
  roundLabelMode: document.querySelector("#roundLabelMode"),
  themeColor: document.querySelector("#themeColor"),
  newStitchZh: document.querySelector("#newStitchZh"),
  newStitchLetter: document.querySelector("#newStitchLetter"),
  addStitchBtn: document.querySelector("#addStitchBtn"),
  stitchEditorList: document.querySelector("#stitchEditorList"),
  newBrandName: document.querySelector("#newBrandName"),
  addBrandBtn: document.querySelector("#addBrandBtn"),
  brandList: document.querySelector("#brandList"),
  newProjectTypeName: document.querySelector("#newProjectTypeName"),
  addProjectTypeBtn: document.querySelector("#addProjectTypeBtn"),
  projectTypeList: document.querySelector("#projectTypeList"),
  addCommonGroupBtn: document.querySelector("#addCommonGroupBtn"),
  commonGroupList: document.querySelector("#commonGroupList"),
  newToolName: document.querySelector("#newToolName"),
  newToolBrand: document.querySelector("#newToolBrand"),
  newToolUrl: document.querySelector("#newToolUrl"),
  addToolBtn: document.querySelector("#addToolBtn"),
  toolList: document.querySelector("#toolList"),
  backupDataBtn: document.querySelector("#backupDataBtn"),
  restoreDataBtn: document.querySelector("#restoreDataBtn"),
  restoreDataInput: document.querySelector("#restoreDataInput"),
  updateAppBtn: document.querySelector("#updateAppBtn"),
  resetDataBtn: document.querySelector("#resetDataBtn"),
  toolEditModal: document.querySelector("#toolEditModal"),
  closeToolEditModal: document.querySelector("#closeToolEditModal"),
  editToolName: document.querySelector("#editToolName"),
  editToolBrand: document.querySelector("#editToolBrand"),
  editToolUrl: document.querySelector("#editToolUrl"),
  deleteToolBtn: document.querySelector("#deleteToolBtn"),
  brandCardModal: document.querySelector("#brandCardModal"),
  closeBrandCardModal: document.querySelector("#closeBrandCardModal"),
  brandCardTitle: document.querySelector("#brandCardTitle"),
  brandCardCategory: document.querySelector("#brandCardCategory"),
  brandCardWeight: document.querySelector("#brandCardWeight"),
  brandCardColorName: document.querySelector("#brandCardColorName"),
  brandCardLot: document.querySelector("#brandCardLot"),
  brandCardImageInput: document.querySelector("#brandCardImageInput"),
  addBrandCardColorBtn: document.querySelector("#addBrandCardColorBtn"),
  brandCardBatchPrefix: document.querySelector("#brandCardBatchPrefix"),
  brandCardBatchStart: document.querySelector("#brandCardBatchStart"),
  brandCardBatchEnd: document.querySelector("#brandCardBatchEnd"),
  addBrandCardBatchBtn: document.querySelector("#addBrandCardBatchBtn"),
  brandCardTextInput: document.querySelector("#brandCardTextInput"),
  importBrandCardTextBtn: document.querySelector("#importBrandCardTextBtn"),
  brandCardColorList: document.querySelector("#brandCardColorList"),
  commonGroupEditModal: document.querySelector("#commonGroupEditModal"),
  closeCommonGroupEditModal: document.querySelector("#closeCommonGroupEditModal"),
  commonGroupNameInput: document.querySelector("#commonGroupNameInput"),
  commonGroupItemList: document.querySelector("#commonGroupItemList"),
  addCommonGroupItemBtn: document.querySelector("#addCommonGroupItemBtn"),
  saveCommonGroupBtn: document.querySelector("#saveCommonGroupBtn"),
  deleteCommonGroupBtn: document.querySelector("#deleteCommonGroupBtn"),
  commonGroupPickerModal: document.querySelector("#commonGroupPickerModal"),
  closeCommonGroupPickerModal: document.querySelector("#closeCommonGroupPickerModal"),
  commonGroupPickerList: document.querySelector("#commonGroupPickerList"),
  textPatternModal: document.querySelector("#textPatternModal"),
  closeTextPatternModal: document.querySelector("#closeTextPatternModal"),
  textPatternName: document.querySelector("#textPatternName"),
  textPatternInput: document.querySelector("#textPatternInput"),
  convertTextPatternBtn: document.querySelector("#convertTextPatternBtn"),
  textPatternUnparsed: document.querySelector("#textPatternUnparsed"),
  textPatternReference: document.querySelector("#textPatternReference"),
  supplyDeductModal: document.querySelector("#supplyDeductModal"),
  closeSupplyDeductModal: document.querySelector("#closeSupplyDeductModal"),
  supplyDeductList: document.querySelector("#supplyDeductList"),
  skipSupplyDeductBtn: document.querySelector("#skipSupplyDeductBtn"),
  confirmSupplyDeductBtn: document.querySelector("#confirmSupplyDeductBtn"),
  patternActionModal: document.querySelector("#patternActionModal"),
  closePatternActionModal: document.querySelector("#closePatternActionModal"),
  patternActionTitle: document.querySelector("#patternActionTitle"),
  pinPatternBtn: document.querySelector("#pinPatternBtn"),
  sharePatternBtn: document.querySelector("#sharePatternBtn"),
  deletePatternFromListBtn: document.querySelector("#deletePatternFromListBtn"),
  projectActionModal: document.querySelector("#projectActionModal"),
  closeProjectActionModal: document.querySelector("#closeProjectActionModal"),
  projectActionTitle: document.querySelector("#projectActionTitle"),
  pinProjectBtn: document.querySelector("#pinProjectBtn"),
  folderProjectBtn: document.querySelector("#folderProjectBtn"),
  removeProjectFolderBtn: document.querySelector("#removeProjectFolderBtn"),
  projectFolderModal: document.querySelector("#projectFolderModal"),
  closeProjectFolderModal: document.querySelector("#closeProjectFolderModal"),
  projectFolderOptions: document.querySelector("#projectFolderOptions"),
  newProjectFolderBtn: document.querySelector("#newProjectFolderBtn"),
  completeProjectFromListBtn: document.querySelector("#completeProjectFromListBtn"),
  deleteProjectFromListBtn: document.querySelector("#deleteProjectFromListBtn"),
  folderActionModal: document.querySelector("#folderActionModal"),
  closeFolderActionModal: document.querySelector("#closeFolderActionModal"),
  folderActionTitle: document.querySelector("#folderActionTitle"),
  pinFolderBtn: document.querySelector("#pinFolderBtn"),
  deleteFolderBtn: document.querySelector("#deleteFolderBtn"),
  stashActionModal: document.querySelector("#stashActionModal"),
  closeStashActionModal: document.querySelector("#closeStashActionModal"),
  stashActionTitle: document.querySelector("#stashActionTitle"),
  pinStashBtn: document.querySelector("#pinStashBtn"),
  shareStashBtn: document.querySelector("#shareStashBtn"),
  deleteStashFromListBtn: document.querySelector("#deleteStashFromListBtn"),
  partActionModal: document.querySelector("#partActionModal"),
  closePartActionModal: document.querySelector("#closePartActionModal"),
  partActionTitle: document.querySelector("#partActionTitle"),
  stockCreateModal: document.querySelector("#stockCreateModal"),
  closeStockCreateModal: document.querySelector("#closeStockCreateModal"),
  createSingleStockBtn: document.querySelector("#createSingleStockBtn"),
  openBulkStockBtn: document.querySelector("#openBulkStockBtn"),
  openColorCardStockBtn: document.querySelector("#openColorCardStockBtn"),
  bulkStockModal: document.querySelector("#bulkStockModal"),
  closeBulkStockModal: document.querySelector("#closeBulkStockModal"),
  bulkStockType: document.querySelector("#bulkStockType"),
  bulkStockBrand: document.querySelector("#bulkStockBrand"),
  bulkStockWeight: document.querySelector("#bulkStockWeight"),
  bulkStockUrl: document.querySelector("#bulkStockUrl"),
  bulkStockRows: document.querySelector("#bulkStockRows"),
  addBulkStockRowBtn: document.querySelector("#addBulkStockRowBtn"),
  saveBulkStockBtn: document.querySelector("#saveBulkStockBtn"),
  colorCardStockModal: document.querySelector("#colorCardStockModal"),
  closeColorCardStockModal: document.querySelector("#closeColorCardStockModal"),
  colorCardStockBrand: document.querySelector("#colorCardStockBrand"),
  colorCardStockUrl: document.querySelector("#colorCardStockUrl"),
  colorCardStockList: document.querySelector("#colorCardStockList"),
  addColorCardStockBtn: document.querySelector("#addColorCardStockBtn"),
  finishToast: document.querySelector("#finishToast"),
  finishToastText: document.querySelector("#finishToastText")
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return normalizeState(JSON.parse(saved));
    for (const key of OLD_KEYS) {
      const old = localStorage.getItem(key);
      if (old) return migrateOldState(JSON.parse(old));
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return structuredClone(defaultState);
}

function migrateOldState(oldState) {
  const next = structuredClone(defaultState);
  if (Array.isArray(oldState.patterns)) {
    next.patterns = oldState.patterns.map((pattern) => ({
      id: pattern.id || crypto.randomUUID(),
      name: pattern.name || "未命名織圖",
      source: pattern.source || "",
      images: pattern.images || [],
      yarnIds: Array.isArray(pattern.yarnIds) ? pattern.yarnIds : [],
      toolIds: Array.isArray(pattern.toolIds) ? pattern.toolIds : [],
      parts: [{ id: crypto.randomUUID(), name: "部分 1", notes: "", segments: textToSegments(pattern.text || "R1: sc x 6") }],
      groups: []
    }));
  }
  if (Array.isArray(oldState.yarns)) {
    next.yarns = oldState.yarns.map((yarn) => ({
      id: yarn.id || crypto.randomUUID(),
      colorName: yarn.colorName || yarn.name || "未命名顏色",
      brand: yarn.brand || DEFAULT_BRAND,
      lot: yarn.lot || "",
      amount: Number(yarn.amount || 0),
      weight: Number(yarn.weight || 0),
      url: yarn.url || "",
      notes: yarn.notes || ""
    }));
  }
  if (Array.isArray(oldState.projects)) {
    next.projects = oldState.projects.map((project) => {
      const patternId = project.patternId || next.patterns[0]?.id || "";
      return {
        id: project.id || crypto.randomUUID(),
        name: project.name || "未命名作品",
        type: project.type || "鉤針",
        status: project.status || "進行中",
        yarnIds: Array.isArray(project.yarnIds) ? project.yarnIds : [project.yarnId].filter(Boolean),
        needle: project.needle || "",
        notes: project.notes || "",
        image: project.image || "",
        patternIds: patternId ? [patternId] : [],
        activePatternId: patternId,
        progress: {
          [patternId]: {
            completedRounds: Number(project.counters?.completedRounds || 0),
            currentRound: Number(project.counters?.currentRound || 1),
            currentStitch: Number(project.counters?.currentStitch || 1),
            completed: false
          }
        }
      };
    });
  }
  return normalizeState(next);
}

function normalizeState(input) {
  const inputBrands = Array.isArray(input.brands) && input.brands.length ? input.brands : structuredClone(DEFAULT_BRANDS);
  const legacyBrandCategories = input.brandCategories || {};
  const inputBrandWeights = input.brandWeights || {};
  const mergedBrandName = (brand) => {
    if (!brand || brand === DEFAULT_BRAND) return DEFAULT_BRAND;
    if (brand === "萌娃娃" || brand === "蘇禾") return `${brand} 4股`;
    const category = legacyBrandCategories[brand];
    return category && category !== DEFAULT_CATEGORY ? fullBrandCategoryName(brand, category) : brand;
  };
  const brands = [...new Set([DEFAULT_BRAND, ...inputBrands.map(mergedBrandName).filter((brand) => brand && brand !== DEFAULT_BRAND)])];
  const brandWeights = { ...(defaultState.brandWeights || {}) };
  Object.entries(inputBrandWeights).forEach(([brand, weight]) => {
    brandWeights[mergedBrandName(brand)] = Number(weight || 0);
  });
  brands.forEach((brand) => {
    if (brand !== DEFAULT_BRAND && brandWeights[brand] === undefined) brandWeights[brand] = 0;
  });
  const next = {
    settings: { ...defaultState.settings, ...(input.settings || {}) },
    brands,
    brandWeights,
    brandCards: Array.isArray(input.brandCards) ? input.brandCards : structuredClone(defaultState.brandCards),
    projectTypes: Array.isArray(input.projectTypes) && input.projectTypes.length ? input.projectTypes : structuredClone(defaultState.projectTypes),
    projectFolders: Array.isArray(input.projectFolders) ? input.projectFolders : structuredClone(defaultState.projectFolders),
    commonGroups: Array.isArray(input.commonGroups) ? input.commonGroups : structuredClone(defaultState.commonGroups),
    tools: Array.isArray(input.tools) ? input.tools : structuredClone(defaultState.tools),
    stitches: Array.isArray(input.stitches) && input.stitches.length ? input.stitches : structuredClone(defaultStitches),
    patterns: Array.isArray(input.patterns) ? input.patterns : structuredClone(defaultState.patterns),
    projects: Array.isArray(input.projects) ? input.projects : structuredClone(defaultState.projects),
    yarns: Array.isArray(input.yarns) ? input.yarns : structuredClone(defaultState.yarns)
  };
  if (["symbol", "abbr"].includes(next.settings.displayMode)) {
    next.settings.displayMode = "letter";
  }

  next.patterns = next.patterns.map((pattern) => ({
    id: pattern.id || crypto.randomUUID(),
    name: pattern.name || "未命名織圖",
    createdAt: pattern.createdAt || new Date().toISOString(),
    updatedAt: pattern.updatedAt || pattern.createdAt || new Date().toISOString(),
    pinned: Boolean(pattern.pinned),
    isProjectCopy: Boolean(pattern.isProjectCopy),
    sourcePatternId: pattern.sourcePatternId || "",
    importKey: pattern.importKey || "",
    source: pattern.source || "",
    notes: pattern.notes || "",
    images: Array.isArray(pattern.images) ? pattern.images : [],
    yarnIds: Array.isArray(pattern.yarnIds) ? pattern.yarnIds : [],
    supplyIds: Array.isArray(pattern.supplyIds) ? pattern.supplyIds : [],
    supplyUsage: pattern.supplyUsage && typeof pattern.supplyUsage === "object" ? pattern.supplyUsage : {},
    toolIds: Array.isArray(pattern.toolIds) ? pattern.toolIds : [],
    parts: normalizePatternParts(pattern),
    groups: Array.isArray(pattern.groups) ? pattern.groups : []
  }));
  const seenPatternNames = new Set();
  next.patterns.forEach((pattern) => {
    if (pattern.isProjectCopy) return;
    const base = pattern.name.trim() || "未命名織圖";
    let name = base;
    let index = 2;
    while (seenPatternNames.has(name)) {
      name = `${base} ${index}`;
      index += 1;
    }
    pattern.name = name;
    seenPatternNames.add(name);
  });

  next.projects = next.projects.map((project) => {
    const patternIds = Array.isArray(project.patternIds) && project.patternIds.length
      ? project.patternIds
      : [project.activePatternId || project.patternId || next.patterns[0]?.id].filter(Boolean);
    const singlePatternIds = patternIds.slice(0, 1);
    const progress = project.progress || {};
    singlePatternIds.forEach((patternId) => {
      if (!progress[patternId]) {
        progress[patternId] = { completedRounds: 0, currentRound: 1, currentStitch: 1, completed: false };
      }
    });
    return {
      ...project,
      createdAt: project.createdAt || new Date().toISOString(),
      updatedAt: project.updatedAt || project.createdAt || new Date().toISOString(),
      image: project.image || "",
      images: Array.isArray(project.images) ? project.images : [project.image].filter(Boolean),
      folder: project.folder || "",
      pinned: Boolean(project.pinned),
      yarnIds: Array.isArray(project.yarnIds) ? project.yarnIds : [project.yarnId].filter(Boolean),
      supplyIds: Array.isArray(project.supplyIds) ? project.supplyIds : [],
      toolIds: Array.isArray(project.toolIds) ? project.toolIds : [],
      patternIds: singlePatternIds,
      activePatternId: project.activePatternId && singlePatternIds.includes(project.activePatternId) ? project.activePatternId : singlePatternIds[0] || "",
      progress
    };
  });
  next.projects.forEach((project) => {
    if (!project.image && project.images?.length) project.image = project.images[0];
    if (project.image && !project.images.includes(project.image)) project.images.unshift(project.image);
  });

  const templateById = new Map(next.patterns.filter((pattern) => !pattern.isProjectCopy).map((pattern) => [pattern.id, pattern]));
  next.projects.forEach((project) => {
    (project.patternIds || []).forEach((patternId) => {
      const projectPattern = next.patterns.find((pattern) => pattern.id === patternId);
      if (!projectPattern || projectPattern.isProjectCopy) return;
      const matchingTemplate = [...templateById.values()].find((pattern) => pattern.id !== projectPattern.id && stablePatternKey(pattern) === stablePatternKey(projectPattern));
      if (!matchingTemplate) return;
      projectPattern.isProjectCopy = true;
      projectPattern.sourcePatternId = matchingTemplate.id;
      projectPattern.pinned = false;
    });
  });

  next.stitches = next.stitches.map((stitch) => ({
    id: stitch.id || crypto.randomUUID(),
    zh: stitch.zh || "新針法",
    letter: stitch.letter || ""
  }));

  next.yarns = next.yarns.map((yarn) => {
    const stockType = yarn.stockType || "yarn";
    const brand = stockType === "yarn"
      ? mergedBrandName(yarn.category && yarn.category !== DEFAULT_CATEGORY && yarn.brand && !/\s/.test(yarn.brand) ? fullBrandCategoryName(yarn.brand, yarn.category) : (yarn.brand || DEFAULT_BRAND))
      : DEFAULT_BRAND;
    return {
      id: yarn.id || crypto.randomUUID(),
      stockType,
      pinned: Boolean(yarn.pinned),
      colorName: yarn.colorName || yarn.name || "未命名顏色",
      brand,
      category: "",
      lot: yarn.lot || "",
      amount: Number(yarn.amount || 0),
      unit: yarn.unit || (stockType === "supply" ? "個" : "顆"),
      weight: Number(yarn.weight || 0),
      url: yarn.url || "",
      image: yarn.image || "",
      images: Array.isArray(yarn.images) ? yarn.images : [yarn.image].filter(Boolean),
      supplyColors: Array.isArray(yarn.supplyColors) ? yarn.supplyColors : [],
      notes: yarn.notes || ""
    };
  });
  next.yarns.forEach((yarn) => {
    if (!yarn.image && yarn.images?.length) yarn.image = yarn.images[0];
    if (yarn.image && !yarn.images.includes(yarn.image)) yarn.images.unshift(yarn.image);
  });

  next.commonGroups = next.commonGroups.map((group) => ({
    id: group.id || crypto.randomUUID(),
    name: group.name || "常用群組",
    items: normalizeGroupItems(group, next.stitches[0]?.id || "sc")
  }));

  next.projectFolders = next.projectFolders.map((folder) => ({
    name: typeof folder === "string" ? folder : folder.name,
    pinned: Boolean(folder?.pinned)
  })).filter((folder) => folder.name);

  next.tools = next.tools.map((tool) => ({
    id: tool.id || crypto.randomUUID(),
    name: tool.name || "未命名工具",
    brand: tool.brand || "",
    url: tool.url || ""
  }));

  next.brandCards = next.brandCards.map((card) => ({
    brand: mergedBrandName(card.brand || ""),
    colors: Array.isArray(card.colors) ? card.colors.map((color) => ({
      id: color.id || crypto.randomUUID(),
      colorName: color.colorName || color.name || "",
      lot: color.lot || "",
      image: color.image || ""
    })).filter((color) => color.colorName || color.lot || color.image) : []
  })).filter((card) => card.brand);
  next.brands.forEach((brand) => {
    if (brand !== DEFAULT_BRAND && !next.brandCards.some((card) => card.brand === brand)) {
      next.brandCards.push({ brand, colors: [] });
    }
  });
  next.brandCards = next.brandCards.filter((card) => next.brands.includes(card.brand));

  return next;
}

function normalizePatternParts(pattern) {
  if (Array.isArray(pattern.parts) && pattern.parts.length) {
    return pattern.parts.map((part, index) => ({
      id: part.id || crypto.randomUUID(),
      name: part.name || `部分 ${index + 1}`,
      notes: part.notes || "",
      segments: Array.isArray(part.segments) ? part.segments.flatMap((segment) => {
        const normalized = normalizeSegment(segment);
        const repeat = Math.max(1, Number(normalized.repeat || 1));
        return Array.from({ length: repeat }, () => ({ ...structuredClone(normalized), id: crypto.randomUUID(), repeat: 1 }));
      }) : []
    }));
  }
  const segments = Array.isArray(pattern.segments) && pattern.segments.length
    ? pattern.segments
    : textToSegments(pattern.text || "R1: sc x 6");
  return [{ id: crypto.randomUUID(), name: "部分 1", notes: "", segments }];
}

function normalizeSegment(segment) {
  const from = Number(segment.from || 1);
  const to = Number(segment.to || from);
  return {
    id: segment.id || crypto.randomUUID(),
    repeat: Math.max(1, Number(segment.repeat || (to - from + 1) || 1)),
    note: segment.note || "",
    items: Array.isArray(segment.items) ? segment.items.map(normalizeSegmentItem) : []
  };
}

function normalizeSegmentItem(item) {
  if (item?.type === "group") {
    return {
      type: "group",
      groupName: item.groupName || item.name || "群組",
      count: Math.max(1, Number(item.count || 1)),
      items: normalizeGroupItems(item, "sc")
    };
  }
  return {
    stitchId: item?.stitchId || "sc",
    count: Math.max(1, Number(item?.count || 1))
  };
}

function normalizeGroupItems(group, fallbackId = "sc") {
  const rawItems = Array.isArray(group?.items) && group.items.length
    ? group.items
    : [{ stitchId: group?.stitchId || fallbackId }];
  return rawItems
    .map((item) => ({ stitchId: item?.stitchId || item || fallbackId }))
    .filter((item) => item.stitchId);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentProject() {
  return state.projects.find((project) => project.id === selectedProjectId) ?? state.projects[0];
}

function currentPattern() {
  const project = currentProject();
  return state.patterns.find((pattern) => pattern.id === project?.activePatternId) ?? state.patterns[0];
}

function editablePattern() {
  return state.patterns.find((pattern) => pattern.id === selectedPatternId) ?? state.patterns[0];
}

function currentProgress() {
  const project = currentProject();
  const pattern = currentPattern();
  if (!project || !pattern) return { completedRounds: 0, currentRound: 1, currentStitch: 1, completed: false };
  if (!project.progress[pattern.id]) project.progress[pattern.id] = { completedRounds: 0, currentRound: 1, currentStitch: 1, completed: false };
  return project.progress[pattern.id];
}

function textToSegments(text) {
  return text.split(/\r?\n/).map((line, index) => {
    const match = line.trim().match(/^(?:R|第)?\s*(\d+)(?:\s*[圈段])?(?::|：|\s+)\s*(.+)$/i);
    return {
      id: crypto.randomUUID(),
      repeat: 1,
      note: "",
      items: parseItems(match ? match[2] : line)
    };
  }).filter((segment) => segment.items.length);
}

function parseItems(text) {
  const tokens = [];
  text.replace(/[，、]/g, ",").split(",").forEach((part) => {
    const raw = part.trim();
    if (!raw) return;
    const match = raw.match(/^(.+?)\s*x\s*(\d+)$/i);
    const key = (match ? match[1] : raw).trim().toLowerCase();
    const stitch = findStitch(key);
    tokens.push({ stitchId: stitch?.id || "sc", count: match ? Number(match[2]) : 1 });
  });
  return tokens;
}

function splitPatternTokens(text) {
  const result = [];
  let current = "";
  let depth = 0;
  String(text).replace(/[，、]/g, ",").split("").forEach((char) => {
    if (char === "(" || char === "（") depth += 1;
    if (char === ")" || char === "）") depth = Math.max(0, depth - 1);
    if (char === "," && depth === 0) {
      if (current.trim()) result.push(current.trim());
      current = "";
      return;
    }
    current += char;
  });
  if (current.trim()) result.push(current.trim());
  return result;
}

function parseCountedToken(raw) {
  const token = raw.trim();
  const after = token.match(/^(.+?)\s*(?:x|X|×|\*)\s*(\d+)$/);
  if (after) return { value: after[1].trim(), count: Number(after[2]) };
  const spaced = token.match(/^(.+?)\s+(\d+)$/);
  if (spaced) return { value: spaced[1].trim(), count: Number(spaced[2]) };
  const before = token.match(/^(\d+)\s*(.+)$/);
  if (before) return { value: before[2].trim(), count: Number(before[1]) };
  return { value: token, count: 1 };
}

function parseImportedItems(text) {
  const items = [];
  const unresolved = [];
  splitPatternTokens(text).forEach((token) => {
    const { value, count } = parseCountedToken(token);
    const groupMatch = value.match(/^[\(（](.+)[\)）]$/);
    if (groupMatch) {
      const groupItems = [];
      splitPatternTokens(groupMatch[1]).forEach((innerToken) => {
        const parsed = parseCountedToken(innerToken);
        const stitch = findStitch(parsed.value);
        if (!stitch) {
          unresolved.push(innerToken);
          return;
        }
        for (let index = 0; index < parsed.count; index += 1) {
          groupItems.push({ stitchId: stitch.id });
        }
      });
      if (groupItems.length) items.push({ type: "group", groupName: value, count, items: groupItems });
      return;
    }
    const stitch = findStitch(value);
    if (!stitch) {
      unresolved.push(token);
      return;
    }
    items.push({ stitchId: stitch.id, count });
  });
  return { items, unresolved };
}

function parseTextPattern(text) {
  const parts = [];
  const unparsed = [];
  let currentPart = null;
  const ensurePart = (name = "文字匯入") => {
    if (!currentPart) {
      currentPart = { id: crypto.randomUUID(), name, notes: "", segments: [] };
      parts.push(currentPart);
    }
    return currentPart;
  };
  String(text).split(/\r?\n/).forEach((line, index) => {
    const raw = line.trim();
    if (!raw) return;
    const match = raw.match(/^(?:R|第)?\s*(\d+)(?:\s*[-~～－]\s*(\d+))?(?:\s*[圈段])?(?::|：|\s+)\s*(.+)$/i);
    if (!match) {
      if (/^[\u4e00-\u9fa5A-Za-z][\u4e00-\u9fa5A-Za-z0-9\s_-]*$/.test(raw)) {
        currentPart = { id: crypto.randomUUID(), name: raw, notes: "", segments: [] };
        parts.push(currentPart);
      } else {
        unparsed.push(`第 ${index + 1} 行：${raw}`);
      }
      return;
    }
    const start = Number(match[1]);
    const end = Math.max(start, Number(match[2] || start));
    const parsed = parseImportedItems(match[3]);
    if (!parsed.items.length) {
      unparsed.push(`第 ${index + 1} 行：${raw}`);
      return;
    }
    parsed.unresolved.forEach((item) => unparsed.push(`第 ${index + 1} 行無法辨識：${item}`));
    const part = ensurePart();
    for (let round = start; round <= end; round += 1) {
      part.segments.push({ id: crypto.randomUUID(), repeat: 1, note: "", items: structuredClone(parsed.items) });
    }
  });
  const validParts = parts.filter((part) => part.segments.length);
  parts.filter((part) => !part.segments.length).forEach((part) => unparsed.push(`部分「${part.name}」沒有可辨識段落`));
  return { parts: validParts, segments: validParts.flatMap((part) => part.segments), unparsed };
}

function findStitch(value) {
  const normalized = String(value).toLowerCase();
  return state.stitches.find((stitch) => [stitch.id, stitch.zh, stitch.letter].some((item) => String(item).toLowerCase() === normalized));
}

function expandedRows(pattern) {
  const rows = [];
  pattern.parts.forEach((part) => {
    let partRound = 1;
    part.segments.forEach((segment) => {
      const repeat = Math.max(1, Number(segment.repeat || 1));
      for (let index = 0; index < repeat; index += 1) {
        rows.push({ ...segment, partId: part.id, partName: part.name, round: partRound, label: formatRound(partRound) });
        partRound += 1;
      }
    });
  });
  return rows.length ? rows : [{ id: "empty", round: 1, label: formatRound(1), note: "尚無針法", items: [] }];
}

function segmentLabel(segment) {
  const repeat = Math.max(1, Number(segment.repeat || 1));
  if (repeat === 1) return formatRound(1);
  return state.settings.roundLabelMode === "r" ? `R1-${repeat}` : `第 1-${repeat} 圈`;
}

function segmentSignature(segment) {
  return JSON.stringify({
    note: segment.note || "",
    items: (segment.items || []).map((item) => item.type === "group"
      ? ["group", Number(item.count || 1), ...normalizeGroupItems(item).map((groupItem) => groupItem.stitchId)]
      : ["stitch", item.stitchId, Number(item.count || 1)])
  });
}

function segmentRoundLabel(start, end = start) {
  if (start === end) return formatRound(start);
  return state.settings.roundLabelMode === "r" ? `R${start}-${end}` : `第 ${start}-${end} 圈`;
}

function segmentStitchCount(segment) {
  return (segment.items || []).reduce((sum, item) => sum + (item.type === "group" ? normalizeGroupItems(item).length * Number(item.count || 1) : Number(item.count || 0)), 0);
}

function compactSegments(segments) {
  const groups = [];
  segments.forEach((segment, index) => {
    const signature = segmentSignature(segment);
    const previous = groups[groups.length - 1];
    if (segment.items?.length && previous && previous.signature === signature) {
      previous.end = index + 1;
      previous.segments.push(segment);
    } else {
      groups.push({ signature, start: index + 1, end: index + 1, segments: [segment], segment });
    }
  });
  return groups;
}

function formatRound(round) {
  return state.settings.roundLabelMode === "r" ? `R${round}` : `第 ${round} 圈`;
}

function formatRoundRange(total) {
  const count = Math.max(1, Number(total || 1));
  if (count === 1) return formatRound(1);
  return state.settings.roundLabelMode === "r" ? `R1-${count}` : `第 1-${count} 圈`;
}

function displayStitch(stitchId) {
  const stitch = state.stitches.find((item) => item.id === stitchId) || state.stitches[0];
  const mode = state.settings.displayMode === "zh" ? "zh" : "letter";
  return stitch[mode] || stitch.zh;
}

function groupDisplay(group) {
  return `(${normalizeGroupItems(group, state.stitches[0]?.id || "sc").map((item) => displayStitch(item.stitchId)).join(", ")})`;
}

function compactItemDisplay(item) {
  const count = Math.max(1, Number(item.count || 1));
  if (item.type === "group") {
    const groupText = groupDisplay(item);
    return count > 1 ? `${count}${groupText}` : groupText;
  }
  const stitchText = displayStitch(item.stitchId);
  return count > 1 ? `${count}${stitchText}` : stitchText;
}

function stockLabel(item) {
  return item.brand && item.brand !== DEFAULT_BRAND ? `${item.brand} · ${item.colorName}` : item.colorName;
}

function stockUsageCount(stockId) {
  const patternUses = state.patterns.filter((pattern) => (pattern.yarnIds || []).includes(stockId) || (pattern.supplyIds || []).includes(stockId)).length;
  const projectUses = state.projects.filter((project) => (project.yarnIds || []).includes(stockId) || (project.supplyIds || []).includes(stockId)).length;
  return patternUses + projectUses;
}

function rowStitches(row) {
  const list = [];
  row.items.forEach((item) => {
    if (item.type === "group") {
      for (let repeat = 0; repeat < Number(item.count || 1); repeat += 1) {
        normalizeGroupItems(item, state.stitches[0]?.id || "sc").forEach((groupItem) => list.push(groupItem.stitchId));
      }
      return;
    }
    for (let index = 0; index < Number(item.count || 1); index += 1) {
      list.push(item.stitchId);
    }
  });
  return list.length ? list : ["sc"];
}

function patternProgress(project, pattern) {
  const rows = expandedRows(pattern);
  const progress = project.progress[pattern.id] || { completedRounds: 0 };
  const done = Math.min(rows.length, Number(progress.completedRounds || 0));
  return {
    done,
    total: rows.length,
    percent: Math.round((done / Math.max(1, rows.length)) * 100)
  };
}

function partProgressList(project, pattern) {
  const rows = expandedRows(pattern);
  const progress = project.progress[pattern.id] || { completedRounds: 0 };
  const completed = Math.min(rows.length, Number(progress.completedRounds || 0));
  return pattern.parts.map((part) => {
    const partRows = rows.map((row, index) => ({ row, index })).filter(({ row }) => row.partId === part.id);
    const done = partRows.filter(({ index }) => index < completed).length;
    const total = partRows.length;
    return { part, done, total, percent: Math.round((done / Math.max(1, total)) * 100) };
  });
}

function projectProgress(project) {
  const pattern = state.patterns.find((item) => item.id === project.activePatternId);
  if (!pattern) return { done: 0, total: 0, percent: 0 };
  return patternProgress(project, pattern);
}

function projectPatternName(project) {
  return state.patterns.find((pattern) => pattern.id === project.activePatternId)?.name || "";
}

function normalizeProjectSortMode(mode) {
  return ({
    pinned: "pinned-desc",
    type: "type-asc",
    updated: "updated-desc",
    name: "name-asc",
    pattern: "pattern-asc"
  })[mode] || mode || "pinned-desc";
}

function normalizePatternSortMode(mode) {
  return ({
    pinned: "pinned-desc",
    updated: "updated-desc",
    name: "name-asc"
  })[mode] || mode || "pinned-desc";
}

function compareText(a, b, direction = "asc") {
  const result = String(a || "").localeCompare(String(b || ""), "zh-Hant");
  return direction === "desc" ? -result : result;
}

function compareDate(a, b, direction = "desc") {
  const result = new Date(a || 0) - new Date(b || 0);
  return direction === "desc" ? -result : result;
}

function sortedProjects() {
  const mode = normalizeProjectSortMode(state.settings.projectSort);
  return state.projects.slice().sort((a, b) => {
    if (mode === "pinned-desc") return Number(b.pinned) - Number(a.pinned) || compareDate(a.updatedAt, b.updatedAt) || compareText(a.name, b.name);
    if (mode === "pinned-asc") return Number(a.pinned) - Number(b.pinned) || compareDate(a.updatedAt, b.updatedAt) || compareText(a.name, b.name);
    if (mode === "progress-desc") return projectProgress(b).percent - projectProgress(a).percent || compareText(a.name, b.name);
    if (mode === "progress-asc") return projectProgress(a).percent - projectProgress(b).percent || compareText(a.name, b.name);
    if (mode === "type-asc") return compareText(a.type, b.type) || compareText(a.name, b.name);
    if (mode === "type-desc") return compareText(a.type, b.type, "desc") || compareText(a.name, b.name);
    if (mode === "updated-desc") return compareDate(a.updatedAt, b.updatedAt) || compareText(a.name, b.name);
    if (mode === "updated-asc") return compareDate(a.updatedAt, b.updatedAt, "asc") || compareText(a.name, b.name);
    if (mode === "name-desc") return compareText(a.name, b.name, "desc");
    if (mode === "pattern-asc") return compareText(projectPatternName(a), projectPatternName(b)) || compareText(a.name, b.name);
    if (mode === "pattern-desc") return compareText(projectPatternName(a), projectPatternName(b), "desc") || compareText(a.name, b.name);
    return compareText(a.name, b.name);
  });
}

function sortedTemplatePatterns() {
  const mode = normalizePatternSortMode(state.settings.patternSort);
  return templatePatterns().slice().sort((a, b) => {
    if (mode === "pinned-desc") return Number(b.pinned) - Number(a.pinned) || compareDate(a.updatedAt, b.updatedAt) || compareText(a.name, b.name);
    if (mode === "pinned-asc") return Number(a.pinned) - Number(b.pinned) || compareDate(a.updatedAt, b.updatedAt) || compareText(a.name, b.name);
    if (mode === "updated-desc") return compareDate(a.updatedAt, b.updatedAt) || compareText(a.name, b.name);
    if (mode === "updated-asc") return compareDate(a.updatedAt, b.updatedAt, "asc") || compareText(a.name, b.name);
    if (mode === "name-desc") return compareText(a.name, b.name, "desc");
    if (mode === "rounds-desc") return expandedRows(b).length - expandedRows(a).length || compareText(a.name, b.name);
    if (mode === "rounds-asc") return expandedRows(a).length - expandedRows(b).length || compareText(a.name, b.name);
    return compareText(a.name, b.name);
  });
}

function templatePatterns() {
  return state.patterns.filter((pattern) => !pattern.isProjectCopy);
}

function selectedProjectsForAction() {
  const ids = selectedProjectIds.size ? selectedProjectIds : new Set([actionProjectId].filter(Boolean));
  return state.projects.filter((project) => ids.has(project.id));
}

function selectedPatternsForAction() {
  const ids = selectedPatternIds.size ? selectedPatternIds : new Set([actionPatternId].filter(Boolean));
  return templatePatterns().filter((pattern) => ids.has(pattern.id));
}

function updateProjectActionSheet() {
  const selected = selectedProjectsForAction();
  els.projectActionTitle.textContent = selected.length ? `已選 ${selected.length} 個作品 · 可繼續點選` : "作品選項";
  els.pinProjectBtn.textContent = selected.length && selected.every((project) => project.pinned) ? "取消置頂" : "置頂";
  els.removeProjectFolderBtn.classList.toggle("hidden", !activeProjectFolder);
}

function projectFolders() {
  return Array.from(new Set(state.projects.map((project) => projectFolderName(project)).filter(Boolean))).sort((a, b) => compareText(a, b));
}

function projectFolderName(project) {
  return (project.folder || "").trim();
}

function folderMeta(name) {
  let meta = state.projectFolders.find((folder) => folder.name === name);
  if (!meta) {
    meta = { name, pinned: false };
    state.projectFolders.push(meta);
  }
  return meta;
}

function projectFolderRecords() {
  return projectFolders().map((name) => {
    const projects = state.projects.filter((project) => projectFolderName(project) === name);
    return { name, projects, pinned: folderMeta(name).pinned };
  }).sort((a, b) => Number(b.pinned) - Number(a.pinned) || compareText(a.name, b.name));
}

function applyFolderToSelectedProjects(folder) {
  const projects = selectedProjectsForAction();
  if (!projects.length) return;
  projects.forEach((project) => {
    project.folder = folder.trim();
    project.updatedAt = new Date().toISOString();
  });
  selectedProjectIds.clear();
  els.projectActionModal.classList.add("hidden");
  els.projectFolderModal.classList.add("hidden");
  render();
}

function openProjectFolderPicker() {
  const folders = projectFolders();
  els.projectFolderOptions.innerHTML = folders.length
    ? folders.map((folder) => `<button class="folder-option" data-folder-option="${escapeHtml(folder)}">${escapeHtml(folder)}</button>`).join("")
    : `<p class="empty-note">目前沒有資料夾。</p>`;
  els.projectFolderModal.classList.remove("hidden");
}

function updatePatternActionSheet() {
  const selected = selectedPatternsForAction();
  els.patternActionTitle.textContent = selected.length ? `已選 ${selected.length} 個織圖 · 可繼續點選` : "織圖選項";
  els.pinPatternBtn.textContent = selected.length && selected.every((pattern) => pattern.pinned) ? "取消置頂" : "置頂";
}

function selectedYarnsForAction() {
  const ids = selectedYarnIds.size ? selectedYarnIds : new Set([actionYarnId].filter(Boolean));
  return state.yarns.filter((yarn) => ids.has(yarn.id));
}

function nextStockName(type) {
  const count = state.yarns.filter((item) => (item.stockType || "yarn") === type).length + 1;
  return type === "supply" ? `新消耗品 ${count}` : `新顏色 ${count}`;
}

function updateStashActionSheet() {
  const selected = selectedYarnsForAction();
  els.stashActionTitle.textContent = selected.length ? `已選 ${selected.length} 個庫存 · 可繼續點選` : "庫存選項";
  els.pinStashBtn.textContent = selected.length && selected.every((yarn) => yarn.pinned) ? "取消置頂" : "置頂";
}

function uniquePatternName(baseName, currentId = "") {
  const existing = new Set(templatePatterns().filter((pattern) => pattern.id !== currentId).map((pattern) => pattern.name.trim()));
  let name = baseName.trim() || "未命名織圖";
  if (!existing.has(name)) return name;
  let index = 2;
  while (existing.has(`${name} ${index}`)) index += 1;
  return `${name} ${index}`;
}

function hasSameName(name, list, getName = (item) => item, currentId = "") {
  const normalized = String(name || "").trim().toLowerCase();
  if (!normalized) return false;
  return list.some((item) => {
    if (currentId && item?.id === currentId) return false;
    return String(getName(item) || "").trim().toLowerCase() === normalized;
  });
}

function warnDuplicateName(name, list, label, getName = (item) => item, currentId = "") {
  if (!hasSameName(name, list, getName, currentId)) return false;
  alert(`已經有相同名稱的${label}：「${name}」。請換一個名稱。`);
  return true;
}

function cleanPatternForShare(pattern) {
  const copy = structuredClone(pattern);
  copy.id = crypto.randomUUID();
  delete copy.pinned;
  delete copy.isProjectCopy;
  delete copy.sourcePatternId;
  delete copy.importKey;
  return copy;
}

function patternSharePackage(pattern) {
  return {
    type: "gogo-pattern",
    version: PATTERN_SHARE_VERSION,
    exportedAt: new Date().toISOString(),
    pattern: cleanPatternForShare(pattern)
  };
}

function patternBundlePackage(patterns) {
  return {
    type: "gogo-patterns",
    version: PATTERN_SHARE_VERSION,
    exportedAt: new Date().toISOString(),
    patterns: patterns.map(cleanPatternForShare)
  };
}

function encodeSharePayload(payload) {
  return encodeURIComponent(JSON.stringify(payload));
}

function decodeSharePayload(value) {
  return JSON.parse(decodeURIComponent(value));
}

function stablePatternKey(pattern) {
  const scrub = (value) => {
    if (Array.isArray(value)) return value.map(scrub);
    if (!value || typeof value !== "object") return value;
    return Object.keys(value).sort().reduce((result, key) => {
      if (["id", "createdAt", "updatedAt", "pinned", "isProjectCopy", "sourcePatternId", "importKey"].includes(key)) return result;
      result[key] = scrub(value[key]);
      return result;
    }, {});
  };
  return JSON.stringify(scrub(pattern));
}

function importPatternPackage(payload) {
  const pattern = payload?.type === "gogo-pattern" ? payload.pattern : payload?.pattern || payload;
  if (!pattern || typeof pattern !== "object") throw new Error("不是可匯入的織圖檔");
  const importKey = stablePatternKey(pattern);
  const existing = templatePatterns().find((item) => item.importKey === importKey);
  if (existing) {
    selectedPatternId = existing.id;
    return existing;
  }
  const normalized = normalizeState({ ...state, patterns: [pattern] }).patterns[0];
  normalized.id = crypto.randomUUID();
  normalized.name = uniquePatternName(normalized.name);
  normalized.pinned = false;
  normalized.importKey = importKey;
  delete normalized.isProjectCopy;
  delete normalized.sourcePatternId;
  state.patterns.unshift(normalized);
  selectedPatternId = normalized.id;
  saveState();
  return normalized;
}

function importPatternPayload(payload) {
  if (payload?.type === "gogo-patterns" || Array.isArray(payload?.patterns)) {
    const patterns = payload.patterns || [];
    if (!patterns.length) throw new Error("沒有可匯入的織圖");
    return patterns.map((pattern) => importPatternPackage({ type: "gogo-pattern", pattern }));
  }
  return [importPatternPackage(payload)];
}

function downloadPatternBundle(patterns) {
  const payload = patternBundlePackage(patterns);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${patterns.length}個織圖.gogopatterns`;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadPattern(pattern) {
  const payload = patternSharePackage(pattern);
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${pattern.name || "織圖"}.gogopattern`;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadFullBackup() {
  const payload = {
    type: "gogo-full-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `gogo-backup-${new Date().toISOString().slice(0, 10)}.gogobackup`;
  link.click();
  URL.revokeObjectURL(url);
}

function restoreFullBackup(payload) {
  if (payload?.type !== "gogo-full-backup" || !payload.state) {
    throw new Error("這不是完整備份檔");
  }
  state = normalizeState(payload.state);
  selectedProjectId = state.projects[0]?.id || null;
  selectedPatternId = state.patterns[0]?.id || null;
  selectedYarnId = state.yarns[0]?.id || null;
  selectedPartId = state.patterns[0]?.parts?.[0]?.id || null;
  selectedProjectIds.clear();
  selectedPatternIds.clear();
  selectedYarnIds.clear();
  switchView("projects");
}

async function sharePattern(pattern) {
  const payload = patternSharePackage(pattern);
  const shareUrl = `${location.origin}${location.pathname}#pattern=${encodeSharePayload(payload)}`;
  const text = `匯入「${pattern.name}」織圖：${shareUrl}`;
  const canUseLink = shareUrl.length < 1800;
  if (canUseLink && navigator.share) {
    try {
      await navigator.share({ title: pattern.name, text, url: shareUrl });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  downloadPattern(pattern);
  if (!canUseLink) {
    alert("這張織圖含圖片或內容較多，已改用檔案分享，避免連結太長造成頁面錯誤。");
    return;
  }
  try {
    await navigator.clipboard?.writeText(shareUrl);
    alert("已下載織圖檔，分享連結也已複製。");
  } catch {
    prompt("已下載織圖檔，也可以複製這個分享連結：", shareUrl);
  }
}

function stashSharePackage(items) {
  return {
    type: "gogo-stash",
    version: 1,
    exportedAt: new Date().toISOString(),
    items: items.map((item) => ({ ...structuredClone(item), pinned: false }))
  };
}

function importStashPackage(payload) {
  const items = payload?.type === "gogo-stash" ? payload.items : payload?.items || [];
  if (!Array.isArray(items) || !items.length) throw new Error("不是可匯入的庫存連結");
  const normalized = normalizeState({ ...state, yarns: items }).yarns.map((item) => ({
    ...item,
    id: crypto.randomUUID(),
    pinned: false
  }));
  state.yarns.unshift(...normalized);
  selectedYarnId = normalized[0]?.id || selectedYarnId;
  saveState();
  return normalized;
}

async function shareStashItems(items) {
  const payload = stashSharePackage(items);
  const shareUrl = `${location.origin}${location.pathname}#stash=${encodeSharePayload(payload)}`;
  const title = items.length === 1 ? `匯入「${items[0].colorName}」庫存` : `匯入 ${items.length} 個庫存項目`;
  if (shareUrl.length > 6000) {
    alert("選取的庫存資料太多或含圖片，連結會太長。請少選幾個，或先移除圖片後再分享。");
    return;
  }
  if (navigator.share) {
    try {
      await navigator.share({ title, text: title, url: shareUrl });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard?.writeText(shareUrl);
    alert("分享連結已複製。");
  } catch {
    prompt("複製這個庫存分享連結：", shareUrl);
  }
}

function checkSharedPatternFromUrl() {
  const match = location.hash.match(/^#pattern=(.+)$/);
  if (!match) return;
  try {
    const payload = decodeSharePayload(match[1]);
    const name = payload?.pattern?.name || "分享織圖";
    if (confirm(`要匯入「${name}」到自己的織圖嗎？`)) {
      const pattern = importPatternPayload(payload)[0];
      selectedPatternId = pattern.id;
      switchView("patternEdit");
      alert("已匯入織圖。");
    }
  } catch {
    alert("這個分享連結無法匯入。");
  } finally {
    history.replaceState(null, "", location.pathname + location.search);
  }
}

function checkSharedStashFromUrl() {
  const match = location.hash.match(/^#stash=(.+)$/);
  if (!match) return;
  try {
    const payload = decodeSharePayload(match[1]);
    const count = payload?.items?.length || 0;
    if (confirm(`要匯入 ${count} 個庫存項目到自己的庫存嗎？`)) {
      const imported = importStashPackage(payload);
      activeStockType = imported[0]?.stockType || "yarn";
      switchView("stash");
      alert("已匯入庫存。");
    }
  } catch {
    alert("這個庫存分享連結無法匯入。");
  } finally {
    history.replaceState(null, "", location.pathname + location.search);
  }
}

function attachPatternCopy(project, templateId) {
  const template = state.patterns.find((pattern) => pattern.id === templateId) || templatePatterns()[0];
  if (!template) return "";
  if (project.activePatternId) {
    state.patterns = state.patterns.filter((pattern) => pattern.id !== project.activePatternId || !pattern.isProjectCopy);
  }
  const copy = structuredClone(template);
  copy.id = crypto.randomUUID();
  copy.sourcePatternId = template.id;
  copy.isProjectCopy = true;
  state.patterns.push(copy);
  project.patternIds = [copy.id];
  project.activePatternId = copy.id;
  project.yarnIds = Array.from(new Set([...(project.yarnIds || []), ...(copy.yarnIds || [])]));
  project.supplyIds = Array.from(new Set([...(project.supplyIds || []), ...(copy.supplyIds || [])]));
  project.toolIds = Array.from(new Set([...(project.toolIds || []), ...(copy.toolIds || [])]));
  project.progress = { [copy.id]: { completedRounds: 0, currentRound: 1, currentStitch: 1, completed: false } };
  return copy.id;
}

function render() {
  renderChrome();
  renderProjects();
  renderDetail();
  renderTracking();
  renderPatterns();
  renderPatternEditor();
  renderPartEditor();
  renderStash();
  renderYarnForm();
  renderSettings();
  saveState();
}

function renderChrome() {
  document.body.dataset.theme = state.settings.themeColor || "rose";
  const needsBack = ["detail", "track", "patternEdit", "partEdit", "yarnEdit"].includes(activeView);
  els.appHeader.classList.toggle("hidden", !needsBack);
  els.backBtn.classList.toggle("hidden", !needsBack);
  els.navTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === activeView));
  els.views.forEach((view) => view.classList.toggle("active", view.id === `${activeView}View`));
}

function renderProjects() {
  els.projectList.innerHTML = "";
  els.projectSort.value = normalizeProjectSortMode(state.settings.projectSort);
  if (!state.projects.length) {
    els.projectList.innerHTML = `<p class="empty-note">尚無作品，按右上角「新增」建立第一個作品。</p>`;
    return;
  }
  if (!activeProjectFolder) {
    renderProjectFolders();
    const looseProjects = sortedProjects().filter((project) => !projectFolderName(project));
    looseProjects.forEach((project) => renderProjectCard(project));
    return;
  }
  const folderProjects = sortedProjects().filter((project) => projectFolderName(project) === activeProjectFolder);
  const back = document.createElement("button");
  back.className = "folder-back-button";
  back.textContent = `← ${activeProjectFolder}`;
  back.addEventListener("click", () => {
    activeProjectFolder = null;
    selectedProjectIds.clear();
    renderProjects();
  });
  els.projectList.append(back);
  if (!folderProjects.length) {
    els.projectList.insertAdjacentHTML("beforeend", `<p class="empty-note">這個資料夾目前沒有作品。</p>`);
    return;
  }
  folderProjects.forEach((project) => renderProjectCard(project));
}

function renderProjectCard(project) {
  const progress = projectProgress(project);
  const card = document.createElement("button");
  card.className = `project-card ${project.pinned ? "pinned-card" : ""} ${selectedProjectIds.has(project.id) ? "selected-card" : ""}`;
  card.innerHTML = `
    ${project.image ? `<img src="${project.image}" alt="">` : `<span class="empty-thumb">圖片</span>`}
    <span>
      <span class="card-title-row"><strong>${escapeHtml(project.name)}</strong><strong>${progress.percent}%</strong></span>
      <span class="progress-bar"><span style="width:${progress.percent}%"></span></span>
      <span class="meta-row"><span class="pill">${escapeHtml(project.type)}</span>${project.folder ? `<span>${escapeHtml(project.folder)}</span>` : ""}<span>${escapeHtml(formatRound(progress.done))} / ${escapeHtml(formatRound(progress.total))}</span></span>
    </span>
  `;
  let timer = null;
  let longPressed = false;
  card.addEventListener("pointerdown", () => {
    longPressed = false;
    timer = window.setTimeout(() => {
      longPressed = true;
      selectedProjectIds.add(project.id);
      actionProjectId = project.id;
      updateProjectActionSheet();
      els.projectActionModal.classList.remove("hidden");
      renderProjects();
    }, 550);
  });
  card.addEventListener("pointerup", () => window.clearTimeout(timer));
  card.addEventListener("pointerleave", () => window.clearTimeout(timer));
  card.addEventListener("click", () => {
    if (longPressed) return;
    if (selectedProjectIds.size) {
      if (selectedProjectIds.has(project.id)) {
        selectedProjectIds.delete(project.id);
      } else {
        selectedProjectIds.add(project.id);
      }
      if (selectedProjectIds.size) {
        updateProjectActionSheet();
        els.projectActionModal.classList.remove("hidden");
      } else {
        els.projectActionModal.classList.add("hidden");
      }
      renderProjects();
      return;
    }
    selectedProjectId = project.id;
    switchView("detail");
  });
  els.projectList.append(card);
}

function renderProjectFolders() {
  projectFolderRecords().forEach((folder) => {
    const card = document.createElement("button");
    const images = folder.projects.map((project) => project.image).filter(Boolean).slice(0, 4);
    card.className = `project-card folder-card ${folder.pinned ? "pinned-card" : ""}`;
    card.innerHTML = `
      <span class="folder-collage ${images.length ? "" : "empty-thumb"}">
        ${images.length ? images.map((src) => `<img src="${src}" alt="">`).join("") : "資料夾"}
      </span>
      <span>
        <span class="card-title-row"><strong>${escapeHtml(folder.name)}</strong>${folder.pinned ? "<strong>置頂</strong>" : ""}</span>
        <span class="meta-row"><span>${folder.projects.length} 個作品</span></span>
      </span>
    `;
    let timer = null;
    let longPressed = false;
    card.addEventListener("pointerdown", () => {
      longPressed = false;
      timer = window.setTimeout(() => {
        longPressed = true;
        actionFolderName = folder.name;
        const meta = folderMeta(folder.name);
        els.folderActionTitle.textContent = folder.name;
        els.pinFolderBtn.textContent = meta.pinned ? "取消置頂" : "置頂";
        els.folderActionModal.classList.remove("hidden");
      }, 550);
    });
    card.addEventListener("pointerup", () => window.clearTimeout(timer));
    card.addEventListener("pointerleave", () => window.clearTimeout(timer));
    card.addEventListener("click", () => {
      if (longPressed) return;
      activeProjectFolder = folder.name;
      selectedProjectIds.clear();
      renderProjects();
    });
    els.projectList.append(card);
  });
}

function renderDetail() {
  const project = currentProject();
  if (!project) return;
  const settingsPanel = document.querySelector("#projectForm")?.closest(".settings-card");
  const patternHeader = els.attachedPatternList?.previousElementSibling;
  if (settingsPanel && patternHeader && settingsPanel.nextElementSibling !== patternHeader) {
    patternHeader.before(settingsPanel);
  }
  if (settingsPanel) {
    settingsPanel.open = true;
    settingsPanel.querySelector("summary")?.classList.add("hidden");
  }
  const progress = projectProgress(project);
  els.detailType.textContent = "作品";
  els.detailName.textContent = project.name;
  els.detailPercent.textContent = `${progress.percent}%`;
  els.detailProgressFill.style.width = `${progress.percent}%`;
  els.detailProgressText.textContent = `進度：${formatRound(progress.done)} / ${formatRound(progress.total)}`;
  els.detailType.classList.add("hidden");
  els.projectPhotoPicker.classList.toggle("has-photo", Boolean(project.image));
  els.projectPhoto.src = project.image || "";
  els.projectImages.innerHTML = (project.images || []).map((src, index) => `<button class="image-thumb ${src === project.image ? "cover-thumb" : ""}" data-project-image="${index}" type="button"><img src="${src}" alt="作品圖片 ${index + 1}"><span>×</span></button>`).join("");

  els.projectName.value = project.name;
  els.projectType.value = project.type;
  els.projectFolder.value = project.folder || "";
  els.projectNotes.value = project.notes;
  els.projectType.innerHTML = state.projectTypes.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join("");
  if (!state.projectTypes.includes(project.type)) {
    project.type = state.projectTypes[0] || "作品";
  }
  els.projectType.value = project.type;
  els.projectPatternSelect.innerHTML = templatePatterns().map((pattern) => `<option value="${pattern.id}">${escapeHtml(pattern.name)}</option>`).join("");
  const activePattern = state.patterns.find((pattern) => pattern.id === project.activePatternId);
  els.projectPatternSelect.value = activePattern?.sourcePatternId || activePattern?.id || "";
  renderMultiSelect(els.projectYarns, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "yarn").map((yarn) => ({ value: yarn.id, label: stockLabel(yarn) })), project.yarnIds || [], (values) => { project.yarnIds = values; project.updatedAt = new Date().toISOString(); saveState(); }, "搜尋線材");
  renderMultiSelect(els.projectSupplies, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "supply").map((supply) => ({ value: supply.id, label: stockLabel(supply) })), project.supplyIds || [], (values) => { project.supplyIds = values; project.updatedAt = new Date().toISOString(); saveState(); }, "搜尋消耗品");
  renderMultiSelect(els.projectTools, state.tools.map((tool) => ({ value: tool.id, label: tool.brand ? `${tool.brand} · ${tool.name}` : tool.name })), project.toolIds || [], (values) => { project.toolIds = values; project.updatedAt = new Date().toISOString(); saveState(); }, "搜尋工具");

  els.attachedPatternList.innerHTML = "";
  const pattern = state.patterns.find((item) => item.id === project.activePatternId);
  if (!pattern) return;
  const itemProgress = patternProgress(project, pattern);
  const patternToolNames = (pattern.toolIds || []).map((id) => state.tools.find((tool) => tool.id === id)?.name).filter(Boolean);
  const projectSupplyNames = (project.supplyIds || []).map((id) => state.yarns.find((item) => item.id === id)?.colorName).filter(Boolean);
  const partProgress = partProgressList(project, pattern);
  const card = document.createElement("article");
  card.className = "attached-card";
  card.innerHTML = `
    <div class="card-title-row">
      <strong>${escapeHtml(pattern.name)}</strong>
    </div>
    ${pattern.notes ? `<p>${escapeHtml(pattern.notes)}</p>` : ""}
    <p>${patternToolNames.length ? escapeHtml(patternToolNames.join("、")) : "未指定工具"}${projectSupplyNames.length ? ` · ${escapeHtml(projectSupplyNames.join("、"))}` : ""}</p>
    <p>進度：第 ${itemProgress.done} / ${itemProgress.total} 段 (${itemProgress.percent}%)</p>
    <div class="part-link-list">
      ${partProgress.map(({ part, done, total, percent }) => `<button class="part-link" data-track-part="${part.id}">${escapeHtml(part.name)}<span>${done}/${total} 段 · ${percent}%</span></button>`).join("")}
    </div>
  `;
  els.attachedPatternList.append(card);
}

function renderTracking() {
  const pattern = currentPattern();
  const progress = currentProgress();
  const project = currentProject();
  if (!pattern) return;
  const rows = expandedRows(pattern);
  progress.completedRounds = Math.min(rows.length, Math.max(0, Number(progress.completedRounds || 0)));
  progress.currentRound = clamp(progress.currentRound, 1, rows.length);
  if (progress.completedRounds < rows.length && progress.currentRound <= progress.completedRounds) {
    progress.currentRound = progress.completedRounds + 1;
  }
  const row = rows[progress.currentRound - 1];
  const stitches = rowStitches(row);
  progress.currentStitch = clamp(progress.currentStitch, 1, stitches.length);

  els.roundTitle.textContent = `${row.partName || "部分"} · ${formatRound(row.round)}`;
  els.roundMeta.textContent = `${progress.completedRounds}/${rows.length} 段`;
  els.currentStitch.textContent = progress.currentStitch;
  els.totalStitches.textContent = stitches.length;

  els.legendList.innerHTML = state.stitches.map((stitch) => `<div><strong>${escapeHtml(stitch.zh)}</strong><span>${escapeHtml(displayStitch(stitch.id))}</span></div>`).join("");
  if (els.partProgressList && project) {
    els.partProgressList.innerHTML = partProgressList(project, pattern).map(({ part, percent, done, total }) => `
      <div class="part-progress-chip">
        <span>${escapeHtml(part.name)}</span>
        <strong>${percent}%</strong>
        <small>${done}/${total}</small>
      </div>
    `).join("");
  }
  els.writtenPattern.innerHTML = "";
  const currentIndex = progress.currentRound - 1;
  const visibleRows = rows
    .map((patternRow, rowIndex) => ({ patternRow, rowIndex }))
    .filter(({ rowIndex }) => rowIndex >= currentIndex - 1 && rowIndex <= currentIndex + 1);
  visibleRows.forEach(({ patternRow, rowIndex }) => {
    const line = document.createElement("div");
    line.className = `pattern-line ${rowIndex === currentIndex ? "current-line" : ""} ${rowIndex < progress.completedRounds ? "completed" : ""}`;
    if (rowIndex !== currentIndex) {
      line.innerHTML = `<span class="round-chip">${escapeHtml(patternRow.partName || "部分")} · ${escapeHtml(formatRound(patternRow.round))}</span><span>${escapeHtml(patternRow.note || summarizeItems(patternRow.items))}</span>`;
    } else {
      const summary = document.createElement("span");
      summary.className = "pattern-summary-chip";
      summary.textContent = summarizeItems(patternRow.items);
      line.append(summary);
      const breakLine = document.createElement("span");
      breakLine.className = "pattern-line-break";
      line.append(breakLine);
      rowStitches(patternRow).forEach((stitchId, stitchIndex) => {
        const chip = document.createElement("span");
        chip.className = "stitch-chip";
        if (stitchIndex + 1 < progress.currentStitch) chip.classList.add("done");
        if (stitchIndex + 1 === progress.currentStitch) chip.classList.add("current");
        chip.textContent = displayStitch(stitchId);
        line.append(chip);
      });
    }
    els.writtenPattern.append(line);
  });
}

function renderPatterns() {
  els.patternList.innerHTML = "";
  els.patternSort.value = normalizePatternSortMode(state.settings.patternSort);
  const patterns = sortedTemplatePatterns();
  if (!patterns.length) {
    els.patternList.innerHTML = `<p class="empty-note">尚無織圖，按右上角「新增」建立第一個織圖。</p>`;
    return;
  }
  patterns.forEach((pattern) => {
    const rows = expandedRows(pattern);
    const card = document.createElement("button");
    card.className = `pattern-library-card ${pattern.pinned ? "pinned-card" : ""} ${selectedPatternIds.has(pattern.id) ? "selected-card" : ""}`;
    card.innerHTML = `
      ${pattern.images[0] ? `<img src="${pattern.images[0]}" alt="">` : `<span class="empty-thumb">圖</span>`}
      <span>
        <strong>${escapeHtml(pattern.name)}</strong>
        <span class="meta-row"><span>${rows.length} 段</span>${pattern.notes ? `<span>${escapeHtml(pattern.notes)}</span>` : ""}</span>
      </span>
    `;
    let timer = null;
    let longPressed = false;
    card.addEventListener("pointerdown", () => {
      longPressed = false;
      timer = window.setTimeout(() => {
        longPressed = true;
        selectedPatternIds.add(pattern.id);
        actionPatternId = pattern.id;
        updatePatternActionSheet();
        els.patternActionModal.classList.remove("hidden");
        renderPatterns();
      }, 550);
    });
    card.addEventListener("pointerup", () => window.clearTimeout(timer));
    card.addEventListener("pointerleave", () => window.clearTimeout(timer));
    card.addEventListener("click", () => {
      if (longPressed) return;
      if (selectedPatternIds.size) {
        if (selectedPatternIds.has(pattern.id)) {
          selectedPatternIds.delete(pattern.id);
        } else {
          selectedPatternIds.add(pattern.id);
        }
        if (selectedPatternIds.size) {
          updatePatternActionSheet();
          els.patternActionModal.classList.remove("hidden");
        } else {
          els.patternActionModal.classList.add("hidden");
        }
        renderPatterns();
        return;
      }
      selectedPatternId = pattern.id;
      switchView("patternEdit");
    });
    els.patternList.append(card);
  });
}

function renderPatternEditor() {
  const pattern = editablePattern();
  if (!pattern) return;
  els.patternEditTitle.textContent = pattern.name;
  els.patternEditMeta.textContent = `共 ${expandedRows(pattern).length} 段`;
  els.patternName.value = pattern.name;
  els.patternSource.value = pattern.source;
  els.patternNotes.value = pattern.notes || "";
  renderMultiSelect(els.patternYarns, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "yarn").map((yarn) => ({ value: yarn.id, label: stockLabel(yarn) })), pattern.yarnIds || [], (values) => { pattern.yarnIds = values; pattern.updatedAt = new Date().toISOString(); saveState(); }, "搜尋線材");
  renderMultiSelect(els.patternSupplies, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "supply").map((supply) => ({ value: supply.id, label: stockLabel(supply) })), pattern.supplyIds || [], (values) => {
    pattern.supplyIds = values;
    pattern.supplyUsage = pattern.supplyUsage || {};
    Object.keys(pattern.supplyUsage).forEach((id) => { if (!values.includes(id)) delete pattern.supplyUsage[id]; });
    values.forEach((id) => { if (pattern.supplyUsage[id] === undefined) pattern.supplyUsage[id] = 1; });
    pattern.updatedAt = new Date().toISOString();
    renderPatternSupplyUsage(pattern);
    saveState();
  }, "搜尋消耗品");
  renderMultiSelect(els.patternTools, state.tools.map((tool) => ({ value: tool.id, label: tool.brand ? `${tool.brand} · ${tool.name}` : tool.name })), pattern.toolIds || [], (values) => { pattern.toolIds = values; pattern.updatedAt = new Date().toISOString(); saveState(); }, "搜尋工具");
  renderPatternSupplyUsage(pattern);
  els.patternImages.innerHTML = pattern.images.map((src, index) => `<button class="image-thumb ${index === 0 ? "cover-thumb" : ""}" data-remove-image="${index}"><img src="${src}" alt="織圖圖片 ${index + 1}"><span>×</span></button>`).join("");
  els.segmentList.innerHTML = "";
  pattern.parts.forEach((part) => {
    const section = document.createElement("button");
    section.className = "part-card";
    section.innerHTML = `
      <span class="part-head">
        <strong>${escapeHtml(part.name)}</strong>
        <span>${escapeHtml(formatRoundRange(part.segments.reduce((sum, segment) => sum + Number(segment.repeat || 1), 0)))}</span>
      </span>
      ${part.notes ? `<span class="muted">${escapeHtml(part.notes)}</span>` : ""}
    `;
    let longPressTimer = null;
    let didLongPress = false;
    section.addEventListener("pointerdown", () => {
      didLongPress = false;
      longPressTimer = window.setTimeout(() => {
        didLongPress = true;
        actionPartId = part.id;
        els.partActionTitle.textContent = part.name;
        els.partCopyCount.value = 1;
        els.partActionModal.classList.remove("hidden");
      }, 550);
    });
    section.addEventListener("pointerup", () => {
      window.clearTimeout(longPressTimer);
    });
    section.addEventListener("pointerleave", () => {
      window.clearTimeout(longPressTimer);
    });
    section.addEventListener("click", () => {
      if (didLongPress) return;
      selectedPartId = part.id;
      switchView("partEdit");
    });
    els.segmentList.append(section);
  });
}

function renderPatternSupplyUsage(pattern) {
  if (!els.patternSupplyUsageList) return;
  pattern.supplyUsage = pattern.supplyUsage || {};
  const supplies = (pattern.supplyIds || [])
    .map((id) => state.yarns.find((item) => item.id === id && (item.stockType || "yarn") === "supply"))
    .filter(Boolean);
  els.patternSupplyUsageList.innerHTML = supplies.length ? `
    <div class="section-header inline"><h2>消耗品用量</h2></div>
    ${supplies.map((supply) => `
      <label class="supply-usage-row">
        <span>${escapeHtml(stockLabel(supply))}</span>
        <input type="number" min="0" step="1" value="${Number(pattern.supplyUsage[supply.id] ?? 1)}" data-pattern-supply-usage="${supply.id}">
        <small>${escapeHtml(supply.unit || "個")}</small>
      </label>
    `).join("")}
  ` : "";
}

function renderPartEditor() {
  const pattern = editablePattern();
  const part = pattern?.parts.find((item) => item.id === selectedPartId) || pattern?.parts[0];
  if (!pattern || !part) return;
  selectedPartId = part.id;
  els.partEditTitle.textContent = part.name;
  els.partEditMeta.textContent = `共 ${part.segments.length} 段`;
  els.partName.value = part.name;
  els.partNotes.value = part.notes || "";
  els.partSegmentList.innerHTML = "";

  compactSegments(part.segments).forEach((group) => {
    const segment = group.segment;
    const card = document.createElement("article");
    card.className = "segment-card";
    card.draggable = true;
    card.dataset.segmentId = segment.id;
    card.innerHTML = `
      <div class="segment-head">
        <span>
          <strong class="round-label">${escapeHtml(segmentRoundLabel(group.start, group.end))}</strong>
          <span class="segment-total">${segmentStitchCount(segment)} 針</span>
        </span>
        <span class="segment-actions">
          <button class="text-button" data-copy-segment="${segment.id}">複製</button>
          <button class="text-button" data-remove-segment="${segment.id}">刪除</button>
        </span>
      </div>
      <label>段落備註<input value="${escapeHtml(segment.note || "")}" data-segment-field="${segment.id}:note"></label>
      <div class="item-list">${segment.items.map((item, index) => itemEditor(segment, item, index)).join("")}</div>
      <div class="segment-toolbar segment-inner-toolbar">
        <button class="outline-button" data-add-group-to-segment="${segment.id}">+ 新增群組</button>
        <button class="primary-button" data-add-item="${segment.id}">+ 新增針法</button>
      </div>
    `;
    let longPressTimer = null;
    card.addEventListener("pointerdown", (event) => {
      if (event.target.closest("input, select, button")) return;
      longPressTimer = window.setTimeout(() => copySegmentWithPrompt(segment.id), 550);
    });
    card.addEventListener("pointerup", () => window.clearTimeout(longPressTimer));
    card.addEventListener("pointerleave", () => window.clearTimeout(longPressTimer));
    card.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", segment.id));
    card.addEventListener("dragover", (event) => event.preventDefault());
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      moveSegment(event.dataTransfer.getData("text/plain"), segment.id);
    });
    els.partSegmentList.append(card);
  });
}

function itemEditor(segment, item, index) {
  if (item.type === "group") {
    return `
      <div class="item-editor group-item-editor" draggable="true" data-item-row="${segment.id}:${index}">
        <span class="drag-handle item-drag-handle">☰</span>
        <strong>${escapeHtml(groupDisplay(item))}</strong>
        <input type="number" min="1" value="${Number(item.count || 1)}" data-item-field="${segment.id}:${index}:count">
        <button class="text-button" data-remove-item="${segment.id}:${index}">×</button>
      </div>
    `;
  }
  return `
    <div class="item-editor" draggable="true" data-item-row="${segment.id}:${index}">
      <span class="drag-handle item-drag-handle">☰</span>
      <select data-item-field="${segment.id}:${index}:stitchId">
        ${state.stitches.map((stitch) => `<option value="${stitch.id}" ${stitch.id === item.stitchId ? "selected" : ""}>${escapeHtml(displayStitch(stitch.id))}</option>`).join("")}
      </select>
      <input type="number" min="1" value="${Number(item.count || 1)}" data-item-field="${segment.id}:${index}:count">
      <button class="text-button" data-remove-item="${segment.id}:${index}">×</button>
    </div>
  `;
}

function renderStash() {
  els.stashList.innerHTML = "";
  els.colorCardYarnBtn?.classList.toggle("hidden", activeStockType !== "yarn");
  els.bulkYarnBtn?.classList.toggle("hidden", activeStockType !== "yarn");
  els.stockTypeTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.stockType === activeStockType);
  });
  const visibleYarns = state.yarns
    .filter((yarn) => (yarn.stockType || "yarn") === activeStockType)
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || compareText(a.colorName, b.colorName));
  if (!visibleYarns.length) {
    els.stashList.innerHTML = `<p class="empty-note">尚無${activeStockType === "yarn" ? "線材" : "消耗品"}。</p>`;
    return;
  }
  visibleYarns.forEach((yarn) => {
    const card = document.createElement("button");
    card.className = `yarn-card ${yarn.pinned ? "pinned-card" : ""} ${selectedYarnIds.has(yarn.id) ? "selected-card" : ""}`;
    const usageText = `<span>使用 ${stockUsageCount(yarn.id)} 次</span>`;
    const meta = (yarn.stockType || "yarn") === "supply"
      ? `<span>總數 ${Number(yarn.amount || 0)} ${escapeHtml(yarn.unit || "個")}</span>${(yarn.supplyColors || []).length ? `<span>${yarn.supplyColors.length} 分類</span>` : ""}${usageText}`
      : `<span>${escapeHtml(yarn.brand)}</span><span>${escapeHtml(yarn.lot || "無色號")}</span><span>${Number(yarn.amount || 0)} ${escapeHtml(yarn.unit || "顆")}</span><span>${Number(yarn.weight || 0)} g</span>${usageText}`;
    card.innerHTML = `
      ${yarn.image ? `<img src="${yarn.image}" alt="">` : ""}
      <span>
        <strong>${escapeHtml(yarn.colorName)}</strong>
        <span class="meta-row">${meta}</span>
      </span>
    `;
    let timer = null;
    let longPressed = false;
    card.addEventListener("pointerdown", () => {
      longPressed = false;
      timer = window.setTimeout(() => {
        longPressed = true;
        selectedYarnIds.add(yarn.id);
        actionYarnId = yarn.id;
        updateStashActionSheet();
        els.stashActionModal.classList.remove("hidden");
        renderStash();
      }, 550);
    });
    card.addEventListener("pointerup", () => window.clearTimeout(timer));
    card.addEventListener("pointerleave", () => window.clearTimeout(timer));
    card.addEventListener("click", () => {
      if (longPressed) return;
      if (selectedYarnIds.size) {
        if (selectedYarnIds.has(yarn.id)) {
          selectedYarnIds.delete(yarn.id);
        } else {
          selectedYarnIds.add(yarn.id);
        }
        if (selectedYarnIds.size) {
          updateStashActionSheet();
          els.stashActionModal.classList.remove("hidden");
        } else {
          els.stashActionModal.classList.add("hidden");
        }
        renderStash();
        return;
      }
      selectedYarnId = yarn.id;
      switchView("yarnEdit");
    });
    els.stashList.append(card);
  });
}

function renderYarnForm() {
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  els.yarnBrand.innerHTML = [...state.brands, "其他"].map((brand) => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join("");
  if (!yarn) return;
  const isSupply = (yarn.stockType || "yarn") === "supply";
  els.yarnEditTitle.textContent = isSupply ? "編輯消耗品" : "編輯線材";
  setLabelText(els.yarnColorName, isSupply ? "名稱" : "顏色");
  setLabelText(els.yarnAmount, isSupply ? "總數" : "數量");
  const supplyTitle = els.supplyColorsSection.querySelector("h2");
  const supplyButton = els.addSupplyColorBtn;
  if (supplyTitle) supplyTitle.textContent = "分類";
  if (supplyButton) supplyButton.textContent = "+ 新增分類";
  const hasSupplyColors = isSupply && (yarn.supplyColors || []).length > 0;
  if (hasSupplyColors) {
    yarn.amount = (yarn.supplyColors || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }
  [els.yarnLot, els.yarnWeight, els.yarnBrand].forEach((field) => field.closest("label")?.classList.toggle("hidden", isSupply));
  els.yarnUnit.closest("label")?.classList.toggle("hidden", !isSupply);
  els.supplyColorsSection.classList.toggle("hidden", !isSupply);
  els.yarnImagePreview.innerHTML = (yarn.images || []).map((src, index) => `<button class="image-thumb ${src === yarn.image ? "cover-thumb" : ""}" data-yarn-image="${index}" type="button"><img src="${src}" alt="庫存圖片 ${index + 1}"><span>×</span></button>`).join("");
  els.yarnStockType.value = yarn.stockType || "yarn";
  els.yarnColorName.value = yarn.colorName;
  els.yarnBrand.value = state.brands.includes(yarn.brand) ? yarn.brand : "其他";
  els.yarnLot.value = yarn.lot;
  els.yarnAmount.value = yarn.amount;
  els.yarnAmount.readOnly = hasSupplyColors;
  els.yarnAmount.closest("label")?.classList.toggle("readonly-field", hasSupplyColors);
  els.yarnUnit.value = yarn.unit || "個";
  els.yarnWeight.value = yarn.weight;
  els.yarnUrl.value = yarn.url;
  els.yarnNotes.value = yarn.notes;
  els.supplyColorList.innerHTML = `
    <div class="supply-color-header"><span>類別</span><span>數量</span><span></span></div>
    ${(yarn.supplyColors || []).map((item, index) => `
    <article class="supply-color-row">
      <input value="${escapeHtml(item.name || "")}" placeholder="分類" data-supply-color-field="${index}:name">
      <input type="number" min="0" value="${Number(item.amount || 0)}" placeholder="數量" data-supply-color-field="${index}:amount">
      <button class="text-button" type="button" data-remove-supply-color="${index}">刪除</button>
    </article>
  `).join("")}
  `;
}

function renderSettings() {
  const settingsView = document.querySelector("#settingsView");
  const displaySection = els.displayMode.closest(".settings-card");
  const toolSection = els.toolList.closest(".settings-card");
  const brandSection = els.brandList.closest(".settings-card");
  const projectTypeSection = els.projectTypeList.closest(".settings-card");
  const commonGroupSection = els.commonGroupList.closest(".settings-card");
  const stitchSection = els.stitchEditorList.closest(".settings-card");
  const resetSection = els.resetDataBtn.closest(".settings-card");
  [displaySection, toolSection, brandSection, projectTypeSection, commonGroupSection, stitchSection, resetSection].forEach((section) => settingsView.append(section));

  if (state.settings.displayMode === "abbr") state.settings.displayMode = "letter";
  els.displayMode.value = state.settings.displayMode;
  els.roundLabelMode.value = state.settings.roundLabelMode;
  if (els.themeColor) els.themeColor.value = state.settings.themeColor || "rose";
  const displayLabel = displaySection.querySelector("label");
  const displaySelect = displayLabel.querySelector("select");
  displayLabel.innerHTML = "針法顯示";
  displayLabel.append(displaySelect);
  els.stitchEditorList.innerHTML = "";
  state.stitches.forEach((stitch) => {
    const row = document.createElement("article");
    row.className = "stitch-edit-card";
    row.draggable = true;
    row.dataset.stitchRow = stitch.id;
    row.innerHTML = `
      <span class="drag-handle settings-drag-handle">☰</span>
      <label>中文<input value="${escapeHtml(stitch.zh)}" data-stitch-field="${stitch.id}:zh" aria-label="中文"></label>
      <label>簡計<input value="${escapeHtml(stitch.letter)}" data-stitch-field="${stitch.id}:letter" aria-label="簡計"></label>
      <button class="text-button delete-stitch-button" data-delete-stitch="${stitch.id}">刪除</button>
    `;
    els.stitchEditorList.append(row);
  });
  els.brandList.innerHTML = "";
  if (state.brands.some((brand) => brand !== DEFAULT_BRAND)) {
    els.brandList.insertAdjacentHTML("beforeend", `<div class="brand-row-heading"><span></span><span>名稱</span><span></span><span></span><span></span></div>`);
  }
  state.brands.filter((brand) => brand !== DEFAULT_BRAND).forEach((brand) => {
    const row = document.createElement("article");
    row.className = "brand-row";
    row.draggable = true;
    row.dataset.brandRow = brand;
    const card = state.brandCards.find((item) => item.brand === brand);
    row.innerHTML = `<span class="drag-handle settings-drag-handle">☰</span><input value="${escapeHtml(brand)}" data-brand-name="${escapeHtml(brand)}" aria-label="線材品牌"><small>${card?.colors?.length || 0} 色</small><button class="text-button" data-edit-brand-card="${escapeHtml(brand)}">編輯</button><button class="text-button" data-remove-brand="${escapeHtml(brand)}">刪除</button>`;
    els.brandList.append(row);
  });
  els.projectTypeList.innerHTML = "";
  state.projectTypes.forEach((type, index) => {
    const row = document.createElement("article");
    row.className = "brand-row";
    row.draggable = true;
    row.dataset.projectTypeRow = index;
    row.innerHTML = `<span class="drag-handle settings-drag-handle">☰</span><input value="${escapeHtml(type)}" data-project-type-index="${index}" aria-label="作品類型"><button class="text-button" data-remove-project-type-index="${index}">刪除</button>`;
    els.projectTypeList.append(row);
  });
  els.commonGroupList.innerHTML = "";
  state.commonGroups.forEach((group) => {
    const row = document.createElement("button");
    row.className = "tool-row common-group-display";
    row.draggable = true;
    row.dataset.commonGroupRow = group.id;
    row.innerHTML = `
      <span class="drag-handle settings-drag-handle">☰</span>
      <span><strong>${escapeHtml(group.name)}</strong><small>${escapeHtml(groupDisplay(group))}</small></span>
      <span class="segment-total">編輯</span>
    `;
    row.dataset.editCommonGroup = group.id;
    els.commonGroupList.append(row);
  });
  els.toolList.innerHTML = "";
  state.tools.forEach((tool, index) => {
    const row = document.createElement("button");
    row.className = "tool-row settings-tool-row";
    row.draggable = true;
    row.dataset.toolRow = tool.id;
    row.innerHTML = `
      <span class="drag-handle">☰</span>
      <span><strong>${escapeHtml(tool.name)}</strong>${tool.brand ? `<small>${escapeHtml(tool.brand)}</small>` : ""}</span>`;
    row.addEventListener("click", () => {
      selectedToolId = tool.id;
      els.editToolName.value = tool.name;
      els.editToolBrand.value = tool.brand || "";
      els.editToolUrl.value = tool.url || "";
      els.toolEditModal.classList.remove("hidden");
    });
    els.toolList.append(row);
  });
}

function summarizeItems(items) {
  return items.map(compactItemDisplay).join("、");
}

function findSegment(pattern, segmentId) {
  for (const part of pattern.parts) {
    const segment = part.segments.find((item) => item.id === segmentId);
    if (segment) return { part, segment };
  }
  return {};
}

function copySegmentWithPrompt(segmentId) {
  const pattern = editablePattern();
  const { part, segment } = findSegment(pattern, segmentId);
  if (!part || !segment) return;
  const input = prompt("要複製幾份？", "1");
  if (input === null) return;
  const count = Math.max(1, Number(input || 1));
  const insertAt = part.segments.findIndex((item) => item.id === segmentId) + 1;
  const copies = Array.from({ length: count }, () => ({ ...structuredClone(segment), id: crypto.randomUUID(), repeat: 1 }));
  part.segments.splice(insertAt, 0, ...copies);
  render();
}

function moveSegment(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const pattern = editablePattern();
  const from = findSegment(pattern, sourceId);
  const to = findSegment(pattern, targetId);
  if (!from.part || !to.part || from.part.id !== to.part.id) return;
  const sourceIndex = from.part.segments.findIndex((segment) => segment.id === sourceId);
  const targetIndex = to.part.segments.findIndex((segment) => segment.id === targetId);
  const [moved] = from.part.segments.splice(sourceIndex, 1);
  from.part.segments.splice(targetIndex, 0, moved);
  render();
}

function moveSegmentItem(sourceText, targetText) {
  if (!sourceText || !targetText || sourceText === targetText) return;
  const [sourceSegmentId, sourceIndexText] = sourceText.split(":");
  const [targetSegmentId, targetIndexText] = targetText.split(":");
  if (sourceSegmentId !== targetSegmentId) return;
  const segment = findSegment(editablePattern(), sourceSegmentId).segment;
  if (!segment) return;
  const sourceIndex = Number(sourceIndexText);
  const targetIndex = Number(targetIndexText);
  const [moved] = segment.items.splice(sourceIndex, 1);
  segment.items.splice(targetIndex, 0, moved);
  render();
}

function currentEditingCommonGroup() {
  return state.commonGroups.find((group) => group.id === editingCommonGroupId);
}

function openCommonGroupEditor(groupId) {
  editingCommonGroupId = groupId;
  renderCommonGroupEditor();
  els.commonGroupEditModal.classList.remove("hidden");
}

function brandCard(brand = selectedBrandName) {
  if (!brand) return null;
  let card = state.brandCards.find((item) => item.brand === brand);
  if (!card) {
    card = { brand, colors: [] };
    state.brandCards.push(card);
  }
  return card;
}

function openBrandCardEditor(brand) {
  selectedBrandName = brand;
  els.brandCardTitle.textContent = `${brand} 色卡`;
  const parsed = splitBrandCategory(brand);
  els.brandCardCategory.value = parsed.category;
  els.brandCardWeight.value = Number(state.brandWeights?.[brand] || 0);
  els.brandCardColorName.value = "";
  els.brandCardLot.value = "";
  els.brandCardBatchPrefix.value = "";
  els.brandCardBatchStart.value = "";
  els.brandCardBatchEnd.value = "";
  els.brandCardTextInput.value = "";
  renderBrandCardEditor();
  els.brandCardModal.classList.remove("hidden");
}

function renameBrandFromCardSettings() {
  const oldName = selectedBrandName;
  if (!oldName || oldName === DEFAULT_BRAND) return;
  const parsed = splitBrandCategory(oldName);
  const newName = fullBrandCategoryName(parsed.name, els.brandCardCategory.value);
  if (!newName || newName === DEFAULT_BRAND) return;
  if (state.brands.includes(newName) && newName !== oldName) {
    alert("已有同名品牌分類。");
    els.brandCardCategory.value = parsed.category;
    return;
  }
  if (newName !== oldName) {
    state.brands = state.brands.map((brand) => brand === oldName ? newName : brand);
    state.brandCards.forEach((card) => {
      if (card.brand === oldName) card.brand = newName;
    });
    state.yarns.forEach((yarn) => {
      if (yarn.brand === oldName) yarn.brand = newName;
    });
    state.brandWeights[newName] = Number(state.brandWeights[oldName] || 0);
    delete state.brandWeights[oldName];
    selectedBrandName = newName;
  }
  state.brandWeights[selectedBrandName] = Number(els.brandCardWeight.value || 0);
  els.brandCardTitle.textContent = `${selectedBrandName} 色卡`;
  saveState();
  renderSettings();
}

function renderBrandCardEditor() {
  const card = brandCard();
  if (!card) return;
  els.brandCardColorList.innerHTML = card.colors.length ? card.colors.map((color) => `
    <article class="brand-card-color-row">
      <label class="brand-card-image-cell">
        <input type="file" accept="image/*" data-brand-color-image="${color.id}">
        ${color.image ? `<img src="${color.image}" alt="">` : `<span class="empty-thumb">圖</span>`}
      </label>
      <input value="${escapeHtml(color.lot || "")}" placeholder="色碼" data-brand-color-field="${color.id}:lot">
      <input value="${escapeHtml(color.colorName || "")}" placeholder="顏色" data-brand-color-field="${color.id}:colorName">
      <button class="text-button" data-remove-brand-color="${color.id}">刪除</button>
    </article>
  `).join("") : `<p class="empty-note">尚未新增色卡。</p>`;
}

function paddedRangeLots(prefix, startText, endText) {
  const start = Number(startText);
  const end = Number(endText);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end < start) return [];
  const width = Math.max(String(startText).length, String(endText).length);
  return Array.from({ length: end - start + 1 }, (_, index) => `${prefix}${String(start + index).padStart(width, "0")}`);
}

function parseBrandCardText(text) {
  const rows = [];
  const skipped = [];
  String(text).split(/\r?\n/).forEach((line, index) => {
    const raw = line.trim();
    if (!raw) return;
    const match = raw.match(/^([A-Za-z]*\d+[A-Za-z-]*)\s*(.*)$/);
    if (!match) {
      skipped.push(`第 ${index + 1} 行：${raw}`);
      return;
    }
    rows.push({ lot: match[1].trim(), colorName: match[2].trim(), image: "" });
  });
  return { rows, skipped };
}

function colorCardBrands() {
  return state.brandCards.filter((card) => card.colors?.length);
}

function renderColorCardStockPicker() {
  const cards = colorCardBrands();
  const selectedBrand = els.colorCardStockBrand.value;
  els.colorCardStockBrand.innerHTML = cards.map((card) => `<option value="${escapeHtml(card.brand)}">${escapeHtml(card.brand)}</option>`).join("");
  const brand = cards.some((card) => card.brand === selectedBrand) ? selectedBrand : cards[0]?.brand || "";
  if (brand) els.colorCardStockBrand.value = brand;
  const card = state.brandCards.find((item) => item.brand === brand);
  els.colorCardStockList.innerHTML = card?.colors?.length ? card.colors.map((color) => `
    <label class="color-card-choice">
      <input type="checkbox" value="${color.id}">
      ${color.image ? `<img src="${color.image}" alt="">` : `<span class="empty-thumb">圖</span>`}
      <span>
        <strong>${escapeHtml(color.colorName || "未命名顏色")}</strong>
        <small>${escapeHtml(color.lot || "無色號")}</small>
      </span>
    </label>
  `).join("") : `<p class="empty-note">這個品牌尚未建立色卡。</p>`;
}

function openColorCardStockPicker() {
  const cards = colorCardBrands();
  if (!cards.length) {
    alert("目前沒有可選的線材色卡，請先到設定的線材品牌裡新增色卡。");
    return;
  }
  els.colorCardStockUrl.value = "";
  renderColorCardStockPicker();
  els.colorCardStockModal.classList.remove("hidden");
}

function closeCommonGroupEditor() {
  editingCommonGroupId = null;
  els.commonGroupEditModal.classList.add("hidden");
}

function renderCommonGroupEditor() {
  const group = currentEditingCommonGroup();
  if (!group) return;
  group.items = normalizeGroupItems(group, state.stitches[0]?.id || "sc");
  els.commonGroupNameInput.value = group.name;
  els.commonGroupItemList.innerHTML = group.items.map((item, index) => `
    <article class="item-editor group-builder-row" draggable="true" data-common-group-item="${index}">
      <span class="drag-handle item-drag-handle">☰</span>
      <select data-common-group-item-field="${index}:stitchId">
        ${state.stitches.map((stitch) => `<option value="${stitch.id}" ${stitch.id === item.stitchId ? "selected" : ""}>${escapeHtml(displayStitch(stitch.id))}</option>`).join("")}
      </select>
      <button class="text-button" data-remove-common-group-item="${index}">×</button>
    </article>
  `).join("");
  els.addCommonGroupItemBtn.disabled = false;
}

function moveCommonGroupItem(sourceIndexText, targetIndexText) {
  const group = currentEditingCommonGroup();
  if (!group || sourceIndexText === targetIndexText) return;
  const sourceIndex = Number(sourceIndexText);
  const targetIndex = Number(targetIndexText);
  const [moved] = group.items.splice(sourceIndex, 1);
  group.items.splice(targetIndex, 0, moved);
  renderCommonGroupEditor();
  saveState();
}

function openCommonGroupPicker(segmentId) {
  targetSegmentForGroupId = segmentId;
  els.commonGroupPickerList.innerHTML = state.commonGroups.length ? state.commonGroups.map((group) => `
    <button class="tool-row common-group-display picker-group-row" data-pick-common-group="${group.id}">
      <span><strong>${escapeHtml(group.name)}</strong><small>${escapeHtml(groupDisplay(group))}</small></span>
    </button>
  `).join("") : `<p class="empty-note">尚未在設定新增常用群組。</p>`;
  els.commonGroupPickerModal.classList.remove("hidden");
}

function closeCommonGroupPicker() {
  targetSegmentForGroupId = null;
  els.commonGroupPickerModal.classList.add("hidden");
}

function insertCommonGroupIntoSegment(groupId) {
  const group = state.commonGroups.find((item) => item.id === groupId);
  const pattern = editablePattern();
  const { segment } = findSegment(pattern, targetSegmentForGroupId);
  if (!group || !segment) return;
  segment.items.push({
    type: "group",
    groupName: group.name,
    count: 1,
    items: normalizeGroupItems(group, state.stitches[0]?.id || "sc")
  });
  closeCommonGroupPicker();
  render();
}

function addCommonGroupToSegment(segmentId) {
  const pattern = editablePattern();
  const { segment } = findSegment(pattern, segmentId);
  if (!segment) return;
  if (!state.commonGroups.length) {
    alert("尚未在設定新增常用群組。");
    return;
  }
  openCommonGroupPicker(segmentId);
}

function projectDeductItems(project = currentProject()) {
  const yarnIds = new Set(project?.yarnIds || []);
  const supplyIds = new Set(project?.supplyIds || []);
  return [
    ...[...yarnIds].map((id) => state.yarns.find((item) => item.id === id && (item.stockType || "yarn") === "yarn")).filter(Boolean),
    ...[...supplyIds].map((id) => state.yarns.find((item) => item.id === id && (item.stockType || "yarn") === "supply")).filter(Boolean)
  ];
}

function closeSupplyDeductModal() {
  els.supplyDeductModal.classList.add("hidden");
}

function finishCurrentPattern(pattern) {
  closeSupplyDeductModal();
  saveState();
  showFinishToast(pattern.name);
}

function openSupplyDeductModal(pattern) {
  const items = projectDeductItems(currentProject());
  if (!items.length) {
    finishCurrentPattern(pattern);
    return;
  }
  els.supplyDeductList.innerHTML = items.map((item) => {
    const isSupply = (item.stockType || "yarn") === "supply";
    const colors = Array.isArray(item.supplyColors) ? item.supplyColors : [];
    const options = colors.length
      ? colors.map((color, index) => `<option value="${index}">${escapeHtml(color.name || `分類 ${index + 1}`)}（剩 ${Number(color.amount || 0)}）</option>`).join("")
      : `<option value="">尚無分類</option>`;
    const defaultAmount = isSupply ? Number(pattern?.supplyUsage?.[item.id] ?? 1) : 0;
    return `
      <article class="supply-deduct-row" data-deduct-item="${item.id}" data-deduct-type="${isSupply ? "supply" : "yarn"}">
        <strong>${escapeHtml(item.colorName)}<small>${isSupply ? "消耗品" : "線材"}</small></strong>
        ${isSupply ? `<select data-deduct-color ${colors.length ? "" : "disabled"}>${options}</select>` : `<span class="muted">${Number(item.amount || 0)} ${escapeHtml(item.unit || "顆")}</span>`}
        <input data-deduct-amount type="number" min="0" step="1" value="${defaultAmount}" inputmode="numeric" ${isSupply && !colors.length ? "disabled" : ""} />
      </article>
    `;
  }).join("");
  els.supplyDeductModal.classList.remove("hidden");
}

function applySupplyDeductions() {
  els.supplyDeductList.querySelectorAll("[data-deduct-item]").forEach((row) => {
    const item = state.yarns.find((stock) => stock.id === row.dataset.deductItem);
    const colorIndex = Number(row.querySelector("[data-deduct-color]")?.value);
    const amount = Math.max(0, Number(row.querySelector("[data-deduct-amount]")?.value || 0));
    if (!item || !amount) return;
    if (row.dataset.deductType === "yarn") {
      item.amount = Math.max(0, Number(item.amount || 0) - amount);
      return;
    }
    const color = item.supplyColors?.[colorIndex];
    if (!color) return;
    color.amount = Math.max(0, Number(color.amount || 0) - amount);
    item.amount = (item.supplyColors || []).reduce((sum, colorItem) => sum + Number(colorItem.amount || 0), 0);
  });
}

function switchView(view) {
  previousView = activeView;
  if (view !== "projects" && view !== "detail") activeProjectFolder = null;
  activeView = view;
  render();
  requestAnimationFrame(() => {
    document.querySelector(".workspace")?.scrollTo({ top: 0 });
  });
}

function updateProject(patch) {
  Object.assign(currentProject(), patch, { updatedAt: new Date().toISOString() });
  render();
}

function updateProgress(patch) {
  Object.assign(currentProgress(), patch);
  render();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || min));
}

function setLabelText(field, text) {
  const label = field?.closest("label");
  if (!label) return;
  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = text;
}

function keepScroll(callback) {
  const scroller = document.querySelector(".workspace");
  const scrollY = scroller?.scrollTop || 0;
  callback();
  requestAnimationFrame(() => {
    if (scroller) scroller.scrollTop = scrollY;
  });
}

function moveArrayItem(list, sourceIndex, targetIndex) {
  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) return false;
  const [moved] = list.splice(sourceIndex, 1);
  list.splice(targetIndex, 0, moved);
  return true;
}

function moveNamedSetting(list, sourceValue, targetValue, fixedFirstValue = "") {
  const editable = fixedFirstValue ? list.filter((item) => item !== fixedFirstValue) : list.slice();
  const sourceIndex = editable.indexOf(sourceValue);
  const targetIndex = editable.indexOf(targetValue);
  if (!moveArrayItem(editable, sourceIndex, targetIndex)) return false;
  list.splice(0, list.length, ...(fixedFirstValue ? [fixedFirstValue, ...editable] : editable));
  return true;
}

function moveSettingById(list, sourceId, targetId) {
  const sourceIndex = list.findIndex((item) => item.id === sourceId);
  const targetIndex = list.findIndex((item) => item.id === targetId);
  return moveArrayItem(list, sourceIndex, targetIndex);
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function renderMultiSelect(container, options, selectedValues, onChange, placeholder) {
  const selected = new Set(selectedValues || []);
  const summary = options.filter((option) => selected.has(option.value)).map((option) => option.label);
  container.className = "multi-select";
  container.innerHTML = `
    <button class="multi-select-toggle" type="button">
      <span>${summary.length ? escapeHtml(summary.join("、")) : "未選擇"}</span>
      <strong>⌄</strong>
    </button>
    <div class="multi-select-menu hidden">
      <input class="multi-search" placeholder="${escapeHtml(placeholder || "搜尋")}" />
      <div class="multi-options"></div>
    </div>
  `;

  const toggle = container.querySelector(".multi-select-toggle");
  const summaryText = toggle.querySelector("span");
  const menu = container.querySelector(".multi-select-menu");
  const search = container.querySelector(".multi-search");
  const list = container.querySelector(".multi-options");

  function drawList() {
    const keyword = search.value.trim().toLowerCase();
    const filtered = options.filter((option) => option.label.toLowerCase().includes(keyword));
    list.innerHTML = filtered.length ? filtered.map((option) => `
      <label class="check-row">
        <input type="checkbox" value="${option.value}" ${selected.has(option.value) ? "checked" : ""}>
        <span>${escapeHtml(option.label)}</span>
      </label>
    `).join("") : `<p class="empty-note">沒有符合的項目</p>`;
  }

  function updateSummary() {
    const labels = options.filter((option) => selected.has(option.value)).map((option) => option.label);
    summaryText.textContent = labels.length ? labels.join("、") : "未選擇";
  }

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    search.focus();
    drawList();
  });
  search.addEventListener("input", drawList);
  list.addEventListener("change", (event) => {
    if (!event.target.matches("input[type='checkbox']")) return;
    if (event.target.checked) {
      selected.add(event.target.value);
    } else {
      selected.delete(event.target.value);
    }
    updateSummary();
    onChange(Array.from(selected));
  });
  drawList();
}

function readImages(files, callback) {
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => callback(String(reader.result || ""));
    reader.readAsDataURL(file);
  });
}

function attachCoverImageHandlers(container, selector, getItem) {
  if (!container) return;
  let timer = null;
  container.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(selector);
    if (!target) return;
    timer = window.setTimeout(() => {
      const item = getItem();
      if (!item?.images?.length) return;
      const index = Number(target.dataset.projectImage ?? target.dataset.removeImage ?? target.dataset.yarnImage);
      const [picked] = item.images.splice(index, 1);
      item.images.unshift(picked);
      item.image = picked;
      container.dataset.justCovered = "true";
      render();
    }, 550);
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach((eventName) => {
    container.addEventListener(eventName, () => window.clearTimeout(timer));
  });
}

function showFinishToast(patternName) {
  els.finishToastText.textContent = `${patternName} 已經完成 100%。`;
  els.finishToast.classList.remove("hidden");
  setTimeout(() => {
    els.finishToast.classList.add("hidden");
    switchView("detail");
  }, 1500);
}

function openPatternPicker(onSelect) {
  function drawOptions() {
    const keyword = (els.attachPatternSearch?.value || "").trim().toLowerCase();
    const patterns = templatePatterns().filter((pattern) => pattern.name.toLowerCase().includes(keyword));
    els.attachPatternOptions.innerHTML = patterns.length ? "" : `<p class="empty-note">沒有符合的織圖。</p>`;
    patterns.forEach((pattern) => {
    const button = document.createElement("button");
    button.className = "pattern-library-card";
    button.innerHTML = `<span class="empty-thumb">Aa</span><span><strong>${escapeHtml(pattern.name)}</strong><span class="meta-row">${expandedRows(pattern).length} 段</span></span>`;
    button.addEventListener("click", () => onSelect(pattern.id));
    els.attachPatternOptions.append(button);
    });
  }
  if (els.attachPatternSearch) els.attachPatternSearch.value = "";
  drawOptions();
  if (els.attachPatternSearch) els.attachPatternSearch.oninput = drawOptions;
  els.attachModal.classList.remove("hidden");
}

els.navTabs.forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
els.backBtn.addEventListener("click", () => switchView(activeView === "track" ? "detail" : activeView === "partEdit" ? "patternEdit" : activeView === "patternEdit" ? "patterns" : activeView === "yarnEdit" ? "stash" : "projects"));
els.projectSort.addEventListener("change", () => { state.settings.projectSort = els.projectSort.value; render(); });
els.patternSort.addEventListener("change", () => { state.settings.patternSort = els.patternSort.value; render(); });

els.newProjectBtn.addEventListener("click", () => {
  openPatternPicker((templateId) => {
    const projectName = `新作品 ${state.projects.length + 1}`;
    if (warnDuplicateName(projectName, state.projects, "作品", (project) => project.name)) return;
    const project = {
      id: crypto.randomUUID(),
      name: projectName,
      type: state.projectTypes[0] || "作品",
      status: "進行中",
      yarnIds: selectedYarnId ? [selectedYarnId] : [],
      needle: "",
      folder: activeProjectFolder || "",
      notes: "",
      image: "",
      images: [],
      patternIds: [],
      activePatternId: "",
      progress: {}
    };
    attachPatternCopy(project, templateId);
    state.projects.unshift(project);
    selectedProjectId = project.id;
    els.attachModal.classList.add("hidden");
    switchView("detail");
  });
});

els.projectPhotoInput.addEventListener("change", () => readImages(els.projectPhotoInput.files, (src) => {
  const project = currentProject();
  project.images = project.images || [];
  project.images.push(src);
  updateProject({ image: project.image || src, images: project.images });
}));
attachCoverImageHandlers(els.projectImages, "[data-project-image]", () => currentProject(), "project");
els.projectImages.addEventListener("click", (event) => {
  if (els.projectImages.dataset.justCovered === "true") {
    els.projectImages.dataset.justCovered = "";
    return;
  }
  const index = event.target.closest("[data-project-image]")?.dataset.projectImage;
  const project = currentProject();
  if (index === undefined || !project) return;
  project.images.splice(Number(index), 1);
  updateProject({ images: project.images, image: project.images[0] || "" });
});
els.projectName.addEventListener("input", () => updateProject({ name: els.projectName.value }));
els.projectType.addEventListener("change", () => updateProject({ type: els.projectType.value }));
els.projectFolder.addEventListener("input", () => updateProject({ folder: els.projectFolder.value }));
els.projectPatternSelect.addEventListener("change", () => {
  attachPatternCopy(currentProject(), els.projectPatternSelect.value);
  render();
});
els.projectNotes.addEventListener("input", () => updateProject({ notes: els.projectNotes.value }));
els.deleteProjectBtn.addEventListener("click", () => {
  if (!confirm("確定要刪除此作品嗎？")) return;
  state.projects = state.projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = state.projects[0]?.id || null;
  switchView("projects");
});
els.pinProjectBtn.addEventListener("click", () => {
  const projects = selectedProjectsForAction();
  if (!projects.length) return;
  const shouldPin = projects.some((project) => !project.pinned);
  projects.forEach((project) => {
    project.pinned = shouldPin;
  });
  selectedProjectIds.clear();
  els.projectActionModal.classList.add("hidden");
  render();
});
els.folderProjectBtn.addEventListener("click", () => {
  const projects = selectedProjectsForAction();
  if (!projects.length) return;
  openProjectFolderPicker();
});
els.removeProjectFolderBtn.addEventListener("click", () => {
  const projects = selectedProjectsForAction();
  if (!projects.length) return;
  projects.forEach((project) => {
    project.folder = "";
    project.updatedAt = new Date().toISOString();
  });
  selectedProjectIds.clear();
  els.projectActionModal.classList.add("hidden");
  render();
});
els.closeProjectFolderModal.addEventListener("click", () => els.projectFolderModal.classList.add("hidden"));
els.projectFolderOptions.addEventListener("click", (event) => {
  const folder = event.target.closest("[data-folder-option]")?.dataset.folderOption;
  if (!folder) return;
  applyFolderToSelectedProjects(folder);
});
els.newProjectFolderBtn.addEventListener("click", () => {
  const folder = prompt("新增資料夾名稱");
  if (folder === null) return;
  if (!folder.trim()) return;
  if (warnDuplicateName(folder.trim(), projectFolders(), "資料夾")) return;
  applyFolderToSelectedProjects(folder);
});
els.closeFolderActionModal.addEventListener("click", () => {
  actionFolderName = "";
  els.folderActionModal.classList.add("hidden");
});
els.pinFolderBtn.addEventListener("click", () => {
  if (!actionFolderName) return;
  const meta = folderMeta(actionFolderName);
  meta.pinned = !meta.pinned;
  actionFolderName = "";
  els.folderActionModal.classList.add("hidden");
  render();
});
els.deleteFolderBtn.addEventListener("click", () => {
  if (!actionFolderName) return;
  const count = state.projects.filter((project) => projectFolderName(project) === actionFolderName).length;
  if (!confirm(`確定要刪除「${actionFolderName}」資料夾與裡面的 ${count} 個作品嗎？`)) return;
  state.projects = state.projects.filter((project) => projectFolderName(project) !== actionFolderName);
  state.projectFolders = state.projectFolders.filter((folder) => folder.name !== actionFolderName);
  if (activeProjectFolder === actionFolderName) activeProjectFolder = null;
  selectedProjectId = state.projects[0]?.id || null;
  actionFolderName = "";
  els.folderActionModal.classList.add("hidden");
  render();
});
els.completeProjectFromListBtn.addEventListener("click", () => {
  const projects = selectedProjectsForAction();
  if (!projects.length) return;
  projects.forEach((project) => {
    (project.patternIds || []).forEach((patternId) => {
      const pattern = state.patterns.find((item) => item.id === patternId);
      if (!pattern) return;
      project.progress = project.progress || {};
      project.progress[patternId] = {
        ...(project.progress[patternId] || {}),
        completedRounds: expandedRows(pattern).length,
        currentRound: expandedRows(pattern).length || 1,
        currentStitch: 1,
        completed: true
      };
    });
    project.status = "已完成";
    project.updatedAt = new Date().toISOString();
  });
  selectedProjectIds.clear();
  els.projectActionModal.classList.add("hidden");
  render();
});
els.deleteProjectFromListBtn.addEventListener("click", () => {
  const projects = selectedProjectsForAction();
  if (!projects.length) return;
  if (!confirm(`確定要刪除 ${projects.length} 個作品嗎？`)) return;
  const ids = new Set(projects.map((project) => project.id));
  state.projects = state.projects.filter((project) => !ids.has(project.id));
  selectedProjectId = state.projects[0]?.id || null;
  actionProjectId = null;
  selectedProjectIds.clear();
  els.projectActionModal.classList.add("hidden");
  render();
});
els.closeProjectActionModal.addEventListener("click", () => {
  selectedProjectIds.clear();
  els.projectActionModal.classList.add("hidden");
  renderProjects();
});

els.attachedPatternList.addEventListener("click", (event) => {
  const partId = event.target.closest("[data-track-part]")?.dataset.trackPart;
  const card = event.target.closest(".attached-card");
  const pattern = currentPattern();
  if (partId && pattern) {
    const rows = expandedRows(pattern);
    const rowIndex = rows.findIndex((row) => row.partId === partId);
    if (rowIndex >= 0) {
      Object.assign(currentProgress(), { currentRound: rowIndex + 1, currentStitch: 1 });
    }
    switchView("track");
    return;
  }
  if (card && pattern) {
    selectedPatternId = pattern.id;
    switchView("patternEdit");
  }
});

els.closeAttachModal.addEventListener("click", () => els.attachModal.classList.add("hidden"));

els.previousRoundBtn.addEventListener("click", () => updateProgress({ currentRound: Math.max(1, currentProgress().currentRound - 1), currentStitch: 1 }));
els.nextRoundBtn.addEventListener("click", () => updateProgress({ currentRound: Math.min(expandedRows(currentPattern()).length, currentProgress().currentRound + 1), currentStitch: 1 }));
els.previousStitchBtn.addEventListener("click", () => updateProgress({ currentStitch: Math.max(1, currentProgress().currentStitch - 1) }));
els.nextStitchBtn.addEventListener("click", () => {
  const rows = expandedRows(currentPattern());
  const row = rows[currentProgress().currentRound - 1];
  updateProgress({ currentStitch: Math.min(rowStitches(row).length, currentProgress().currentStitch + 1) });
});
els.restartRoundBtn.addEventListener("click", () => updateProgress({ currentStitch: 1 }));
els.completeRoundBtn.addEventListener("click", () => {
  const pattern = currentPattern();
  const rows = expandedRows(pattern);
  const progress = currentProgress();
  const completedRounds = Math.max(progress.completedRounds, progress.currentRound);
  Object.assign(progress, { completedRounds, currentRound: Math.min(rows.length, progress.currentRound + 1), currentStitch: 1 });
  if (completedRounds >= rows.length && !progress.completed) {
    progress.completed = true;
    currentProject().status = "已完成";
    saveState();
    openSupplyDeductModal(pattern);
  } else {
    render();
  }
});

els.newPatternBtn.addEventListener("click", () => {
  const baseName = "新織圖";
  if (warnDuplicateName(baseName, templatePatterns(), "織圖", (pattern) => pattern.name)) return;
    const pattern = {
      id: crypto.randomUUID(),
      name: uniquePatternName(baseName),
      source: "",
      notes: "",
      images: [],
      yarnIds: [],
      supplyIds: [],
      supplyUsage: {},
      toolIds: [],
      parts: [{ id: crypto.randomUUID(), name: "部分 1", notes: "", segments: [{ id: crypto.randomUUID(), repeat: 1, note: "", items: [] }] }],
      groups: []
  };
  state.patterns.unshift(pattern);
  selectedPatternId = pattern.id;
  switchView("patternEdit");
});
els.deletePatternBtn.addEventListener("click", () => {
  if (state.patterns.length <= 1) return;
  if (!confirm("確定要刪除此織圖嗎？")) return;
  state.patterns = state.patterns.filter((pattern) => pattern.id !== selectedPatternId);
  state.projects.forEach((project) => {
    project.patternIds = project.patternIds.filter((id) => id !== selectedPatternId);
    if (project.activePatternId === selectedPatternId) project.activePatternId = project.patternIds[0] || state.patterns[0].id;
  });
  selectedPatternId = state.patterns[0].id;
  switchView("patterns");
});
els.pinPatternBtn.addEventListener("click", () => {
  const patterns = selectedPatternsForAction();
  if (!patterns.length) return;
  const shouldPin = patterns.some((pattern) => !pattern.pinned);
  const currentlyPinned = templatePatterns().filter((item) => item.pinned && !patterns.some((pattern) => pattern.id === item.id)).length;
  if (shouldPin && currentlyPinned + patterns.length > 3) {
    alert("最多只能置頂 3 個織圖。");
    return;
  }
  patterns.forEach((pattern) => {
    pattern.pinned = shouldPin;
  });
  selectedPatternIds.clear();
  els.patternActionModal.classList.add("hidden");
  render();
});
els.sharePatternBtn.addEventListener("click", async () => {
  const patterns = selectedPatternsForAction();
  if (!patterns.length) return;
  els.patternActionModal.classList.add("hidden");
  selectedPatternIds.clear();
  if (patterns.length > 1) {
    downloadPatternBundle(patterns);
    renderPatterns();
    return;
  }
  for (const pattern of patterns) {
    await sharePattern(pattern);
  }
  renderPatterns();
});
els.deletePatternFromListBtn.addEventListener("click", () => {
  const patterns = selectedPatternsForAction();
  if (!patterns.length) return;
  if (!confirm(`確定要刪除 ${patterns.length} 個織圖嗎？`)) return;
  const ids = new Set(patterns.map((pattern) => pattern.id));
  state.patterns = state.patterns.filter((pattern) => !ids.has(pattern.id));
  state.projects.forEach((project) => {
    if (ids.has(project.activePatternId)) {
      project.activePatternId = "";
      project.patternIds = [];
    }
  });
  actionPatternId = null;
  selectedPatternIds.clear();
  els.patternActionModal.classList.add("hidden");
  render();
});
els.closePatternActionModal.addEventListener("click", () => {
  selectedPatternIds.clear();
  els.patternActionModal.classList.add("hidden");
  renderPatterns();
});
els.openPatternImportBtn.addEventListener("click", () => els.patternImportModal.classList.remove("hidden"));
els.closePatternImportModal.addEventListener("click", () => els.patternImportModal.classList.add("hidden"));
els.importPatternBtn.addEventListener("click", () => {
  els.patternImportModal.classList.add("hidden");
  els.patternImportInput.click();
});
els.importTextPatternBtn.addEventListener("click", () => {
  els.patternImportModal.classList.add("hidden");
  els.textPatternName.value = "";
  els.textPatternInput.value = "";
  els.textPatternUnparsed.classList.add("hidden");
  els.textPatternUnparsed.innerHTML = "";
  els.textPatternReference.textContent = state.stitches.map((stitch) => `${stitch.zh}=${stitch.letter}`).join("、");
  els.textPatternModal.classList.remove("hidden");
});
els.closeTextPatternModal.addEventListener("click", () => els.textPatternModal.classList.add("hidden"));
els.convertTextPatternBtn.addEventListener("click", () => {
  const name = (els.textPatternName.value.trim() || "文字匯入織圖");
  if (warnDuplicateName(name, templatePatterns(), "織圖", (pattern) => pattern.name)) return;
  const result = parseTextPattern(els.textPatternInput.value);
  if (!result.parts.length) {
    els.textPatternUnparsed.classList.remove("hidden");
    els.textPatternUnparsed.innerHTML = `<strong>沒有成功辨識的段落</strong>${result.unparsed.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}`;
    return;
  }
  const pattern = {
    id: crypto.randomUUID(),
    name,
    source: "",
    notes: "",
    images: [],
    yarnIds: [],
    supplyIds: [],
    supplyUsage: {},
    toolIds: [],
    parts: result.parts,
    groups: []
  };
  state.patterns.unshift(pattern);
  selectedPatternId = pattern.id;
  if (result.unparsed.length) {
    els.textPatternUnparsed.classList.remove("hidden");
    els.textPatternUnparsed.innerHTML = `<strong>以下內容未辨識，已略過：</strong>${result.unparsed.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}<button class="outline-button full-width" data-open-imported-pattern>查看已建立織圖</button>`;
    saveState();
    renderPatterns();
    return;
  }
  els.textPatternModal.classList.add("hidden");
  switchView("patternEdit");
});
els.textPatternUnparsed.addEventListener("click", (event) => {
  if (!event.target.closest("[data-open-imported-pattern]")) return;
  els.textPatternModal.classList.add("hidden");
  switchView("patternEdit");
});
els.patternImportInput.addEventListener("change", async () => {
  const file = els.patternImportInput.files?.[0];
  if (!file) return;
  try {
    const imported = importPatternPayload(JSON.parse(await file.text()));
    els.patternImportInput.value = "";
    selectedPatternId = imported[0]?.id || selectedPatternId;
    if (imported.length === 1) {
      switchView("patternEdit");
      alert("已匯入織圖。");
    } else {
      switchView("patterns");
      alert(`已匯入 ${imported.length} 個織圖。`);
    }
  } catch {
    alert("這個檔案無法匯入。");
  }
});
els.patternName.addEventListener("input", () => { const pattern = editablePattern(); pattern.name = els.patternName.value; pattern.updatedAt = new Date().toISOString(); saveState(); });
els.patternName.addEventListener("blur", () => {
  const pattern = editablePattern();
  pattern.name = uniquePatternName(pattern.name, pattern.id);
  render();
});
els.patternSource.addEventListener("input", () => { const pattern = editablePattern(); pattern.source = els.patternSource.value; pattern.updatedAt = new Date().toISOString(); saveState(); });
els.patternNotes.addEventListener("input", () => { const pattern = editablePattern(); pattern.notes = els.patternNotes.value; pattern.updatedAt = new Date().toISOString(); saveState(); });
els.patternSupplyUsageList.addEventListener("input", (event) => {
  const id = event.target.dataset.patternSupplyUsage;
  if (!id) return;
  const pattern = editablePattern();
  pattern.supplyUsage = pattern.supplyUsage || {};
  pattern.supplyUsage[id] = Math.max(0, Number(event.target.value || 0));
  pattern.updatedAt = new Date().toISOString();
  saveState();
});
els.patternImageInput.addEventListener("change", () => readImages(els.patternImageInput.files, (src) => { const pattern = editablePattern(); pattern.images.push(src); pattern.updatedAt = new Date().toISOString(); render(); }));
els.addSegmentBtn.addEventListener("click", () => {
  const pattern = editablePattern();
  const part = pattern.parts.find((item) => item.id === selectedPartId) || pattern.parts[0];
  part.segments.push({ id: crypto.randomUUID(), repeat: 1, note: "", items: [] });
  render();
});
els.addPartBtn.addEventListener("click", () => {
  const pattern = editablePattern();
  const name = `部分 ${pattern.parts.length + 1}`;
  if (warnDuplicateName(name, pattern.parts, "部分", (part) => part.name)) return;
  pattern.parts.push({ id: crypto.randomUUID(), name, segments: [] });
  render();
});
els.partName.addEventListener("input", () => {
  const part = editablePattern().parts.find((item) => item.id === selectedPartId);
  if (part) part.name = els.partName.value;
  els.partEditTitle.textContent = els.partName.value || "編輯部分";
  saveState();
});
els.partNotes.addEventListener("input", () => {
  const part = editablePattern().parts.find((item) => item.id === selectedPartId);
  if (part) part.notes = els.partNotes.value;
  saveState();
});
els.copyPartBtn.addEventListener("click", () => {
  const pattern = editablePattern();
  const part = pattern.parts.find((item) => item.id === actionPartId);
  const count = Math.max(1, Number(els.partCopyCount.value || 1));
  if (!part) return;
  const insertAt = pattern.parts.findIndex((item) => item.id === part.id) + 1;
  const copies = Array.from({ length: count }, (_, index) => ({
    ...structuredClone(part),
    id: crypto.randomUUID(),
    name: `${part.name} 複製 ${index + 1}`,
    segments: part.segments.map((segment) => ({ ...structuredClone(segment), id: crypto.randomUUID() }))
  }));
  pattern.parts.splice(insertAt, 0, ...copies);
  els.partActionModal.classList.add("hidden");
  render();
});
els.deletePartBtn.addEventListener("click", () => {
  const pattern = editablePattern();
  if (pattern.parts.length <= 1) return;
  pattern.parts = pattern.parts.filter((part) => part.id !== actionPartId);
  selectedPartId = pattern.parts[0]?.id || null;
  actionPartId = null;
  els.partActionModal.classList.add("hidden");
  render();
});
els.closePartActionModal.addEventListener("click", () => els.partActionModal.classList.add("hidden"));
els.partSegmentList.addEventListener("input", (event) => {
  const segmentField = event.target.dataset.segmentField;
  const itemField = event.target.dataset.itemField;
  const pattern = editablePattern();
  if (segmentField) {
    const [id, field] = segmentField.split(":");
    const { segment } = findSegment(pattern, id);
    segment[field] = field === "note" ? event.target.value : Math.max(1, Number(event.target.value));
  }
  if (itemField) {
    const [segmentId, itemIndex, field] = itemField.split(":");
    const item = findSegment(pattern, segmentId).segment.items[Number(itemIndex)];
    item[field] = field === "count" ? Number(event.target.value) : event.target.value;
  }
  saveState();
});
els.partSegmentList.addEventListener("click", (event) => {
  const pattern = editablePattern();
  const removeSegment = event.target.closest("[data-remove-segment]")?.dataset.removeSegment;
  const copySegment = event.target.closest("[data-copy-segment]")?.dataset.copySegment;
  const addItem = event.target.closest("[data-add-item]")?.dataset.addItem;
  const removeItem = event.target.closest("[data-remove-item]")?.dataset.removeItem;
  if (removeSegment) {
    pattern.parts.forEach((part) => {
      part.segments = part.segments.filter((segment) => segment.id !== removeSegment);
    });
    render();
    return;
  }
  if (copySegment) {
    copySegmentWithPrompt(copySegment);
    return;
  }
  if (addItem) {
    findSegment(pattern, addItem).segment.items.push({ stitchId: state.stitches[0].id, count: 1 });
    render();
    return;
  }
  const addGroup = event.target.closest("[data-add-group-to-segment]")?.dataset.addGroupToSegment;
  if (addGroup) {
    addCommonGroupToSegment(addGroup);
    return;
  }
  if (removeItem) {
    const [segmentId, index] = removeItem.split(":");
    findSegment(pattern, segmentId).segment.items.splice(Number(index), 1);
    render();
  }
});
els.partSegmentList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-item-row]");
  if (!row) return;
  event.stopPropagation();
  event.dataTransfer.setData("text/item-row", row.dataset.itemRow);
});
els.partSegmentList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-item-row]")) event.preventDefault();
});
els.partSegmentList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-item-row]");
  if (!row) return;
  event.preventDefault();
  event.stopPropagation();
  moveSegmentItem(event.dataTransfer.getData("text/item-row"), row.dataset.itemRow);
});
attachCoverImageHandlers(els.patternImages, "[data-remove-image]", () => editablePattern(), "pattern");
els.patternImages.addEventListener("click", (event) => {
  if (els.patternImages.dataset.justCovered === "true") {
    els.patternImages.dataset.justCovered = "";
    return;
  }
  const index = event.target.closest("[data-remove-image]")?.dataset.removeImage;
  if (index !== undefined) {
    editablePattern().images.splice(Number(index), 1);
    render();
  }
});

function createStockItem(stockType = activeStockType, patch = {}) {
  const name = patch.colorName || nextStockName(stockType);
  if (warnDuplicateName(name, state.yarns.filter((item) => (item.stockType || "yarn") === stockType), stockType === "supply" ? "消耗品" : "線材", (item) => item.colorName)) return null;
  const yarn = { id: crypto.randomUUID(), stockType, colorName: nextStockName(stockType), brand: DEFAULT_BRAND, lot: "", amount: 1, unit: stockType === "supply" ? "個" : "顆", weight: 0, url: "", image: "", images: [], supplyColors: [], notes: "", ...patch };
  state.yarns.unshift(yarn);
  selectedYarnId = yarn.id;
  return yarn;
}

els.colorCardYarnBtn?.addEventListener("click", openColorCardStockPicker);
els.closeColorCardStockModal.addEventListener("click", () => els.colorCardStockModal.classList.add("hidden"));
els.colorCardStockBrand.addEventListener("change", renderColorCardStockPicker);
els.addColorCardStockBtn.addEventListener("click", () => {
  const brand = els.colorCardStockBrand.value;
  const card = state.brandCards.find((item) => item.brand === brand);
  if (!card) return;
  const ids = new Set(Array.from(els.colorCardStockList.querySelectorAll("input[type='checkbox']:checked")).map((input) => input.value));
  if (!ids.size) {
    alert("請先選擇至少一個顏色。");
    return;
  }
  const created = [];
  const url = els.colorCardStockUrl.value.trim();
  if (!url) {
    alert("請先填寫購買連結。");
    return;
  }
  const weight = brandWeight(brand);
  card.colors.filter((color) => ids.has(color.id)).forEach((color) => {
    const item = createStockItem("yarn", {
      colorName: color.colorName || color.lot || "未命名顏色",
      brand,
      lot: color.lot || "",
      weight,
      url,
      image: color.image || "",
      images: color.image ? [color.image] : []
    });
    if (item) created.push(item);
  });
  if (!created.length) return;
  activeStockType = "yarn";
  selectedYarnId = created[0].id;
  els.colorCardStockModal.classList.add("hidden");
  switchView("stash");
});

els.newYarnBtn.addEventListener("click", () => {
  if (activeStockType === "yarn") {
    els.stockCreateModal.classList.remove("hidden");
    return;
  }
  const item = createStockItem(activeStockType);
  if (!item) return;
  switchView("yarnEdit");
});
els.closeStockCreateModal.addEventListener("click", () => els.stockCreateModal.classList.add("hidden"));
els.createSingleStockBtn.addEventListener("click", () => {
  els.stockCreateModal.classList.add("hidden");
  const item = createStockItem(activeStockType);
  if (!item) return;
  switchView("yarnEdit");
});
function renderBulkStockRows() {
  if (!els.bulkStockRows.children.length) {
    els.bulkStockRows.innerHTML = `
      <article class="bulk-stock-row"><input placeholder="顏色" data-bulk-color><input placeholder="色號" data-bulk-lot><button class="text-button" data-remove-bulk-row>刪除</button></article>
      <article class="bulk-stock-row"><input placeholder="顏色" data-bulk-color><input placeholder="色號" data-bulk-lot><button class="text-button" data-remove-bulk-row>刪除</button></article>
    `;
  }
}
function openBulkYarnModal() {
  if (activeStockType === "supply") return;
  els.stockCreateModal.classList.add("hidden");
  els.bulkStockBrand.innerHTML = state.brands.map((brand) => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join("");
  els.bulkStockType.value = "yarn";
  els.bulkStockWeight.value = brandWeight(els.bulkStockBrand.value || DEFAULT_BRAND) || "";
  els.bulkStockUrl.value = "";
  els.bulkStockRows.innerHTML = "";
  renderBulkStockRows();
  els.bulkStockModal.classList.remove("hidden");
}
els.openBulkStockBtn.addEventListener("click", openBulkYarnModal);
els.openColorCardStockBtn.addEventListener("click", () => {
  els.stockCreateModal.classList.add("hidden");
  openColorCardStockPicker();
});
els.bulkYarnBtn?.addEventListener("click", openBulkYarnModal);
els.closeBulkStockModal.addEventListener("click", () => els.bulkStockModal.classList.add("hidden"));
els.bulkStockBrand.addEventListener("change", () => {
  els.bulkStockWeight.value = brandWeight(els.bulkStockBrand.value) || "";
});
els.addBulkStockRowBtn.addEventListener("click", () => {
  els.bulkStockRows.insertAdjacentHTML("beforeend", `<article class="bulk-stock-row"><input placeholder="顏色" data-bulk-color><input placeholder="色號" data-bulk-lot><button class="text-button" data-remove-bulk-row>刪除</button></article>`);
});
els.bulkStockRows.addEventListener("click", (event) => {
  const row = event.target.closest("[data-remove-bulk-row]")?.closest(".bulk-stock-row");
  if (row) row.remove();
});
els.saveBulkStockBtn.addEventListener("click", () => {
  const rows = Array.from(els.bulkStockRows.querySelectorAll(".bulk-stock-row"))
    .map((row) => ({ colorName: row.querySelector("[data-bulk-color]")?.value.trim(), lot: row.querySelector("[data-bulk-lot]")?.value.trim() }))
    .filter((row) => row.colorName);
  if (!rows.length) {
    alert("請至少輸入一筆顏色。");
    return;
  }
  const stockType = "yarn";
  rows.reverse().forEach((row) => createStockItem(stockType, {
    colorName: row.colorName,
    lot: stockType === "yarn" ? row.lot : "",
    brand: els.bulkStockBrand.value || DEFAULT_BRAND,
    weight: Number(els.bulkStockWeight.value || 0),
    url: els.bulkStockUrl.value.trim(),
    amount: stockType === "supply" ? 0 : 1,
    unit: stockType === "supply" ? "個" : "顆"
  }));
  activeStockType = stockType;
  els.bulkStockModal.classList.add("hidden");
  switchView("stash");
});
els.stockTypeTabs.addEventListener("click", (event) => {
  const type = event.target.closest("[data-stock-type]")?.dataset.stockType;
  if (!type) return;
  activeStockType = type;
  render();
});
els.yarnImageInput.addEventListener("change", () => readImages(els.yarnImageInput.files, (src) => {
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (!yarn) return;
  yarn.images = yarn.images || [];
  yarn.images.push(src);
  yarn.image = yarn.image || src;
  render();
}));
attachCoverImageHandlers(els.yarnImagePreview, "[data-yarn-image]", () => state.yarns.find((item) => item.id === selectedYarnId), "yarn");
els.yarnImagePreview.addEventListener("click", (event) => {
  if (els.yarnImagePreview.dataset.justCovered === "true") {
    els.yarnImagePreview.dataset.justCovered = "";
    return;
  }
  const index = event.target.closest("[data-yarn-image]")?.dataset.yarnImage;
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (index === undefined || !yarn) return;
  yarn.images.splice(Number(index), 1);
  yarn.image = yarn.images[0] || "";
  render();
});
els.yarnStockType.addEventListener("change", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.stockType = els.yarnStockType.value; activeStockType = els.yarnStockType.value; render(); });
els.yarnColorName.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.colorName = els.yarnColorName.value; saveState(); });
els.yarnBrand.addEventListener("change", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.brand = els.yarnBrand.value; render(); });
els.yarnLot.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.lot = els.yarnLot.value; saveState(); });
els.yarnAmount.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.amount = Number(els.yarnAmount.value); saveState(); });
els.yarnUnit.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.unit = els.yarnUnit.value.trim() || "個"; saveState(); });
els.yarnWeight.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.weight = Number(els.yarnWeight.value); saveState(); });
els.yarnUrl.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.url = els.yarnUrl.value; saveState(); });
els.yarnNotes.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.notes = els.yarnNotes.value; saveState(); });
els.addSupplyColorBtn.addEventListener("click", () => {
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (!yarn) return;
  yarn.supplyColors = yarn.supplyColors || [];
  yarn.supplyColors.push({ name: "", amount: 0 });
  yarn.amount = (yarn.supplyColors || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
  render();
});
els.supplyColorList.addEventListener("input", (event) => {
  const field = event.target.dataset.supplyColorField;
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (!field || !yarn) return;
  const [index, key] = field.split(":");
  const row = yarn.supplyColors?.[Number(index)];
  if (!row) return;
  row[key] = key === "amount" ? Number(event.target.value) : event.target.value;
  if ((yarn.stockType || "yarn") === "supply") {
    yarn.amount = (yarn.supplyColors || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
    els.yarnAmount.value = yarn.amount;
  }
  saveState();
});
els.supplyColorList.addEventListener("click", (event) => {
  const index = event.target.closest("[data-remove-supply-color]")?.dataset.removeSupplyColor;
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (index === undefined || !yarn) return;
  yarn.supplyColors.splice(Number(index), 1);
  if ((yarn.stockType || "yarn") === "supply" && (yarn.supplyColors || []).length) {
    yarn.amount = (yarn.supplyColors || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }
  render();
});
els.deleteYarnBtn.addEventListener("click", () => {
  if (!confirm("確定要刪除此庫存項目嗎？")) return;
  state.yarns = state.yarns.filter((yarn) => yarn.id !== selectedYarnId);
  state.projects.forEach((project) => {
    project.yarnIds = (project.yarnIds || []).filter((id) => id !== selectedYarnId);
    project.supplyIds = (project.supplyIds || []).filter((id) => id !== selectedYarnId);
  });
  state.patterns.forEach((pattern) => {
    pattern.yarnIds = (pattern.yarnIds || []).filter((id) => id !== selectedYarnId);
    pattern.supplyIds = (pattern.supplyIds || []).filter((id) => id !== selectedYarnId);
  });
  selectedYarnId = state.yarns[0]?.id || null;
  render();
});
els.pinStashBtn.addEventListener("click", () => {
  const items = selectedYarnsForAction();
  if (!items.length) return;
  const shouldPin = items.some((item) => !item.pinned);
  items.forEach((item) => {
    item.pinned = shouldPin;
  });
  selectedYarnIds.clear();
  els.stashActionModal.classList.add("hidden");
  render();
});
els.shareStashBtn.addEventListener("click", async () => {
  const items = selectedYarnsForAction();
  if (!items.length) return;
  await shareStashItems(items);
  selectedYarnIds.clear();
  els.stashActionModal.classList.add("hidden");
  renderStash();
});
els.deleteStashFromListBtn.addEventListener("click", () => {
  const items = selectedYarnsForAction();
  if (!items.length) return;
  if (!confirm(`確定要刪除 ${items.length} 個庫存項目嗎？`)) return;
  const ids = new Set(items.map((item) => item.id));
  state.yarns = state.yarns.filter((yarn) => !ids.has(yarn.id));
  state.projects.forEach((project) => {
    project.yarnIds = (project.yarnIds || []).filter((id) => !ids.has(id));
    project.supplyIds = (project.supplyIds || []).filter((id) => !ids.has(id));
  });
  state.patterns.forEach((pattern) => {
    pattern.yarnIds = (pattern.yarnIds || []).filter((id) => !ids.has(id));
    pattern.supplyIds = (pattern.supplyIds || []).filter((id) => !ids.has(id));
  });
  selectedYarnId = state.yarns[0]?.id || null;
  actionYarnId = null;
  selectedYarnIds.clear();
  els.stashActionModal.classList.add("hidden");
  render();
});
els.closeStashActionModal.addEventListener("click", () => {
  selectedYarnIds.clear();
  els.stashActionModal.classList.add("hidden");
  renderStash();
});

els.displayMode.addEventListener("change", () => { state.settings.displayMode = els.displayMode.value; render(); });
els.roundLabelMode.addEventListener("change", () => { state.settings.roundLabelMode = els.roundLabelMode.value; render(); });
if (els.themeColor) els.themeColor.addEventListener("change", () => { state.settings.themeColor = els.themeColor.value; render(); });
els.resetDataBtn.addEventListener("click", () => {
  const firstConfirm = confirm("確定要清除這台裝置裡的作品、織圖與庫存嗎？\n\n清除後會回到目前 APP 內建的預設設定。這個動作無法復原。");
  if (!firstConfirm) return;
  const typed = prompt("請輸入「清除」再次確認。");
  if (typed !== "清除") return;
  localStorage.removeItem(STORAGE_KEY);
  OLD_KEYS.forEach((key) => localStorage.removeItem(key));
  state = normalizeState(structuredClone(defaultState));
  selectedProjectId = state.projects[0]?.id ?? null;
  selectedPatternId = state.patterns[0]?.id ?? null;
  selectedYarnId = state.yarns[0]?.id ?? null;
  selectedPartId = state.patterns[0]?.parts?.[0]?.id ?? null;
  selectedToolId = state.tools[0]?.id ?? null;
  selectedProjectIds.clear();
  selectedPatternIds.clear();
  selectedYarnIds.clear();
  editingCommonGroupId = null;
  targetSegmentForGroupId = null;
  activeStockType = "yarn";
  switchView("projects");
  saveState();
  alert("已清除作品、織圖與庫存，並回到內建預設設定。");
});
els.backupDataBtn.addEventListener("click", () => downloadFullBackup());
els.restoreDataBtn.addEventListener("click", () => els.restoreDataInput.click());
els.updateAppBtn.addEventListener("click", () => forceAppUpdate());
els.restoreDataInput.addEventListener("change", async () => {
  const file = els.restoreDataInput.files?.[0];
  if (!file) return;
  if (!confirm("匯入完整備份會覆蓋這台裝置目前的所有資料，確定要繼續嗎？")) {
    els.restoreDataInput.value = "";
    return;
  }
  try {
    restoreFullBackup(JSON.parse(await file.text()));
    alert("已匯入完整備份。");
  } catch (error) {
    alert(error.message || "匯入失敗，請確認檔案是否正確。");
  } finally {
    els.restoreDataInput.value = "";
  }
});
els.addStitchBtn.addEventListener("click", () => {
  const zh = els.newStitchZh.value.trim();
  const letter = els.newStitchLetter.value.trim();
  if (!zh) return;
  if (warnDuplicateName(zh, state.stitches, "針法", (stitch) => stitch.zh)) return;
  if (letter && warnDuplicateName(letter, state.stitches, "針法簡計", (stitch) => stitch.letter)) return;
  keepScroll(() => {
    state.stitches.push({ id: crypto.randomUUID(), zh, letter: letter || zh });
    els.newStitchZh.value = "";
    els.newStitchLetter.value = "";
    render();
  });
});
els.newStitchLetter.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  els.addStitchBtn.click();
});
els.addBrandBtn.addEventListener("click", () => {
  const brand = els.newBrandName.value.trim();
  if (!brand) return;
  if (warnDuplicateName(brand, state.brands, "線材品牌")) return;
  keepScroll(() => {
    state.brands.push(brand);
    state.brandWeights[brand] = 0;
    els.newBrandName.value = "";
    render();
  });
});
els.brandList.addEventListener("click", (event) => {
  if (event.target.closest("input, .drag-handle")) return;
  const editBrand = event.target.closest("[data-edit-brand-card]")?.dataset.editBrandCard;
  if (editBrand) {
    openBrandCardEditor(editBrand);
    return;
  }
  const brand = event.target.closest("[data-remove-brand]")?.dataset.removeBrand;
  if (brand) {
    if (brand === DEFAULT_BRAND) return;
    keepScroll(() => {
      state.brands = state.brands.filter((item) => item !== brand);
      delete state.brandWeights[brand];
      state.brandCards = state.brandCards.filter((card) => card.brand !== brand);
      state.yarns.forEach((yarn) => {
        if (yarn.brand === brand) yarn.brand = DEFAULT_BRAND;
      });
      render();
    });
    return;
  }
});
els.brandList.addEventListener("change", (event) => {
  const oldName = event.target.dataset.brandName;
  const newName = event.target.value.trim();
  if (!oldName || oldName === DEFAULT_BRAND) return;
  if (!newName) {
    event.target.value = oldName;
    return;
  }
  if (state.brands.includes(newName) && newName !== oldName) {
    alert("已有同名品牌。");
    event.target.value = oldName;
    return;
  }
  state.brands = state.brands.map((brand) => brand === oldName ? newName : brand);
  state.brandWeights[newName] = Number(state.brandWeights[oldName] || 0);
  if (newName !== oldName) delete state.brandWeights[oldName];
  state.brandCards.forEach((card) => {
    if (card.brand === oldName) card.brand = newName;
  });
  state.yarns.forEach((yarn) => {
    if (yarn.brand === oldName) yarn.brand = newName;
  });
  saveState();
  render();
});
els.brandList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-brand-row]");
  if (row) event.dataTransfer.setData("text/brand-row", row.dataset.brandRow);
});
els.brandList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-brand-row]")) event.preventDefault();
});
els.brandList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-brand-row]");
  if (!row) return;
  event.preventDefault();
  if (moveNamedSetting(state.brands, event.dataTransfer.getData("text/brand-row"), row.dataset.brandRow, DEFAULT_BRAND)) render();
});
els.addProjectTypeBtn.addEventListener("click", () => {
  const type = els.newProjectTypeName.value.trim();
  if (!type) return;
  if (warnDuplicateName(type, state.projectTypes, "作品類型")) return;
  keepScroll(() => {
    state.projectTypes.push(type);
    els.newProjectTypeName.value = "";
    render();
  });
});
els.projectTypeList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-project-type-row]");
  if (row) event.dataTransfer.setData("text/project-type-row", row.dataset.projectTypeRow);
});
els.projectTypeList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-project-type-row]")) event.preventDefault();
});
els.projectTypeList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-project-type-row]");
  if (!row) return;
  event.preventDefault();
  if (moveArrayItem(state.projectTypes, Number(event.dataTransfer.getData("text/project-type-row")), Number(row.dataset.projectTypeRow))) render();
});
els.projectTypeList.addEventListener("input", (event) => {
  const indexText = event.target.dataset.projectTypeIndex;
  if (indexText === undefined) return;
  const index = Number(indexText);
  const oldType = state.projectTypes[index];
  const nextType = event.target.value;
  state.projectTypes[index] = nextType;
  state.projects.forEach((project) => {
    if (project.type === oldType) project.type = nextType;
  });
  saveState();
});
els.projectTypeList.addEventListener("click", (event) => {
  const indexText = event.target.closest("[data-remove-project-type-index]")?.dataset.removeProjectTypeIndex;
  if (indexText === undefined || state.projectTypes.length <= 1) return;
  const removed = state.projectTypes[Number(indexText)];
  keepScroll(() => {
    state.projectTypes.splice(Number(indexText), 1);
    const fallback = state.projectTypes[0] || "作品";
    state.projects.forEach((project) => {
      if (project.type === removed) project.type = fallback;
    });
    render();
  });
});
els.addCommonGroupBtn.addEventListener("click", () => {
  const name = `常用群組 ${state.commonGroups.length + 1}`;
  if (warnDuplicateName(name, state.commonGroups, "常用群組", (group) => group.name)) return;
  const group = {
    id: crypto.randomUUID(),
    name,
    items: [{ stitchId: state.stitches[0]?.id || "sc" }]
  };
  state.commonGroups.push(group);
  saveState();
  render();
  openCommonGroupEditor(group.id);
});
els.commonGroupList.addEventListener("click", (event) => {
  const groupId = event.target.closest("[data-edit-common-group]")?.dataset.editCommonGroup;
  if (groupId) openCommonGroupEditor(groupId);
});
els.commonGroupList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-common-group-row]");
  if (row) event.dataTransfer.setData("text/common-group-row", row.dataset.commonGroupRow);
});
els.commonGroupList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-common-group-row]")) event.preventDefault();
});
els.commonGroupList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-common-group-row]");
  if (!row) return;
  event.preventDefault();
  if (moveSettingById(state.commonGroups, event.dataTransfer.getData("text/common-group-row"), row.dataset.commonGroupRow)) render();
});
els.commonGroupNameInput.addEventListener("input", () => {
  const group = currentEditingCommonGroup();
  if (!group) return;
  group.name = els.commonGroupNameInput.value;
  saveState();
});
els.addCommonGroupItemBtn.addEventListener("click", () => {
  const group = currentEditingCommonGroup();
  if (!group) return;
  group.items.push({ stitchId: state.stitches[0]?.id || "sc" });
  renderCommonGroupEditor();
  saveState();
});
els.commonGroupItemList.addEventListener("change", (event) => {
  const field = event.target.dataset.commonGroupItemField;
  if (!field) return;
  const group = currentEditingCommonGroup();
  if (!group) return;
  const [indexText, key] = field.split(":");
  group.items[Number(indexText)][key] = event.target.value;
  renderCommonGroupEditor();
  saveState();
});
els.commonGroupItemList.addEventListener("click", (event) => {
  const indexText = event.target.closest("[data-remove-common-group-item]")?.dataset.removeCommonGroupItem;
  const group = currentEditingCommonGroup();
  if (indexText === undefined || !group) return;
  group.items.splice(Number(indexText), 1);
  renderCommonGroupEditor();
  saveState();
});
els.commonGroupItemList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-common-group-item]");
  if (!row) return;
  event.dataTransfer.setData("text/common-group-item", row.dataset.commonGroupItem);
});
els.commonGroupItemList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-common-group-item]")) event.preventDefault();
});
els.commonGroupItemList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-common-group-item]");
  if (!row) return;
  event.preventDefault();
  moveCommonGroupItem(event.dataTransfer.getData("text/common-group-item"), row.dataset.commonGroupItem);
});
els.saveCommonGroupBtn.addEventListener("click", () => {
  const group = currentEditingCommonGroup();
  if (group) group.name = group.name.trim() || "常用群組";
  closeCommonGroupEditor();
  render();
});
els.deleteCommonGroupBtn.addEventListener("click", () => {
  if (!editingCommonGroupId) return;
  state.commonGroups = state.commonGroups.filter((group) => group.id !== editingCommonGroupId);
  closeCommonGroupEditor();
  render();
});
els.closeCommonGroupEditModal.addEventListener("click", () => {
  const group = currentEditingCommonGroup();
  if (group) group.name = group.name.trim() || "常用群組";
  closeCommonGroupEditor();
  render();
});
els.commonGroupPickerList.addEventListener("click", (event) => {
  const groupId = event.target.closest("[data-pick-common-group]")?.dataset.pickCommonGroup;
  if (groupId) insertCommonGroupIntoSegment(groupId);
});
els.closeCommonGroupPickerModal.addEventListener("click", closeCommonGroupPicker);
els.closeSupplyDeductModal.addEventListener("click", () => finishCurrentPattern(currentPattern()));
els.skipSupplyDeductBtn.addEventListener("click", () => finishCurrentPattern(currentPattern()));
els.confirmSupplyDeductBtn.addEventListener("click", () => {
  applySupplyDeductions();
  finishCurrentPattern(currentPattern());
});
els.addToolBtn.addEventListener("click", () => {
  const name = els.newToolName.value.trim();
  if (!name) return;
  if (warnDuplicateName(name, state.tools, "工具", (tool) => tool.name)) return;
  state.tools.push({ id: crypto.randomUUID(), name, brand: els.newToolBrand.value.trim(), url: els.newToolUrl.value.trim() });
  els.newToolName.value = "";
  els.newToolBrand.value = "";
  els.newToolUrl.value = "";
  render();
});
els.editToolName.addEventListener("input", () => {
  const tool = state.tools.find((item) => item.id === selectedToolId);
  if (tool) tool.name = els.editToolName.value;
  render();
});
els.editToolBrand.addEventListener("input", () => {
  const tool = state.tools.find((item) => item.id === selectedToolId);
  if (tool) tool.brand = els.editToolBrand.value;
  render();
});
els.editToolUrl.addEventListener("input", () => {
  const tool = state.tools.find((item) => item.id === selectedToolId);
  if (tool) tool.url = els.editToolUrl.value;
  render();
});
els.deleteToolBtn.addEventListener("click", () => {
  state.tools = state.tools.filter((tool) => tool.id !== selectedToolId);
  state.patterns.forEach((pattern) => {
    pattern.toolIds = (pattern.toolIds || []).filter((id) => id !== selectedToolId);
  });
  selectedToolId = state.tools[0]?.id || null;
  els.toolEditModal.classList.add("hidden");
  render();
});
els.closeToolEditModal.addEventListener("click", () => els.toolEditModal.classList.add("hidden"));
els.closeBrandCardModal.addEventListener("click", () => {
  selectedBrandName = "";
  els.brandCardModal.classList.add("hidden");
  render();
});
els.brandCardCategory.addEventListener("change", renameBrandFromCardSettings);
els.brandCardWeight.addEventListener("input", () => {
  if (!selectedBrandName) return;
  state.brandWeights[selectedBrandName] = Number(els.brandCardWeight.value || 0);
  saveState();
});
els.brandCardImageInput.addEventListener("change", () => readImages(els.brandCardImageInput.files, (src) => {
  els.brandCardImageInput.dataset.image = src;
}));
els.addBrandCardColorBtn.addEventListener("click", () => {
  const card = brandCard();
  const colorName = els.brandCardColorName.value.trim();
  const lot = els.brandCardLot.value.trim();
  const image = els.brandCardImageInput.dataset.image || "";
  if (!card || (!colorName && !lot && !image)) return;
  if (colorName && warnDuplicateName(colorName, card.colors, "色卡顏色", (color) => color.colorName)) return;
  if (lot && warnDuplicateName(lot, card.colors, "色號", (color) => color.lot)) return;
  card.colors.push({ id: crypto.randomUUID(), colorName, lot, image });
  els.brandCardColorName.value = "";
  els.brandCardLot.value = "";
  els.brandCardImageInput.value = "";
  els.brandCardImageInput.dataset.image = "";
  renderBrandCardEditor();
  saveState();
});
els.addBrandCardBatchBtn.addEventListener("click", () => {
  const card = brandCard();
  if (!card) return;
  const lots = paddedRangeLots(els.brandCardBatchPrefix.value.trim(), els.brandCardBatchStart.value.trim(), els.brandCardBatchEnd.value.trim());
  if (!lots.length) {
    alert("請確認共同碼、起始與結束流水號是否正確。");
    return;
  }
  const existingLots = new Set(card.colors.map((color) => String(color.lot || "").trim().toLowerCase()));
  const nextLots = lots.filter((lot) => !existingLots.has(lot.toLowerCase()));
  if (!nextLots.length) {
    alert("這些色號都已存在。");
    return;
  }
  nextLots.forEach((lot) => {
    card.colors.push({ id: crypto.randomUUID(), colorName: "", lot, image: "" });
  });
  els.brandCardBatchPrefix.value = "";
  els.brandCardBatchStart.value = "";
  els.brandCardBatchEnd.value = "";
  renderBrandCardEditor();
  saveState();
});
els.importBrandCardTextBtn.addEventListener("click", () => {
  const card = brandCard();
  if (!card) return;
  const parsed = parseBrandCardText(els.brandCardTextInput.value);
  if (!parsed.rows.length) {
    alert("沒有可匯入的色卡。請使用例如 01白色、02奶白 的格式。");
    return;
  }
  const existingLots = new Set(card.colors.map((color) => String(color.lot || "").trim().toLowerCase()));
  const rows = parsed.rows.filter((row) => row.lot && !existingLots.has(row.lot.toLowerCase()));
  rows.forEach((row) => card.colors.push({ id: crypto.randomUUID(), ...row }));
  els.brandCardTextInput.value = "";
  renderBrandCardEditor();
  saveState();
  const skippedCount = parsed.rows.length - rows.length + parsed.skipped.length;
  if (skippedCount) alert(`已匯入 ${rows.length} 筆，跳過 ${skippedCount} 筆重複或無法辨識內容。`);
});
els.brandCardColorList.addEventListener("click", (event) => {
  const colorId = event.target.closest("[data-remove-brand-color]")?.dataset.removeBrandColor;
  const card = brandCard();
  if (!colorId || !card) return;
  card.colors = card.colors.filter((color) => color.id !== colorId);
  renderBrandCardEditor();
  saveState();
});
els.brandCardColorList.addEventListener("input", (event) => {
  const field = event.target.dataset.brandColorField;
  const card = brandCard();
  if (!field || !card) return;
  const [colorId, key] = field.split(":");
  const color = card.colors.find((item) => item.id === colorId);
  if (!color) return;
  color[key] = event.target.value;
  saveState();
});
els.brandCardColorList.addEventListener("change", (event) => {
  const colorId = event.target.dataset.brandColorImage;
  const card = brandCard();
  if (!colorId || !card) return;
  const color = card.colors.find((item) => item.id === colorId);
  if (!color) return;
  readImages(event.target.files, (src) => {
    color.image = src;
    renderBrandCardEditor();
    saveState();
  });
});
els.toolList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-tool-row]");
  if (row) event.dataTransfer.setData("text/tool-row", row.dataset.toolRow);
});
els.toolList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-tool-row]")) event.preventDefault();
});
els.toolList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-tool-row]");
  if (!row) return;
  event.preventDefault();
  if (moveSettingById(state.tools, event.dataTransfer.getData("text/tool-row"), row.dataset.toolRow)) render();
});
els.stitchEditorList.addEventListener("input", (event) => {
  const field = event.target.dataset.stitchField;
  if (!field) return;
  const [id, key] = field.split(":");
  const stitch = state.stitches.find((item) => item.id === id);
  stitch[key] = event.target.value;
  saveState();
});
els.stitchEditorList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-stitch-row]");
  if (row) event.dataTransfer.setData("text/stitch-row", row.dataset.stitchRow);
});
els.stitchEditorList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-stitch-row]")) event.preventDefault();
});
els.stitchEditorList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-stitch-row]");
  if (!row) return;
  event.preventDefault();
  if (moveSettingById(state.stitches, event.dataTransfer.getData("text/stitch-row"), row.dataset.stitchRow)) render();
});
els.stitchEditorList.addEventListener("click", (event) => {
  const stitchId = event.target.closest("[data-delete-stitch]")?.dataset.deleteStitch;
  if (!stitchId || state.stitches.length <= 1) return;
  keepScroll(() => {
    state.stitches = state.stitches.filter((stitch) => stitch.id !== stitchId);
    const fallbackId = state.stitches[0].id;
    state.patterns.forEach((pattern) => {
      pattern.parts.forEach((part) => {
        part.segments.forEach((segment) => {
          segment.items.forEach((item) => {
            if (item.stitchId === stitchId) item.stitchId = fallbackId;
          });
        });
      });
      pattern.groups.forEach((group) => {
        group.items.forEach((item) => {
          if (item.stitchId === stitchId) item.stitchId = fallbackId;
        });
      });
    });
    render();
  });
});

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing || sessionStorage.getItem("sw-refreshing") === "true") return;
    refreshing = true;
    sessionStorage.setItem("sw-refreshing", "true");
    window.location.reload();
  });
  navigator.serviceWorker.register("service-worker.js").then((registration) => {
    registration.update();
  }).catch(() => {});
  window.addEventListener("load", () => {
    sessionStorage.removeItem("sw-refreshing");
  });
}

async function forceAppUpdate() {
  if (!confirm("將重新檢查新版並重新載入 APP。\n\n你的作品、織圖與庫存資料不會被刪除。")) return;
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key.startsWith("free-knit-workbench-")).map((key) => caches.delete(key)));
    }
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      await registration?.update();
    }
    sessionStorage.setItem("sw-refreshing", "true");
    window.location.reload();
  } catch {
    alert("更新失敗，請確認網路後再試一次。你的資料沒有被刪除。");
  }
}

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target !== modal) return;
    const closeButton = modal.querySelector(".header-icon[id^='close']");
    if (closeButton) {
      closeButton.click();
      return;
    }
    modal.classList.add("hidden");
  });
});

registerServiceWorker();
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
requestAnimationFrame(() => {
  document.querySelector(".workspace")?.scrollTo({ top: 0 });
});
render();
checkSharedPatternFromUrl();
checkSharedStashFromUrl();
