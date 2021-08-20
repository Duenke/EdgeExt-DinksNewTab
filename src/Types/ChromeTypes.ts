export interface BookmarkTreeNode {
    children?: BookmarkTreeNode[];
    dateAdded?: number;
    dateGroupModified?: number;
    id: string;
    index?: number;
    parentId?: string;
    title: string;
    unmodifiable?: object;
    url?: string;
}

export const mockTopLevelNodeTree: BookmarkTreeNode[] = [
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            {
                                "dateAdded": 1581613166000,
                                "id": "7",
                                "index": 0,
                                "parentId": "6",
                                "title": "Releases",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1575502510000,
                                "id": "8",
                                "index": 1,
                                "parentId": "6",
                                "title": "Pipelines",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1560967375000,
                                "id": "9",
                                "index": 2,
                                "parentId": "6",
                                "title": "Sprint Board",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1566947343000,
                                "id": "10",
                                "index": 3,
                                "parentId": "6",
                                "title": "Estimate Boards",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1598984355482,
                                "id": "11",
                                "index": 4,
                                "parentId": "6",
                                "title": "Deployment Board",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1586368537000,
                                "id": "12",
                                "index": 5,
                                "parentId": "6",
                                "title": "Repo - ReconIntelligence",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1586368613000,
                                "id": "13",
                                "index": 6,
                                "parentId": "6",
                                "title": "Pull Requests - ReconIntelligence",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1629142542143,
                                "id": "90",
                                "index": 7,
                                "parentId": "6",
                                "title": "ServiceTree",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1566947251000,
                                "id": "14",
                                "index": 8,
                                "parentId": "6",
                                "title": "Power BI Reports",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1595387982000,
                                "id": "15",
                                "index": 9,
                                "parentId": "6",
                                "title": "Fortify Security Center",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1561663152000,
                                "id": "16",
                                "index": 10,
                                "parentId": "6",
                                "title": "Incident Management",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1610561926742,
                                "id": "17",
                                "index": 11,
                                "parentId": "6",
                                "title": "Microsoft Fiscal Calendar",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1580145071000,
                                "id": "18",
                                "index": 12,
                                "parentId": "6",
                                "title": "Balance Sheet Reconciliation",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251945,
                        "dateGroupModified": 1629215520860,
                        "id": "6",
                        "index": 0,
                        "parentId": "1",
                        "title": "Operations"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1591818813000,
                                "id": "20",
                                "index": 0,
                                "parentId": "19",
                                "title": "STAR - Pipelines",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843161000,
                                "id": "21",
                                "index": 1,
                                "parentId": "19",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1625001168584,
                                "id": "22",
                                "index": 2,
                                "parentId": "19",
                                "title": "DV",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843167000,
                                "id": "23",
                                "index": 3,
                                "parentId": "19",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1589473024000,
                                "id": "24",
                                "index": 4,
                                "parentId": "19",
                                "title": "PPE",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1589473093000,
                                "id": "25",
                                "index": 5,
                                "parentId": "19",
                                "title": "- wus2-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843177000,
                                "id": "26",
                                "index": 6,
                                "parentId": "19",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1591302066000,
                                "id": "27",
                                "index": 7,
                                "parentId": "19",
                                "title": "PLE",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1591301923000,
                                "id": "28",
                                "index": 8,
                                "parentId": "19",
                                "title": "- wus2-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1617129859687,
                                "id": "29",
                                "index": 9,
                                "parentId": "19",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1589473106000,
                                "id": "30",
                                "index": 10,
                                "parentId": "19",
                                "title": "PRD",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1589473153000,
                                "id": "31",
                                "index": 11,
                                "parentId": "19",
                                "title": "- wus2-dbw",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251946,
                        "dateGroupModified": 1627593251946,
                        "id": "19",
                        "index": 1,
                        "parentId": "1",
                        "title": "STAR"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1591286752000,
                                "id": "37",
                                "index": 0,
                                "parentId": "36",
                                "title": "EastUS2",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1591286752000,
                                "id": "38",
                                "index": 1,
                                "parentId": "36",
                                "title": "- esu2-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1591286752000,
                                "id": "39",
                                "index": 2,
                                "parentId": "36",
                                "title": "- eus2-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604425333200,
                                "id": "40",
                                "index": 3,
                                "parentId": "36",
                                "title": "- eus2-kv",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251948,
                        "dateGroupModified": 1627593251948,
                        "id": "36",
                        "index": 2,
                        "parentId": "1",
                        "title": "DV"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1560809443000,
                                "id": "42",
                                "index": 0,
                                "parentId": "41",
                                "title": "ReconIntelligencePPE",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843123000,
                                "id": "43",
                                "index": 1,
                                "parentId": "41",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585929921000,
                                "id": "44",
                                "index": 2,
                                "parentId": "41",
                                "title": "SouthCentralUS",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1575995116000,
                                "id": "45",
                                "index": 3,
                                "parentId": "41",
                                "title": "- scus-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843034000,
                                "id": "46",
                                "index": 4,
                                "parentId": "41",
                                "title": "- scus-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604425438198,
                                "id": "47",
                                "index": 5,
                                "parentId": "41",
                                "title": "- scus-kv",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843061000,
                                "id": "48",
                                "index": 6,
                                "parentId": "41",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585929949000,
                                "id": "49",
                                "index": 7,
                                "parentId": "41",
                                "title": "EastUS2",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585930332000,
                                "id": "50",
                                "index": 8,
                                "parentId": "41",
                                "title": "- eus2-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585930163000,
                                "id": "51",
                                "index": 9,
                                "parentId": "41",
                                "title": "- eus2-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604342376141,
                                "id": "52",
                                "index": 10,
                                "parentId": "41",
                                "title": "- eus2-kv",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251949,
                        "dateGroupModified": 1627593251949,
                        "id": "41",
                        "index": 3,
                        "parentId": "1",
                        "title": "PPE"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1572039228000,
                                "id": "54",
                                "index": 0,
                                "parentId": "53",
                                "title": "ReconIntelligencePLE",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843137000,
                                "id": "55",
                                "index": 1,
                                "parentId": "53",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585930523000,
                                "id": "56",
                                "index": 2,
                                "parentId": "53",
                                "title": "SouthCentralUS",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585930591000,
                                "id": "57",
                                "index": 3,
                                "parentId": "53",
                                "title": "- scus-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843652000,
                                "id": "58",
                                "index": 4,
                                "parentId": "53",
                                "title": "- scus-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604425422044,
                                "id": "59",
                                "index": 5,
                                "parentId": "53",
                                "title": "- scus-kv",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843142000,
                                "id": "60",
                                "index": 6,
                                "parentId": "53",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585930540000,
                                "id": "61",
                                "index": 7,
                                "parentId": "53",
                                "title": "EastUS2",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585930604000,
                                "id": "62",
                                "index": 8,
                                "parentId": "53",
                                "title": "- eus2-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585931100000,
                                "id": "63",
                                "index": 9,
                                "parentId": "53",
                                "title": "- eus2-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604425355033,
                                "id": "64",
                                "index": 10,
                                "parentId": "53",
                                "title": "- eus2-kv",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251950,
                        "dateGroupModified": 1627593251950,
                        "id": "53",
                        "index": 4,
                        "parentId": "1",
                        "title": "PLE"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1561133837000,
                                "id": "66",
                                "index": 0,
                                "parentId": "65",
                                "title": "ReconIntelligencePRD",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843280000,
                                "id": "67",
                                "index": 1,
                                "parentId": "65",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585929963000,
                                "id": "68",
                                "index": 2,
                                "parentId": "65",
                                "title": "SouthCentralUS",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1574788260000,
                                "id": "69",
                                "index": 3,
                                "parentId": "65",
                                "title": "- scus-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592612530000,
                                "id": "70",
                                "index": 4,
                                "parentId": "65",
                                "title": "- scus-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604425391238,
                                "id": "71",
                                "index": 5,
                                "parentId": "65",
                                "title": "- scus-kv",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843287000,
                                "id": "72",
                                "index": 6,
                                "parentId": "65",
                                "title": "------------------",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585931677000,
                                "id": "73",
                                "index": 7,
                                "parentId": "65",
                                "title": "EastUS2",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592843763000,
                                "id": "74",
                                "index": 8,
                                "parentId": "65",
                                "title": "- eus2-adf",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1592612455000,
                                "id": "75",
                                "index": 9,
                                "parentId": "65",
                                "title": "- eus2-dbw",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1604425372440,
                                "id": "76",
                                "index": 10,
                                "parentId": "65",
                                "title": "- eus2-kv",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251951,
                        "dateGroupModified": 1627593251951,
                        "id": "65",
                        "index": 5,
                        "parentId": "1",
                        "title": "PROD"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1587742304000,
                                "id": "78",
                                "index": 0,
                                "parentId": "77",
                                "title": "Azure Home",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1582574977000,
                                "id": "79",
                                "index": 1,
                                "parentId": "77",
                                "title": "Subscriptions",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1576010007000,
                                "id": "80",
                                "index": 2,
                                "parentId": "77",
                                "title": "ResourceGroups",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1585841829000,
                                "id": "81",
                                "index": 3,
                                "parentId": "77",
                                "title": "Resources",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1572472592000,
                                "id": "82",
                                "index": 4,
                                "parentId": "77",
                                "title": "AAD",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1570328611000,
                                "id": "83",
                                "index": 5,
                                "parentId": "77",
                                "title": "PIM",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1605242821072,
                                "id": "84",
                                "index": 6,
                                "parentId": "77",
                                "title": "Explorer",
                                "url": "example.com"
                            }
                        ],
                        "dateAdded": 1627593251953,
                        "dateGroupModified": 1627593251953,
                        "id": "77",
                        "index": 6,
                        "parentId": "1",
                        "title": "AzureServices"
                    },
                    {
                        "children": [
                            {
                                "dateAdded": 1594325927000,
                                "id": "86",
                                "index": 0,
                                "parentId": "85",
                                "title": "Hiring Portal",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1594325864000,
                                "id": "87",
                                "index": 1,
                                "parentId": "85",
                                "title": "Resource Library",
                                "url": "example.com"
                            },
                            {
                                "dateAdded": 1613666440091,
                                "id": "88",
                                "index": 2,
                                "parentId": "85",
                                "title": "Biweekly Call Calendar",
                                "url": "example.com"
                            },
                            {
                                "children": [
                                    {
                                        "dateAdded": 1629432993438,
                                        "id": "95",
                                        "index": 0,
                                        "parentId": "94",
                                        "title": "Dinks New Tab",
                                        "url": "example.com"
                                    },
                                    {
                                        "children": [
                                            {
                                                "dateAdded": 1629433645511,
                                                "id": "98",
                                                "index": 0,
                                                "parentId": "97",
                                                "title": "Dinks New Tab",
                                                "url": "example.com"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "dateAdded": 1629433650699,
                                                        "id": "100",
                                                        "index": 0,
                                                        "parentId": "99",
                                                        "title": "Dinks New Tab",
                                                        "url": "example.com"
                                                    }
                                                ],
                                                "dateAdded": 1629433650699,
                                                "dateGroupModified": 1629433650699,
                                                "id": "99",
                                                "index": 1,
                                                "parentId": "97",
                                                "title": "DinksFolder2"
                                            }
                                        ],
                                        "dateAdded": 1629433645511,
                                        "dateGroupModified": 1629433645511,
                                        "id": "97",
                                        "index": 1,
                                        "parentId": "94",
                                        "title": "DinksFolder1"
                                    }
                                ],
                                "dateAdded": 1629432953733,
                                "dateGroupModified": 1629432998512,
                                "id": "94",
                                "index": 3,
                                "parentId": "85",
                                "title": "DinksFolder0"
                            }
                        ],
                        "dateAdded": 1627593251954,
                        "dateGroupModified": 1629432993438,
                        "id": "85",
                        "index": 7,
                        "parentId": "1",
                        "title": "MSSA"
                    },
                    {
                        "dateAdded": 1629394229892,
                        "id": "92",
                        "index": 8,
                        "parentId": "1",
                        "title": "Dinks New Tab",
                        "url": "example.com"
                    }
                ],
                "dateAdded": 1627592950898,
                "dateGroupModified": 1629394229892,
                "id": "1",
                "index": 0,
                "parentId": "0",
                "title": "Favorites bar"
            },
            {
                "children": [],
                "dateAdded": 1627592950898,
                "id": "2",
                "index": 1,
                "parentId": "0",
                "title": "Other favorites"
            },
            {
                "children": [
                    {
                        "children": [],
                        "dateAdded": 1627593251945,
                        "dateGroupModified": 1627593251945,
                        "id": "5",
                        "index": 0,
                        "parentId": "3",
                        "title": "Reading List Saves"
                    }
                ],
                "dateAdded": 1627592950898,
                "id": "3",
                "index": 2,
                "parentId": "0",
                "title": "Mobile favorites"
            }
        ],
        "dateAdded": 1629433474567,
        "id": "0",
        "title": ""
    }
]