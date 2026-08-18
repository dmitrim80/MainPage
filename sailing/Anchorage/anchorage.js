const maps = [
  ["Connecticut", "legal", "Legal anchoring overview", "18072DB7-2012-4ADC-B929-5C7764119F8C_1_105_c.jpeg"],
  ["Louisiana", "restricted", "Illegal anchorage areas", "1AFAA4F0-FA7B-40A8-A21E-D9E2B589509D_1_102_o.jpeg"],
  ["Maine", "legal", "Where anchoring is allowed", "1DF11B0B-6DEE-4DBD-9BC5-47E6B7F63C5F_1_105_c.jpeg"],
  ["Delaware", "restricted", "Illegal anchorage areas", "1E6B792B-BC20-4924-B63A-910B1C355AEE_1_105_c.jpeg"],
  ["New York", "restricted", "No-anchoring areas · Coastal", "1F68FB8F-779B-4618-B6B8-D66A1E16E6AA_1_105_c.jpeg"],
  ["New Jersey", "legal", "Legal & free anchoring", "20800804-ED2A-487C-99BB-2B488312EAA7_1_105_c.jpeg"],
  ["South Carolina", "restricted", "Illegal / restricted spots", "20C05C7D-134B-4389-972D-6B45DAEC03CD_1_105_c.jpeg"],
  ["Virginia", "restricted", "Illegal / restricted spots", "21733C18-DA70-4D5B-8406-7444AF36BA4E_1_105_c.jpeg"],
  ["New York", "restricted", "No-anchoring areas · State overview", "25A9DC07-241A-49E2-9D06-03FA48CF14EF_1_105_c.jpeg"],
  ["Maryland", "restricted", "No-anchoring areas", "36EAEA41-2590-421B-AD87-07A802C593C6_1_105_c.jpeg"],
  ["Rhode Island", "restricted", "Illegal / restricted spots · Coastal", "4022E9FF-36E8-4B53-A798-6CDDC293771D_1_105_c.jpeg"],
  ["New York", "legal", "Legal & free anchorages · State overview", "4BBCBD76-F852-436A-80C7-0A887B4D363E_1_105_c.jpeg"],
  ["New Jersey", "restricted", "No-anchoring areas", "4D7ABF50-13B3-4A75-9BCC-DE4614570886_1_105_c.jpeg"],
  ["New Hampshire", "legal", "Where anchoring is legal · Coast", "4FAC54CB-6FCC-436B-82AB-48B49EE7391E_1_105_c.jpeg"],
  ["North Carolina", "legal", "Legal / free anchoring areas", "6196FD95-505D-4923-9610-254D3CBFE727_1_105_c.jpeg"],
  ["California", "legal", "Legal / free coastal anchoring", "70BBB689-7BCC-47F9-922B-66B7EBB27857_1_105_c.jpeg"],
  ["Texas", "restricted", "Illegal coastal anchorage areas", "795B0E5B-D716-4FF2-98B5-57BC188110E9_1_102_o.jpeg"],
  ["Mississippi", "restricted", "Illegal coastal anchorage areas · Islands", "79B804C2-4DC4-4C59-9797-F7406C14CDAE_1_102_o.jpeg"],
  ["Hawaii", "legal", "Legal / free anchoring areas", "7D14A39B-F1C6-4625-B70C-DC65D332E7EC_1_102_o.jpeg"],
  ["Georgia", "legal", "Legal / free anchoring areas", "7E397ACB-CB1B-4C95-AA80-023C45106436_1_105_c.jpeg"],
  ["Rhode Island", "restricted", "No-anchoring areas · State overview", "7F38C25A-7960-40E5-8914-E4E0C86651EA_1_105_c.jpeg"],
  ["United States", "restricted", "Federal prohibited or restricted areas", "88DF23EE-ACD4-4D35-9C83-842A08509409_1_105_c.jpeg"],
  ["Alaska", "restricted", "Illegal / restricted anchorage areas", "9045DB8B-1852-4183-A7EE-E7349609EF05_1_102_o.jpeg"],
  ["South Carolina", "legal", "Anchorage guide", "9401109A-6B50-4085-838D-15990794F9C0_1_102_o.jpeg"],
  ["Connecticut", "restricted", "No-anchoring areas · State overview", "9F0EB65E-AF8B-487F-918D-A9D455621946_1_105_c.jpeg"],
  ["North Carolina", "restricted", "Illegal / restricted spots", "A1B03576-A663-4425-A7EF-021688D71942_1_105_c.jpeg"],
  ["Maryland", "legal", "Legal / free anchoring areas", "A6875A32-2AA4-4D73-A060-8C5389960FC8_1_105_c.jpeg"],
  ["Delaware", "legal", "Legal / free anchoring spots", "A7269A47-999B-43E5-8F69-5A7032A2B43A_1_102_o.jpeg"],
  ["New Hampshire", "restricted", "Restricted anchoring · Inland waters", "B66A29C0-D4A3-448B-B7B6-139E6930EBE5_1_105_c.jpeg"],
  ["New Jersey", "legal", "Legal / free anchorages · Coastal", "BAC2AF8C-9FB2-4D25-98BA-4AC9C2414A3F_1_105_c.jpeg"],
  ["Maine", "restricted", "Restricted / not allowed areas", "C284BA4C-040C-448F-8130-C19800201CD4_1_105_c.jpeg"],
  ["Virginia", "legal", "Legal / free anchorages", "CDCAE477-52E7-47F0-A72D-0A1B4CD64A73_1_105_c.jpeg"],
  ["Connecticut", "legal", "Legal & free anchoring · Long Island Sound", "CFDC2215-3C32-404C-A589-68BC4F756B2B_1_105_c.jpeg"],
  ["California", "restricted", "Illegal coastal anchorage areas", "D65B8B72-ECAC-4AAF-9A1F-A9C6FD5E26AE_1_102_o.jpeg"],
  ["Rhode Island", "legal", "Legal / free anchoring areas", "D8192712-5496-4561-A8B4-2906C9A47EDC_1_105_c.jpeg"],
  ["Mississippi", "restricted", "Illegal coastal anchorage areas · Mainland", "DCF5BB8A-3F7D-42BD-8ACD-F7D52BFDF1DC_1_102_o.jpeg"],
  ["Massachusetts", "restricted", "Illegal anchorage areas", "DEC3569A-2A5A-4827-A1D8-BF3A0F84C30B_1_105_c.jpeg"],
  ["Massachusetts", "legal", "Where anchoring is generally legal", "E22CFEF8-7683-4038-AF81-A12D0CE3CFE8_1_105_c.jpeg"],
  ["New Hampshire", "restricted", "Illegal anchoring · Coastal waters", "E341A3CD-AE48-49DC-A8FE-1184A4EE5AEE_1_102_o.jpeg"],
  ["Connecticut", "restricted", "No-anchoring areas · Long Island Sound", "E58D46E5-F231-4E9E-84E7-1D2633783FA9_1_105_c.jpeg"],
  ["New York", "legal", "Where anchoring is generally legal & free", "E96A5CC8-E7F9-443C-B1C2-BA54A7C47F19_1_105_c.jpeg"],
  ["South Carolina", "legal", "Legal / free anchoring areas", "F00D38A5-0C97-4142-B894-F7992D8E55BA_1_105_c.jpeg"]
].map(([state, type, title, file]) => ({state, type, title, file}));

const gulfStates = new Set(["Louisiana", "Mississippi", "Texas"]);
const westStates = new Set(["Alaska", "California", "Hawaii"]);
maps.forEach(map => {
  map.coast = map.state === "United States" ? "national" : gulfStates.has(map.state) ? "gulf" : westStates.has(map.state) ? "west" : "east";
});

const grid = document.querySelector("#map-grid");
const stateFilter = document.querySelector("#state-filter");
const typeButtons = [...document.querySelectorAll(".filter-button")];
const areaButtons = [...document.querySelectorAll(".area-button")];
const resultCount = document.querySelector("#result-count");
const emptyMessage = document.querySelector("#empty-message");
const viewer = document.querySelector("#map-viewer");
const viewerImage = document.querySelector("#viewer-image");
const viewerTitle = document.querySelector("#viewer-title");
const viewerType = document.querySelector("#viewer-type");
let activeType = "all";
let activeCoast = "all";

function populateStates() {
  const previousState = stateFilter.value;
  stateFilter.replaceChildren(new Option("All states & regions", "all"));
  const availableStates = maps.filter(map => activeCoast === "all" || map.coast === activeCoast).map(map => map.state);
  [...new Set(availableStates)].sort().forEach(state => stateFilter.append(new Option(state, state)));
  stateFilter.value = availableStates.includes(previousState) ? previousState : "all";
}

function openMap(map) {
  viewerImage.src = `assets/${map.file}`;
  viewerImage.alt = `${map.state}: ${map.title} map`;
  viewerTitle.textContent = map.state;
  viewerType.textContent = map.type === "legal" ? "Legal / free anchoring" : "Restricted anchoring";
  viewer.showModal();
}

function renderMaps() {
  const state = stateFilter.value;
  const visible = maps.filter(map => (activeCoast === "all" || map.coast === activeCoast) && (state === "all" || map.state === state) && (activeType === "all" || map.type === activeType));
  grid.replaceChildren();
  visible.forEach(map => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "map-card";
    card.setAttribute("aria-label", `Open ${map.state} ${map.title} map`);
    card.innerHTML = `
      <span class="map-thumb"><img src="assets/${map.file}" alt="${map.state} ${map.title} map" loading="lazy" decoding="async"></span>
      <span class="map-card-body">
        <span><small>${map.title}</small><strong>${map.state}</strong></span>
        <span class="status ${map.type}">${map.type === "legal" ? "Legal / free" : "Restricted"}</span>
      </span>`;
    card.addEventListener("click", () => openMap(map));
    grid.append(card);
  });
  resultCount.textContent = `${visible.length} map${visible.length === 1 ? "" : "s"}`;
  emptyMessage.hidden = visible.length !== 0;
}

stateFilter.addEventListener("change", renderMaps);
areaButtons.forEach(button => button.addEventListener("click", () => {
  activeCoast = button.dataset.coast;
  areaButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  populateStates();
  renderMaps();
}));
typeButtons.forEach(button => button.addEventListener("click", () => {
  activeType = button.dataset.type;
  typeButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  renderMaps();
}));

document.querySelector("#viewer-close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener("close", () => {
  viewerImage.removeAttribute("src");
});

populateStates();
renderMaps();
