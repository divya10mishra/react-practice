"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NestedData = [
    {
        id: 1,
        content: "This is the first comment",
        replies: [
            {
                id: 2,
                content: "This is a reply to the first comment",
                replies: [],
            },
            {
                id: 3,
                content: "This is another reply to the first comment",
                replies: [],
            },
        ],
    },
    {
        id: 4,
        content: "This is the second comment",
        replies: [
            {
                id: 5,
                content: "This is a reply to the second comment",
                replies: [
                    {
                        id: 6,
                        content: "This is a nested reply to the reply",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        content: "This is the third comment",
        replies: [],
    },
    {
        id: 8,
        content: "This is the fourth comment",
        replies: [
            {
                id: 9,
                content: "This is a reply to the fourth comment",
                replies: [],
            },
        ],
    },
    {
        id: 10,
        content: "This is the fifth comment",
        replies: [],
    },
    {
        id: 11,
        content: "This is the sixth comment",
        replies: [],
    },
    {
        id: 12,
        content: "This is the seventh comment",
        replies: [],
    },
    {
        id: 13,
        content: "This is the eighth comment",
        replies: [],
    },
    {
        id: 14,
        content: "This is the ninth comment",
        replies: [],
    },
    {
        id: 15,
        content: "This is the tenth comment",
        replies: [],
    },
];
exports.default = NestedData;
