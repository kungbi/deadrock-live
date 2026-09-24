/* 이 파일의 내용만 바꾸면 시간표, 밴드, 셋리스트가 페이지에 반영됩니다. */
const START_UP_SESSIONS = [
  { role: "VOCAL", names: ["박지혜"] },
  { role: "DRUM", names: ["김도연"] },
  { role: "BASS", names: ["안태진"] },
  { role: "GUITAR", names: ["박지혁", "김록원"] },
  { role: "KEYBOARD", names: ["정민찬"] }
];

window.EVENT_DATA = {
  schedule: [
    {
      time: "17:00",
      endTime: "17:10",
      title: "입장",
      detail: "공연장 입장 및 관람 준비",
      type: "door"
    },
    {
      time: "17:10",
      endTime: "17:50",
      title: "START-UP",
      detail: "40분 공연",
      type: "performance"
    },
    {
      time: "17:50",
      endTime: "18:10",
      title: "쉬는 시간",
      detail: "20분 인터미션",
      type: "intermission"
    },
    {
      time: "18:10",
      endTime: "19:45",
      title: "클클밴드",
      detail: "95분 공연",
      type: "performance"
    }
  ],

  bands: [
    {
      id: "start-up",
      order: "첫 번째 무대",
      name: "START-UP",
      headcount: 6,
      time: "17:10 — 17:50",
      duration: "40분",
      songs: [
        {
          order: 1,
          title: "안녕 (Hello)",
          originalArtist: "조이",
          duration: "4:00",
          videoUrl: "https://www.youtube.com/watch?v=lNvBbh5jDcA",
          sessions: START_UP_SESSIONS
        },
        {
          order: 2,
          title: "???",
          hint: "3초 메모리",
          secret: true,
          duration: "3:30",
          sessions: START_UP_SESSIONS
        },
        {
          order: 3,
          title: "ㅈㅣㅂ",
          originalArtist: "한로로",
          duration: "4:00",
          videoUrl: "https://www.youtube.com/watch?v=U4-cz9NHQv4",
          sessions: START_UP_SESSIONS
        },
        {
          order: 4,
          title: "???",
          hint: "알콜 샤워",
          secret: true,
          duration: "7:30",
          sessions: START_UP_SESSIONS
        },
        {
          order: 5,
          title: "???",
          hint: "합계 46",
          secret: true,
          duration: "5:00",
          sessions: START_UP_SESSIONS
        }
      ]
    },
    {
      id: "cloud-club-band",
      order: "두 번째 무대",
      name: "클클밴드",
      headcount: 14,
      time: "18:10 — 19:45",
      duration: "95분",
      songs: [
        {
          order: 1,
          title: "???",
          hint: "문단속 실패",
          secret: true,
          sessions: [
            { role: "VOCAL", names: ["박시윤", "최재혁"] },
            { role: "DRUM", names: ["원준영"] },
            { role: "BASS", names: ["김화균"] },
            { role: "KEYBOARD", names: ["우다현"] }
          ]
        },
        {
          order: 3,
          title: "사랑하게 될거야",
          originalArtist: "한로로",
          videoUrl: "https://www.youtube.com/watch?v=h0KIWaUEIgQ",
          sessions: [
            { role: "VOCAL", names: ["박시윤"] },
            { role: "DRUM", names: ["정민혁"] },
            { role: "BASS", names: ["김화균"] },
            { role: "GUITAR", names: ["김재현", "신웅비"] }
          ]
        },
        {
          order: 2,
          title: "너의 의미",
          originalArtist: "아이유 (feat. 김창완)",
          videoUrl: "https://www.youtube.com/watch?v=4L-H_cXSNhQ",
          sessions: [
            { role: "VOCAL", names: ["박시윤", "최재혁"] },
            { role: "DRUM", names: ["원준영"] },
            { role: "BASS", names: ["김화균"] },
            { role: "GUITAR", names: ["김재현"] },
            { role: "TBA", names: ["장민호"] }
          ]
        },
        {
          order: 4,
          title: "항성통신",
          originalArtist: "너드커넥션",
          videoUrl: "https://www.youtube.com/watch?v=jv4ffkt4NF8",
          sessions: [
            { role: "VOCAL", names: ["최재혁"] },
            { role: "DRUM", names: ["정민혁"] },
            { role: "BASS", names: ["이해준"] },
            { role: "GUITAR", names: ["김재현", "신웅비"] }
          ]
        },
        {
          order: 5,
          title: "ling ling",
          originalArtist: "검정치마",
          videoUrl: "https://www.youtube.com/watch?v=CqQJVpO5vbQ",
          sessions: [
            { role: "VOCAL", names: ["최재혁"] },
            { role: "DRUM", names: ["원준영"] },
            { role: "BASS", names: ["인승진"] },
            { role: "GUITAR", names: ["김재현"] },
            { role: "KEYBOARD", names: ["우다현"] }
          ]
        },
        {
          order: 6,
          title: "???",
          hint: "바나나 형광펜",
          secret: true,
          sessions: [
            { role: "VOCAL", names: ["김재현"] },
            { role: "DRUM", names: ["정민혁"] },
            { role: "BASS", names: ["인승진"] },
            { role: "GUITAR", names: ["신웅비", "김재현"] }
          ]
        },
        {
          order: 7,
          title: "???",
          hint: "소지품 검사 예정",
          secret: true,
          sessions: [
            { role: "VOCAL", names: ["김재현"] },
            { role: "DRUM", names: ["원준영"] },
            { role: "BASS", names: ["김화균"] },
            { role: "GUITAR", names: ["김재현"] },
            { role: "KEYBOARD", names: ["우다현"] }
          ]
        },
        {
          order: 11,
          title: "erebia",
          originalArtist: "데이먼스 이어",
          videoUrl: "https://www.youtube.com/watch?v=NnftCQKqlr8",
          sessions: [
            { role: "DRUM", names: ["양효빈"] },
            { role: "BASS", names: ["이해준"] },
            { role: "GUITAR", names: ["신웅비", "김재현"] },
            { role: "TBA", names: ["윤민섭"] }
          ]
        },
        {
          order: 8,
          title: "pretender",
          originalArtist: "오피셜히게단디즘 (Official髭男dism)",
          videoUrl: "https://www.youtube.com/watch?v=TQ8WlA2GXbk",
          sessions: [
            { role: "DRUM", names: ["정민혁"] },
            { role: "BASS", names: ["김화균"] },
            { role: "GUITAR", names: ["신웅비", "임유빈"] },
            { role: "KEYBOARD", names: ["우다현"] },
            { role: "TBA", names: ["장민호", "윤민섭"] }
          ]
        },
        {
          order: 9,
          title: "고백",
          originalArtist: "델리 스파이스",
          videoUrl: "https://www.youtube.com/watch?v=BYyVDi8BpZw",
          sessions: [
            { role: "DRUM", names: ["정민혁"] },
            { role: "BASS", names: ["인승진"] },
            { role: "GUITAR", names: ["신웅비", "임유빈"] },
            { role: "TBA", names: ["윤민섭", "장민호"] }
          ]
        },
        {
          order: 10,
          title: "장마",
          originalArtist: "하현상",
          videoUrl: "https://www.youtube.com/watch?v=8vhNchRpn2c",
          sessions: [
            { role: "DRUM", names: ["양효빈"] },
            { role: "BASS", names: ["인승진"] },
            { role: "GUITAR", names: ["김재현"] },
            { role: "KEYBOARD", names: ["우다현"] },
            { role: "TBA", names: ["윤민섭"] }
          ]
        },
        {
          order: 12,
          title: "흔들리는 시간 속에",
          originalArtist: "극동아시아타이거즈",
          videoUrl: "https://www.youtube.com/watch?v=mCkZ48QTO64",
          sessions: [
            { role: "VOCAL", names: ["최재혁"] },
            { role: "DRUM", names: ["양효빈"] },
            { role: "BASS", names: ["이해준"] },
            { role: "GUITAR", names: ["신웅비", "김재현"] }
          ]
        }
      ]
    }
  ],

  notices: [
    "공연은 17시 10분에 시작합니다. 원활한 관람을 위해 입장 시간에 맞춰 와주세요.",
    "공연장은 스탠딩 중심으로 운영하며 일부 좌석을 마련할 예정입니다.",
    "세부 관람 및 입장 안내는 확정되는 대로 이 페이지에서 업데이트합니다."
  ]
};
