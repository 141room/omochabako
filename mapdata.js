var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    JP01: {
      name: "北海道"
    },
    JP02: {
      name: "青森"
    },
    JP03: {
      name: "岩手"
    },
    JP04: {
      name: "宮城"
    },
    JP05: {
      name: "秋田"
    },
    JP06: {
      name: "山形"
    },
    JP07: {
      name: "福島"
    },
    JP08: {
      name: "茨城"
    },
    JP09: {
      name: "栃木"
    },
    JP10: {
      name: "群馬"
    },
    JP11: {
      name: "埼玉"
    },
    JP12: {
      name: "千葉"
    },
    JP13: {
      name: "東京"
    },
    JP14: {
      name: "神奈川"
    },
    JP15: {
      name: "新潟"
    },
    JP16: {
      name: "富山"
    },
    JP17: {
      name: "石川"
    },
    JP18: {
      name: "福井"
    },
    JP19: {
      name: "山梨"
    },
    JP20: {
      name: "長野"
    },
    JP21: {
      name: "岐阜"
    },
    JP22: {
      name: "静岡"
    },
    JP23: {
      name: "愛知"
    },
    JP24: {
      name: "三重"
    },
    JP25: {
      name: "滋賀"
    },
    JP26: {
      name: "京都"
    },
    JP27: {
      name: "大阪"
    },
    JP28: {
      name: "兵庫"
    },
    JP29: {
      name: "奈良"
    },
    JP30: {
      name: "和歌山"
    },
    JP31: {
      name: "鳥取"
    },
    JP32: {
      name: "島根"
    },
    JP33: {
      name: "岡山"
    },
    JP34: {
      name: "広島"
    },
    JP35: {
      name: "山口"
    },
    JP36: {
      name: "徳島"
    },
    JP37: {
      name: "香川"
    },
    JP38: {
      name: "愛媛"
    },
    JP39: {
      name: "高知"
    },
    JP40: {
      name: "福岡"
    },
    JP41: {
      name: "佐賀"
    },
    JP42: {
      name: "長崎"
    },
    JP43: {
      name: "熊本"
    },
    JP44: {
      name: "大分"
    },
    JP45: {
      name: "宮崎"
    },
    JP46: {
      name: "鹿児島"
    },
    JP47: {
      name: "沖縄"
    }
  },
  locations: {},
  labels: {
    JP01: { name: "北海道", parent_id: "JP01" },
    
    // 🍏 青森：陸奥湾を避け、本土中央の陸地の上に固定
    JP02: { name: "青森", parent_id: "JP02", x: 425, y: 172 },
    
    JP03: { name: "岩手", parent_id: "JP03" },
    JP04: { name: "宮城", parent_id: "JP04" },
    JP05: { name: "秋田", parent_id: "JP05" },
    
    // 🍏 山形：はみ出し判定で消えやすいため位置を再固定
    JP06: { name: "山形", parent_id: "JP06", x: 376, y: 228 },
    
    JP07: { name: "福島", parent_id: "JP07" },
    JP08: { name: "茨城", parent_id: "JP08" },
    JP09: { name: "栃木", parent_id: "JP09" },
    JP10: { name: "群馬", parent_id: "JP10" },
    JP11: { name: "埼玉", parent_id: "JP11" },
    JP12: { name: "千葉", parent_id: "JP12" },
    
    // 🗼 東京：伊豆諸島を完全無視し、本土の23区マスの真ん中に固定
    JP13: { name: "東京", parent_id: "JP13", x: 405, y: 290 },
    
    JP14: { name: "神奈川", parent_id: "JP14" },
    
    // 🌾 新潟：佐渡島を完全無視し、長岡付近の本土の陸地に固定
    JP15: { name: "新潟", parent_id: "JP15", x: 388, y: 245 },
    
    // 🏔️ 富山：富山湾の海を避け、陸地中央に固定
    JP16: { name: "富山", parent_id: "JP16", x: 325, y: 247 },
    
    // 🌊 石川：能登半島に引っ張られず、金沢周辺の本土に固定
    JP17: { name: "石川", parent_id: "JP17", x: 304, y: 255 },
    
    // 🦖 福井：敦賀湾周辺を避け、福井市付近の陸地に固定
    JP18: { name: "福井", parent_id: "JP18", x: 282, y: 275 },
    
    JP19: { name: "山梨", parent_id: "JP19" },
    JP20: { name: "長野", parent_id: "JP20" },
    JP21: { name: "岐阜", parent_id: "JP21" },
    JP22: { name: "静岡", parent_id: "JP22" },
    JP23: { name: "愛知", parent_id: "JP23" },
    JP24: { name: "三重", parent_id: "JP24" },
    JP25: { name: "滋賀", parent_id: "JP25" },
    JP26: { name: "京都", parent_id: "JP26" },
    
    // 🐙 大阪：大阪湾の上を避け、本土の陸地の中心に固定
    JP27: { name: "大阪", parent_id: "JP27", x: 284, y: 298 },
    
    JP28: { name: "兵庫", parent_id: "JP28" },
    JP29: { name: "奈良", parent_id: "JP29" },
    JP30: { name: "和歌山", parent_id: "JP30" },
    
    // 🦅 島根：隠岐の島を完全無視し、松江・出雲付近の本土陸地に固定
    JP32: { name: "島根", parent_id: "JP32", x: 154, y: 281 },
    
    JP33: { name: "岡山", parent_id: "JP33" },
    JP34: { name: "広島", parent_id: "JP34" },
    JP35: { name: "山口", parent_id: "JP35" },
    JP36: { name: "徳島", parent_id: "JP36" },
    JP37: { name: "香川", parent_id: "JP37" },
    JP38: { name: "愛媛", parent_id: "JP38" },
    
    // 🍊 高知：土佐湾（海の上）を避け、高知市周辺の本土に固定
    JP39: { name: "高知", parent_id: "JP39", x: 172, y: 341 },
    
    JP40: { name: "福岡", parent_id: "JP40" },
    JP41: { name: "佐賀", parent_id: "JP41" },
    
    // ⚓ 長崎：五島列島を無視し、大村・諫早付近の本土陸地に固定
    JP42: { name: "長崎", parent_id: "JP42", x: 74, y: 326 },
    
    // 🐻 熊本：有明海（海の上）の判定を避け、熊本本土の中心に固定
    JP43: { name: "熊本", parent_id: "JP43", x: 90, y: 342 },
    
    JP44: { name: "大分", parent_id: "JP44" },
    JP45: { name: "宮崎", parent_id: "JP45" },
    
    // 🌋 鹿児島：離島を無視し、薩摩川内・霧島付近の本土に固定
    JP46: { name: "鹿児島", parent_id: "JP46", x: 92, y: 372 },
    
    // 🌺 沖縄：先島諸島を無視し、沖縄本島（名護・うるま付近）の中心に固定
    JP47: { name: "沖縄", parent_id: "JP47", x: 52, y: 395 }
  },
  legend: {
    entries: []
  },
  regions: {}
};
