import React from "react";

const questionsData = [
    {
        "id": 1,
        "question": "What is the form of government of the United States?",
        "answers": [
                        "Republic",
                        "Constitution-based federal republic",
                        "Representative Democracy"
                    ]
    },
    {
        "id": 2,
        "question": "What is the supreme law of the land?",
        "answers": ["The U.S. Constitution"]
    },
    {
        "id": 3,
        "question": "Name one thing the U.S. Constitution does.",
        "answers": [
                        "Forms the government.",
                        "Defines the parts of the government",
                        "Protects the rights of the people"
                    ]
    },
    {
        "id": 4,
        "question": "The U.S. Constitution starts withe the words 'We the People'. What does 'We the People' mean?",
        "answers": [
                        "Self government",
                        "Popular sovereignty",
                        "Consent of the governed",
                        "People should govern themselves",
                        "Example of social contract"
                    ]
    },
    {
        "id": 5,
        "question": "How are changes made the U.S. Constitution?",
        "answers": ["The amendment process"]
    },
    {
        "id": 6,
        "question": "What does the Bill of Rights protect?",
        "answers": [
                        "(The basic) rights of all Americans",
                        "(The basic) rights of people living in the United States"
        ]
    },
    {
        "id": 7,
        "question": "How many amendments does the U.S. Consitution have?",
        "answers": [27]
    },
    {
        "id": 8,
        "question": "Why is the Declaration of Independence important?",
        "answers": [
                        "It says America is free from British control.",
                        "It says all people are created equal.",
                        "It identifies inherent rights.",
                        "It identifies individual freedoms."
        ]
    },
    // {
    //     "id": 9,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 10,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 11,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 12,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 13,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 14,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 15,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 16,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 17,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 18,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 19,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 20,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 21,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 22,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 23,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 24,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 25,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 26,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 27,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 28,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 29,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 30,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 31,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 32,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 33,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 34,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 35,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 36,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 37,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 38,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 39,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 40,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 41,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 42,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 43,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 44,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 45,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 46,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 47,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 48,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 49,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 50,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 51,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 52,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 53,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 54,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 55,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 56,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 57,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 58,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 59,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 60,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 61,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 62,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 63,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 64,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 65,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 66,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 67,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 68,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 69,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 70,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 71,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 72,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 73,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 74,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 75,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 76,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 77,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 78,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 79,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 80,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 81,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 82,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 83,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 84,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 85,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 86,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 87,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 88,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 89,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 90,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 91,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 92,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 93,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 94,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 95,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 96,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 97,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 98,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 99,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 100,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 101,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 102,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 103,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 104,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 105,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 106,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 107,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 108,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 109,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 110,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 111,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 112,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 113,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 114,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 115,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 116,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 117,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 118,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 119,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 120,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 121,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 122,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 123,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 124,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 125,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 126,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 127,
    //     "question": "",
    //     "answers": ""
    // },
    // {
    //     "id": 128,
    //     "question": "",
    //     "answers": ""
    // }
]

export default questionsData;