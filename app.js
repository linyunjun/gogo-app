const STORAGE_KEY = "free-knit-workbench-v3";
const OLD_KEYS = ["free-knit-workbench-v2", "free-knit-workbench-v1"];

const DEFAULT_BRANDS = ["未指定", "DMC", "Olympus", "Hamanaka", "Clover", "毛線球牧場", "小織物", "野呂英作", "Drops", "Rico Design"];

const defaultStitches = [
  { id: "mr", zh: "魔術環", abbr: "mr", symbol: "◎", letter: "O" },
  { id: "ch", zh: "鎖針", abbr: "ch", symbol: "○", letter: "C" },
  { id: "slst", zh: "引拔針", abbr: "sl st", symbol: "●", letter: "S" },
  { id: "sc", zh: "短針", abbr: "sc", symbol: "×", letter: "X" },
  { id: "hdc", zh: "中長針", abbr: "hdc", symbol: "T", letter: "H" },
  { id: "dc", zh: "長針", abbr: "dc", symbol: "T", letter: "D" },
  { id: "tr", zh: "長長針", abbr: "tr", symbol: "T", letter: "TR" },
  { id: "picot", zh: "結粒針", abbr: "ch-3 picot", symbol: "⌘", letter: "P" },
  { id: "scinc", zh: "2 短針加針", abbr: "sc inc", symbol: "×∨", letter: "V" },
  { id: "sc3inc", zh: "3 短針加針", abbr: "sc3inc", symbol: "×⋁", letter: "W" },
  { id: "hdcinc", zh: "2 中長針加針", abbr: "hdc inc", symbol: "T∨", letter: "HV" }
];

const defaultPatternId = crypto.randomUUID();
const defaultProjectId = crypto.randomUUID();
const defaultYarnId = crypto.randomUUID();
const defaultToolId = crypto.randomUUID();

const defaultState = {
  settings: { displayMode: "abbr", roundLabelMode: "r", themeColor: "rose" },
  brands: structuredClone(DEFAULT_BRANDS),
  categories: ["未分類"],
  projectTypes: ["包包", "娃娃", "衣物", "配件", "其他"],
  commonGroups: [
    { id: crypto.randomUUID(), name: "短針一圈", stitchId: "sc", count: 24 },
    { id: crypto.randomUUID(), name: "短針加針", stitchId: "scinc", count: 6 }
  ],
  tools: [{ id: defaultToolId, name: "4.0 mm 鉤針", brand: "", url: "" }],
  stitches: structuredClone(defaultStitches),
  patterns: [
    {
      id: defaultPatternId,
      name: "圍巾臘腸狗",
      source: "",
      images: [],
      yarnIds: [defaultYarnId],
      toolIds: [defaultToolId],
      parts: [
        {
          id: crypto.randomUUID(),
          name: "身體",
          notes: "",
          segments: [
            { id: crypto.randomUUID(), repeat: 1, note: "起針", items: [{ stitchId: "mr", count: 1 }, { stitchId: "sc", count: 6 }] },
            { id: crypto.randomUUID(), repeat: 2, note: "逐圈加針", items: [{ stitchId: "sc", count: 6 }, { stitchId: "scinc", count: 6 }] },
            { id: crypto.randomUUID(), repeat: 7, note: "不加不減", items: [{ stitchId: "sc", count: 24 }] }
          ]
        }
      ],
      groups: [
        { id: crypto.randomUUID(), name: "短針一圈", items: [{ stitchId: "sc", count: 24 }] },
        { id: crypto.randomUUID(), name: "短針加針組", items: [{ stitchId: "sc", count: 1 }, { stitchId: "scinc", count: 1 }] }
      ]
    }
  ],
  projects: [
    {
      id: defaultProjectId,
      name: "圍巾臘腸狗",
      type: "鉤針",
      status: "進行中",
      yarnIds: [defaultYarnId],
      needle: "4.0 mm 鉤針",
      notes: "",
      image: "",
      patternIds: [defaultPatternId],
      activePatternId: defaultPatternId,
      progress: {
        [defaultPatternId]: { completedRounds: 0, currentRound: 1, currentStitch: 1, completed: false }
      }
    }
  ],
  yarns: [
    { id: defaultYarnId, stockType: "yarn", colorName: "奶茶", brand: "未指定", category: "未分類", lot: "A01", amount: 3, weight: 50, url: "", image: "", supplyColors: [], notes: "" }
  ]
};

let state = loadState();
let selectedProjectId = state.projects[0]?.id ?? null;
let selectedPatternId = state.patterns[0]?.id ?? null;
let selectedYarnId = state.yarns[0]?.id ?? null;
let selectedPartId = state.patterns[0]?.parts?.[0]?.id ?? null;
let selectedToolId = state.tools[0]?.id ?? null;
let actionPartId = null;
let actionPatternId = null;
let actionProjectId = null;
let activeStockType = "yarn";
let activeView = "projects";
let previousView = "projects";

const els = {
  screenTitle: document.querySelector("#screenTitle"),
  backBtn: document.querySelector("#backBtn"),
  navTabs: document.querySelectorAll(".nav-tab"),
  views: document.querySelectorAll(".view"),
  projectList: document.querySelector("#projectList"),
  newProjectBtn: document.querySelector("#newProjectBtn"),
  detailType: document.querySelector("#detailType"),
  detailName: document.querySelector("#detailName"),
  detailProgressFill: document.querySelector("#detailProgressFill"),
  detailPercent: document.querySelector("#detailPercent"),
  detailProgressText: document.querySelector("#detailProgressText"),
  detailStatus: document.querySelector("#detailStatus"),
  detailYarn: document.querySelector("#detailYarn"),
  detailNeedle: document.querySelector("#detailNeedle"),
  projectPhotoPicker: document.querySelector("#projectPhotoPicker"),
  projectPhotoInput: document.querySelector("#projectPhotoInput"),
  projectPhoto: document.querySelector("#projectPhoto"),
  attachedPatternList: document.querySelector("#attachedPatternList"),
  attachPatternBtn: document.querySelector("#attachPatternBtn"),
  attachModal: document.querySelector("#attachModal"),
  attachPatternOptions: document.querySelector("#attachPatternOptions"),
  closeAttachModal: document.querySelector("#closeAttachModal"),
  projectName: document.querySelector("#projectName"),
  projectType: document.querySelector("#projectType"),
  projectStatus: document.querySelector("#projectStatus"),
  projectPatternSelect: document.querySelector("#projectPatternSelect"),
  projectYarns: document.querySelector("#projectYarns"),
  projectTools: document.querySelector("#projectTools"),
  projectNeedle: document.querySelector("#projectNeedle"),
  projectNotes: document.querySelector("#projectNotes"),
  deleteProjectBtn: document.querySelector("#deleteProjectBtn"),
  roundTitle: document.querySelector("#roundTitle"),
  roundMeta: document.querySelector("#roundMeta"),
  legendList: document.querySelector("#legendList"),
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
  newPatternBtn: document.querySelector("#newPatternBtn"),
  patternEditTitle: document.querySelector("#patternEditTitle"),
  patternEditMeta: document.querySelector("#patternEditMeta"),
  deletePatternBtn: document.querySelector("#deletePatternBtn"),
  patternName: document.querySelector("#patternName"),
  patternSource: document.querySelector("#patternSource"),
  patternYarns: document.querySelector("#patternYarns"),
  patternSupplies: document.querySelector("#patternSupplies"),
  patternTools: document.querySelector("#patternTools"),
  patternImageInput: document.querySelector("#patternImageInput"),
  patternImages: document.querySelector("#patternImages"),
  addGroupBtn: document.querySelector("#addGroupBtn"),
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
  newYarnBtn: document.querySelector("#newYarnBtn"),
  deleteYarnBtn: document.querySelector("#deleteYarnBtn"),
  yarnImageInput: document.querySelector("#yarnImageInput"),
  yarnImagePreview: document.querySelector("#yarnImagePreview"),
  yarnStockType: document.querySelector("#yarnStockType"),
  yarnColorName: document.querySelector("#yarnColorName"),
  yarnCategory: document.querySelector("#yarnCategory"),
  yarnBrand: document.querySelector("#yarnBrand"),
  yarnLot: document.querySelector("#yarnLot"),
  yarnAmount: document.querySelector("#yarnAmount"),
  yarnWeight: document.querySelector("#yarnWeight"),
  yarnUrl: document.querySelector("#yarnUrl"),
  yarnNotes: document.querySelector("#yarnNotes"),
  supplyColorsSection: document.querySelector("#supplyColorsSection"),
  supplyColorList: document.querySelector("#supplyColorList"),
  addSupplyColorBtn: document.querySelector("#addSupplyColorBtn"),
  displayMode: document.querySelector("#displayMode"),
  roundLabelMode: document.querySelector("#roundLabelMode"),
  themeColor: document.querySelector("#themeColor"),
  addStitchBtn: document.querySelector("#addStitchBtn"),
  stitchEditorList: document.querySelector("#stitchEditorList"),
  newBrandName: document.querySelector("#newBrandName"),
  addBrandBtn: document.querySelector("#addBrandBtn"),
  brandList: document.querySelector("#brandList"),
  newCategoryName: document.querySelector("#newCategoryName"),
  addCategoryBtn: document.querySelector("#addCategoryBtn"),
  categoryList: document.querySelector("#categoryList"),
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
  toolEditModal: document.querySelector("#toolEditModal"),
  closeToolEditModal: document.querySelector("#closeToolEditModal"),
  editToolName: document.querySelector("#editToolName"),
  editToolBrand: document.querySelector("#editToolBrand"),
  editToolUrl: document.querySelector("#editToolUrl"),
  deleteToolBtn: document.querySelector("#deleteToolBtn"),
  patternActionModal: document.querySelector("#patternActionModal"),
  closePatternActionModal: document.querySelector("#closePatternActionModal"),
  patternActionTitle: document.querySelector("#patternActionTitle"),
  pinPatternBtn: document.querySelector("#pinPatternBtn"),
  deletePatternFromListBtn: document.querySelector("#deletePatternFromListBtn"),
  projectActionModal: document.querySelector("#projectActionModal"),
  closeProjectActionModal: document.querySelector("#closeProjectActionModal"),
  projectActionTitle: document.querySelector("#projectActionTitle"),
  pinProjectBtn: document.querySelector("#pinProjectBtn"),
  deleteProjectFromListBtn: document.querySelector("#deleteProjectFromListBtn"),
  partActionModal: document.querySelector("#partActionModal"),
  closePartActionModal: document.querySelector("#closePartActionModal"),
  partActionTitle: document.querySelector("#partActionTitle"),
  finishToast: document.querySelector("#finishToast"),
  finishToastText: document.querySelector("#finishToastText"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput")
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
      brand: yarn.brand || "未指定",
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
  const brands = ["未指定", ...inputBrands.filter((brand) => brand && brand !== "未指定")];
  const next = {
    settings: { ...defaultState.settings, ...(input.settings || {}) },
    brands,
    categories: Array.isArray(input.categories) && input.categories.length ? input.categories : ["未分類"],
    projectTypes: Array.isArray(input.projectTypes) && input.projectTypes.length ? input.projectTypes : structuredClone(defaultState.projectTypes),
    commonGroups: Array.isArray(input.commonGroups) ? input.commonGroups : structuredClone(defaultState.commonGroups),
    tools: Array.isArray(input.tools) ? input.tools : structuredClone(defaultState.tools),
    stitches: Array.isArray(input.stitches) && input.stitches.length ? input.stitches : structuredClone(defaultStitches),
    patterns: Array.isArray(input.patterns) && input.patterns.length ? input.patterns : structuredClone(defaultState.patterns),
    projects: Array.isArray(input.projects) && input.projects.length ? input.projects : structuredClone(defaultState.projects),
    yarns: Array.isArray(input.yarns) ? input.yarns : structuredClone(defaultState.yarns)
  };

  next.patterns = next.patterns.map((pattern) => ({
    id: pattern.id || crypto.randomUUID(),
    name: pattern.name || "未命名織圖",
    pinned: Boolean(pattern.pinned),
    source: pattern.source || "",
    images: Array.isArray(pattern.images) ? pattern.images : [],
    yarnIds: Array.isArray(pattern.yarnIds) ? pattern.yarnIds : [],
    supplyIds: Array.isArray(pattern.supplyIds) ? pattern.supplyIds : [],
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
      image: project.image || "",
      pinned: Boolean(project.pinned),
      yarnIds: Array.isArray(project.yarnIds) ? project.yarnIds : [project.yarnId].filter(Boolean),
      supplyIds: Array.isArray(project.supplyIds) ? project.supplyIds : [],
      toolIds: Array.isArray(project.toolIds) ? project.toolIds : [],
      patternIds: singlePatternIds,
      activePatternId: project.activePatternId && singlePatternIds.includes(project.activePatternId) ? project.activePatternId : singlePatternIds[0] || "",
      progress
    };
  });

  next.yarns = next.yarns.map((yarn) => ({
    id: yarn.id || crypto.randomUUID(),
    stockType: yarn.stockType || "yarn",
    colorName: yarn.colorName || yarn.name || "未命名顏色",
    brand: yarn.brand || "未指定",
    category: yarn.category || "未分類",
    lot: yarn.lot || "",
    amount: Number(yarn.amount || 0),
    weight: Number(yarn.weight || 0),
    url: yarn.url || "",
    image: yarn.image || "",
    supplyColors: Array.isArray(yarn.supplyColors) ? yarn.supplyColors : [],
    notes: yarn.notes || ""
  }));

  next.commonGroups = next.commonGroups.map((group) => ({
    id: group.id || crypto.randomUUID(),
    name: group.name || "常用群組",
    stitchId: group.stitchId || next.stitches[0]?.id || "sc",
    count: Number(group.count || 1)
  }));

  next.tools = next.tools.map((tool) => ({
    id: tool.id || crypto.randomUUID(),
    name: tool.name || "未命名工具",
    brand: tool.brand || "",
    url: tool.url || ""
  }));

  return next;
}

function normalizePatternParts(pattern) {
  if (Array.isArray(pattern.parts) && pattern.parts.length) {
    return pattern.parts.map((part, index) => ({
      id: part.id || crypto.randomUUID(),
      name: part.name || `部分 ${index + 1}`,
      notes: part.notes || "",
      segments: Array.isArray(part.segments) ? part.segments.map(normalizeSegment) : []
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
    items: Array.isArray(segment.items) ? segment.items : []
  };
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
    const match = line.trim().match(/^(?:R|第)?\s*(\d+)(?:\s*[圈段])?\s*[:：]\s*(.+)$/i);
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

function findStitch(value) {
  const normalized = String(value).toLowerCase();
  return state.stitches.find((stitch) => [stitch.id, stitch.zh, stitch.abbr, stitch.symbol, stitch.letter].some((item) => String(item).toLowerCase() === normalized));
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
  return stitch[state.settings.displayMode] || stitch.abbr || stitch.zh;
}

function rowStitches(row) {
  const list = [];
  row.items.forEach((item) => {
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

function projectProgress(project) {
  const pattern = state.patterns.find((item) => item.id === project.activePatternId);
  if (!pattern) return { done: 0, total: 0, percent: 0 };
  return patternProgress(project, pattern);
}

function templatePatterns() {
  return state.patterns.filter((pattern) => !pattern.isProjectCopy);
}

function uniquePatternName(baseName, currentId = "") {
  const existing = new Set(templatePatterns().filter((pattern) => pattern.id !== currentId).map((pattern) => pattern.name.trim()));
  let name = baseName.trim() || "未命名織圖";
  if (!existing.has(name)) return name;
  let index = 2;
  while (existing.has(`${name} ${index}`)) index += 1;
  return `${name} ${index}`;
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
  const titles = { projects: "作品", detail: "專案詳細", track: "開始追蹤", patterns: "織圖", patternEdit: "編輯織圖", partEdit: "編輯部分", stash: "庫存", yarnEdit: "編輯線材", settings: "設定" };
  document.body.dataset.theme = state.settings.themeColor || "rose";
  els.screenTitle.textContent = titles[activeView] || "針跡手帳";
  els.backBtn.classList.toggle("hidden", !["detail", "track", "patternEdit", "partEdit", "yarnEdit"].includes(activeView));
  document.querySelector(".header-actions")?.classList.toggle("hidden", !["patterns", "patternEdit"].includes(activeView));
  els.navTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === activeView));
  els.views.forEach((view) => view.classList.toggle("active", view.id === `${activeView}View`));
}

function renderProjects() {
  els.projectList.innerHTML = "";
  state.projects
    .slice()
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || a.name.localeCompare(b.name, "zh-Hant"))
    .forEach((project) => {
    const progress = projectProgress(project);
    const card = document.createElement("button");
    card.className = `project-card ${project.pinned ? "pinned-card" : ""}`;
    card.innerHTML = `
      ${project.image ? `<img src="${project.image}" alt="">` : `<span class="empty-thumb">圖片</span>`}
      <span>
        <span class="card-title-row"><strong>${escapeHtml(project.name)}</strong><strong>${progress.percent}%</strong></span>
        <span class="progress-bar"><span style="width:${progress.percent}%"></span></span>
        <span class="meta-row"><span class="pill">${escapeHtml(project.type)}</span><span>${escapeHtml(formatRound(progress.done))} / ${escapeHtml(formatRound(progress.total))}</span></span>
      </span>
    `;
    let timer = null;
    let longPressed = false;
    card.addEventListener("pointerdown", () => {
      longPressed = false;
      timer = window.setTimeout(() => {
        longPressed = true;
        actionProjectId = project.id;
        els.projectActionTitle.textContent = project.name;
        els.pinProjectBtn.textContent = project.pinned ? "取消置頂" : "置頂";
        els.projectActionModal.classList.remove("hidden");
      }, 550);
    });
    card.addEventListener("pointerup", () => window.clearTimeout(timer));
    card.addEventListener("pointerleave", () => window.clearTimeout(timer));
    card.addEventListener("click", () => {
      if (longPressed) return;
      selectedProjectId = project.id;
      switchView("detail");
    });
    els.projectList.append(card);
  });
}

function renderDetail() {
  const project = currentProject();
  if (!project) return;
  const settingsPanel = document.querySelector("#projectForm")?.closest(".settings-card");
  const infoCard = document.querySelector(".info-card");
  const patternHeader = els.attachedPatternList?.previousElementSibling;
  if (settingsPanel && patternHeader && settingsPanel.nextElementSibling !== patternHeader) {
    patternHeader.before(settingsPanel);
  }
  if (settingsPanel) {
    settingsPanel.open = true;
    settingsPanel.querySelector("summary")?.classList.add("hidden");
  }
  if (infoCard) infoCard.classList.add("hidden");
  const progress = projectProgress(project);
  const yarnNames = (project.yarnIds || [])
    .map((id) => state.yarns.find((item) => item.id === id))
    .filter(Boolean)
    .map((yarn) => `${yarn.brand} · ${yarn.colorName}`);
  const toolNames = (project.toolIds || [])
    .map((id) => state.tools.find((item) => item.id === id))
    .filter(Boolean)
    .map((tool) => tool.brand ? `${tool.brand} · ${tool.name}` : tool.name);
  els.detailType.textContent = "作品";
  els.detailName.textContent = project.name;
  els.detailPercent.textContent = `${progress.percent}%`;
  els.detailProgressFill.style.width = `${progress.percent}%`;
  els.detailProgressText.textContent = `進度：${formatRound(progress.done)} / ${formatRound(progress.total)}`;
  els.detailStatus.textContent = project.status;
  els.detailYarn.textContent = yarnNames.length ? yarnNames.join("、") : "未綁定";
  els.detailNeedle.textContent = toolNames.length ? toolNames.join("、") : "依織圖工具";
  if (els.projectStatus) els.projectStatus.closest("label").style.display = "none";
  els.projectPhotoPicker.classList.toggle("has-photo", Boolean(project.image));
  els.projectPhoto.src = project.image || "";

  els.projectName.value = project.name;
  els.projectType.value = project.type;
  if (els.projectStatus) els.projectStatus.value = project.status;
  if (els.projectNeedle) els.projectNeedle.value = project.needle;
  els.projectNotes.value = project.notes;
  els.projectType.innerHTML = state.projectTypes.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join("");
  if (!state.projectTypes.includes(project.type)) {
    project.type = state.projectTypes[0] || "作品";
  }
  els.projectType.value = project.type;
  els.projectPatternSelect.innerHTML = templatePatterns().map((pattern) => `<option value="${pattern.id}">${escapeHtml(pattern.name)}</option>`).join("");
  const activePattern = state.patterns.find((pattern) => pattern.id === project.activePatternId);
  els.projectPatternSelect.value = activePattern?.sourcePatternId || activePattern?.id || "";
  renderMultiSelect(els.projectYarns, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "yarn").map((yarn) => ({ value: yarn.id, label: `${yarn.brand} · ${yarn.colorName}` })), project.yarnIds || [], (values) => updateProject({ yarnIds: values }), "搜尋線材");
  renderMultiSelect(els.projectTools, state.tools.map((tool) => ({ value: tool.id, label: tool.brand ? `${tool.brand} · ${tool.name}` : tool.name })), project.toolIds || [], (values) => updateProject({ toolIds: values }), "搜尋工具");

  els.attachedPatternList.innerHTML = "";
  const pattern = state.patterns.find((item) => item.id === project.activePatternId);
  if (!pattern) return;
  const itemProgress = patternProgress(project, pattern);
  const patternToolNames = (pattern.toolIds || []).map((id) => state.tools.find((tool) => tool.id === id)?.name).filter(Boolean);
  const patternSupplyNames = (pattern.supplyIds || []).map((id) => state.yarns.find((item) => item.id === id)?.colorName).filter(Boolean);
  const card = document.createElement("article");
  card.className = "attached-card";
  card.innerHTML = `
    <div class="card-title-row">
      <strong>${escapeHtml(pattern.name)}</strong>
    </div>
    <p>${pattern.source ? escapeHtml(pattern.source) : "無來源"}</p>
    <p>${patternToolNames.length ? escapeHtml(patternToolNames.join("、")) : "未指定工具"}${patternSupplyNames.length ? ` · ${escapeHtml(patternSupplyNames.join("、"))}` : ""}</p>
    <p>進度：第 ${itemProgress.done} / ${itemProgress.total} 段 (${itemProgress.percent}%)</p>
    <div class="part-link-list">
      ${pattern.parts.map((part) => `<button class="part-link" data-track-part="${part.id}">${escapeHtml(part.name)}<span>${escapeHtml(formatRoundRange(part.segments.reduce((sum, segment) => sum + Number(segment.repeat || 1), 0)))}</span></button>`).join("")}
    </div>
  `;
  els.attachedPatternList.append(card);
}

function renderTracking() {
  const pattern = currentPattern();
  const progress = currentProgress();
  if (!pattern) return;
  const rows = expandedRows(pattern);
  progress.currentRound = clamp(progress.currentRound, 1, rows.length);
  const row = rows[progress.currentRound - 1];
  const stitches = rowStitches(row);
  progress.currentStitch = clamp(progress.currentStitch, 1, stitches.length);

  els.roundTitle.textContent = `${row.partName || "部分"} · ${formatRound(row.round)}`;
  els.roundMeta.textContent = `共 ${rows.length} 段`;
  els.currentStitch.textContent = progress.currentStitch;
  els.totalStitches.textContent = stitches.length;

  els.legendList.innerHTML = state.stitches.map((stitch) => `<div><strong>${escapeHtml(stitch.symbol)}</strong> ${escapeHtml(stitch.zh)} <span>${escapeHtml(stitch[state.settings.displayMode] || stitch.abbr)}</span></div>`).join("");
  els.writtenPattern.innerHTML = "";
  rows.forEach((patternRow, rowIndex) => {
    const line = document.createElement("div");
    line.className = `pattern-line ${rowIndex < progress.completedRounds ? "completed" : ""}`;
    if (rowIndex !== progress.currentRound - 1) {
      line.innerHTML = `<span class="round-chip">${escapeHtml(patternRow.partName || "部分")} · ${escapeHtml(formatRound(patternRow.round))}</span><span>${escapeHtml(patternRow.note || summarizeItems(patternRow.items))}</span>`;
    } else {
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
  templatePatterns()
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || a.name.localeCompare(b.name, "zh-Hant"))
    .forEach((pattern) => {
    const rows = expandedRows(pattern);
    const card = document.createElement("button");
    card.className = `pattern-library-card ${pattern.pinned ? "pinned-card" : ""}`;
    card.innerHTML = `
      ${pattern.images[0] ? `<img src="${pattern.images[0]}" alt="">` : `<span class="empty-thumb">圖</span>`}
      <span>
        <strong>${escapeHtml(pattern.name)}</strong>
        <span class="meta-row"><span>${rows.length} 段</span><span>${pattern.source ? "有來源" : "無來源"}</span></span>
      </span>
    `;
    let timer = null;
    let longPressed = false;
    card.addEventListener("pointerdown", () => {
      longPressed = false;
      timer = window.setTimeout(() => {
        longPressed = true;
        actionPatternId = pattern.id;
        els.patternActionTitle.textContent = pattern.name;
        els.pinPatternBtn.textContent = pattern.pinned ? "取消置頂" : "置頂";
        els.patternActionModal.classList.remove("hidden");
      }, 550);
    });
    card.addEventListener("pointerup", () => window.clearTimeout(timer));
    card.addEventListener("pointerleave", () => window.clearTimeout(timer));
    card.addEventListener("click", () => {
      if (longPressed) return;
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
  renderMultiSelect(els.patternYarns, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "yarn").map((yarn) => ({ value: yarn.id, label: `${yarn.brand} · ${yarn.colorName}` })), pattern.yarnIds || [], (values) => { pattern.yarnIds = values; render(); }, "搜尋線材");
  renderMultiSelect(els.patternSupplies, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "supply").map((supply) => ({ value: supply.id, label: `${supply.brand} · ${supply.colorName}` })), pattern.supplyIds || [], (values) => { pattern.supplyIds = values; render(); }, "搜尋消耗品");
  renderMultiSelect(els.patternTools, state.tools.map((tool) => ({ value: tool.id, label: tool.brand ? `${tool.brand} · ${tool.name}` : tool.name })), pattern.toolIds || [], (values) => { pattern.toolIds = values; render(); }, "搜尋工具");
  els.patternImages.innerHTML = pattern.images.map((src, index) => `<button class="image-thumb" data-remove-image="${index}"><img src="${src}" alt="織圖圖片 ${index + 1}"><span>×</span></button>`).join("");
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

function renderPartEditor() {
  const pattern = editablePattern();
  const part = pattern?.parts.find((item) => item.id === selectedPartId) || pattern?.parts[0];
  if (!pattern || !part) return;
  selectedPartId = part.id;
  els.partEditTitle.textContent = part.name;
  els.partEditMeta.textContent = `共 ${part.segments.reduce((sum, segment) => sum + Number(segment.repeat || 1), 0)} 圈`;
  els.partName.value = part.name;
  els.partNotes.value = part.notes || "";
  els.partSegmentList.innerHTML = "";

  if (state.commonGroups.length) {
    const groups = document.createElement("div");
    groups.className = "group-bank";
    groups.innerHTML = `<h3>常用群組</h3>`;
    state.commonGroups.forEach((group) => {
      const chip = document.createElement("button");
      chip.className = "group-chip";
      chip.textContent = `${group.name} · ${displayStitch(group.stitchId)} × ${group.count}`;
      chip.addEventListener("click", () => {
        part.segments.push({ id: crypto.randomUUID(), repeat: 1, note: group.name, items: [{ stitchId: group.stitchId, count: group.count }] });
        render();
      });
      groups.append(chip);
    });
    els.partSegmentList.append(groups);
  }

  part.segments.forEach((segment) => {
    const card = document.createElement("article");
    card.className = "segment-card";
    card.innerHTML = `
      <div class="segment-head">
        <strong>${escapeHtml(segmentLabel(segment))}</strong>
        <span class="segment-actions">
          <button class="text-button" data-copy-segment="${segment.id}">複製</button>
          <button class="text-button" data-remove-segment="${segment.id}">刪除</button>
        </span>
      </div>
      <label>重複圈數<input type="number" min="1" value="${segment.repeat || 1}" data-segment-field="${segment.id}:repeat"></label>
      <label>段落備註<input value="${escapeHtml(segment.note || "")}" data-segment-field="${segment.id}:note"></label>
      <div class="item-list">${segment.items.map((item, index) => itemEditor(segment, item, index)).join("")}</div>
      <button class="outline-button full-width" data-add-item="${segment.id}">+ 新增針法</button>
    `;
    els.partSegmentList.append(card);
  });
}

function itemEditor(segment, item, index) {
  return `
    <div class="item-editor">
      <select data-item-field="${segment.id}:${index}:stitchId">
        ${state.stitches.map((stitch) => `<option value="${stitch.id}" ${stitch.id === item.stitchId ? "selected" : ""}>${escapeHtml(stitch.symbol)} ${escapeHtml(stitch.zh)} · ${escapeHtml(stitch.abbr)}</option>`).join("")}
      </select>
      <input type="number" min="1" value="${Number(item.count || 1)}" data-item-field="${segment.id}:${index}:count">
      <button class="text-button" data-remove-item="${segment.id}:${index}">×</button>
    </div>
  `;
}

function renderStash() {
  els.stashList.innerHTML = "";
  els.stockTypeTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.stockType === activeStockType);
  });
  state.yarns.filter((yarn) => (yarn.stockType || "yarn") === activeStockType).forEach((yarn) => {
    const card = document.createElement("button");
    card.className = "yarn-card";
    const meta = (yarn.stockType || "yarn") === "supply"
      ? `<span>${escapeHtml(yarn.brand)}</span><span>總數 ${Number(yarn.amount || 0)}</span>${(yarn.supplyColors || []).length ? `<span>${yarn.supplyColors.length} 色</span>` : ""}`
      : `<span>${escapeHtml(yarn.brand)}</span><span>${escapeHtml(yarn.category || "未分類")}</span><span>${escapeHtml(yarn.lot || "無色號")}</span><span>${Number(yarn.amount || 0)} 顆</span><span>${Number(yarn.weight || 0)} g</span>`;
    card.innerHTML = `${yarn.image ? `<img src="${yarn.image}" alt="">` : ""}<strong>${escapeHtml(yarn.colorName)}</strong><span class="meta-row">${meta}</span>`;
    card.addEventListener("click", () => {
      selectedYarnId = yarn.id;
      switchView("yarnEdit");
    });
    els.stashList.append(card);
  });
}

function renderYarnForm() {
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  els.yarnBrand.innerHTML = [...state.brands, "其他"].map((brand) => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join("");
  els.yarnCategory.innerHTML = state.categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  if (!yarn) return;
  const isSupply = (yarn.stockType || "yarn") === "supply";
  els.yarnEditTitle.textContent = isSupply ? "編輯消耗品" : "編輯線材";
  setLabelText(els.yarnColorName, isSupply ? "名稱" : "顏色");
  setLabelText(els.yarnAmount, isSupply ? "總數" : "數量");
  [els.yarnCategory, els.yarnLot, els.yarnWeight].forEach((field) => field.closest("label")?.classList.toggle("hidden", isSupply));
  els.supplyColorsSection.classList.toggle("hidden", !isSupply);
  els.yarnImagePreview.innerHTML = yarn.image ? `<button class="image-thumb" type="button"><img src="${yarn.image}" alt="庫存圖片"><span>×</span></button>` : "";
  els.yarnStockType.value = yarn.stockType || "yarn";
  els.yarnColorName.value = yarn.colorName;
  els.yarnBrand.value = state.brands.includes(yarn.brand) ? yarn.brand : "其他";
  els.yarnCategory.value = yarn.category || "未分類";
  els.yarnLot.value = yarn.lot;
  els.yarnAmount.value = yarn.amount;
  els.yarnWeight.value = yarn.weight;
  els.yarnUrl.value = yarn.url;
  els.yarnNotes.value = yarn.notes;
  els.supplyColorList.innerHTML = (yarn.supplyColors || []).map((item, index) => `
    <article class="supply-color-row">
      <input value="${escapeHtml(item.name || "")}" placeholder="顏色" data-supply-color-field="${index}:name">
      <input type="number" min="0" value="${Number(item.amount || 0)}" placeholder="數量" data-supply-color-field="${index}:amount">
      <button class="text-button" type="button" data-remove-supply-color="${index}">刪除</button>
    </article>
  `).join("");
}

function renderSettings() {
  const settingsView = document.querySelector("#settingsView");
  const displaySection = els.displayMode.closest("section");
  const toolSection = els.toolList.closest("section");
  const brandSection = els.brandList.closest("section");
  const categorySection = els.categoryList.closest("section");
  const projectTypeSection = els.projectTypeList.closest("section");
  const commonGroupSection = els.commonGroupList.closest("section");
  const stitchSection = els.stitchEditorList.closest("section");
  stitchSection.querySelector("h2").textContent = "針法";
  [displaySection, toolSection, brandSection, categorySection, projectTypeSection, commonGroupSection, stitchSection].forEach((section) => settingsView.append(section));

  els.displayMode.value = state.settings.displayMode;
  els.roundLabelMode.value = state.settings.roundLabelMode;
  if (els.themeColor) els.themeColor.value = state.settings.themeColor || "rose";
  const displayLabel = displaySection.querySelector("label");
  const displaySelect = displayLabel.querySelector("select");
  displayLabel.innerHTML = "針法顯示";
  displayLabel.append(displaySelect);
  displaySection.querySelector(".section-title")?.remove();
  const preferenceTitle = document.createElement("h2");
  preferenceTitle.className = "section-title";
  preferenceTitle.textContent = "偏好設定";
  displaySection.prepend(preferenceTitle);
  els.stitchEditorList.innerHTML = "";
  state.stitches.forEach((stitch) => {
    const row = document.createElement("article");
    row.className = "stitch-edit-card";
    row.innerHTML = `
      <label>符號<input value="${escapeHtml(stitch.symbol)}" data-stitch-field="${stitch.id}:symbol" aria-label="符號"></label>
      <label>中文<input value="${escapeHtml(stitch.zh)}" data-stitch-field="${stitch.id}:zh" aria-label="中文"></label>
      <label>簡計<input value="${escapeHtml(stitch.letter)}" data-stitch-field="${stitch.id}:letter" aria-label="簡計"></label>
      <label>英文縮寫<input value="${escapeHtml(stitch.abbr)}" data-stitch-field="${stitch.id}:abbr" aria-label="英文縮寫"></label>
      <button class="text-button delete-stitch-button" data-delete-stitch="${stitch.id}">刪除</button>
    `;
    els.stitchEditorList.append(row);
  });
  els.brandList.innerHTML = "";
  state.brands.forEach((brand, index) => {
    const row = document.createElement("article");
    row.className = "brand-row";
    row.innerHTML = `<strong>${escapeHtml(brand)}</strong><button class="text-button" data-remove-brand-index="${index}">刪除</button>`;
    els.brandList.append(row);
  });
  els.categoryList.innerHTML = "";
  state.categories.forEach((category, index) => {
    const row = document.createElement("article");
    row.className = "editable-list-row";
    row.innerHTML = `<label>分類名稱<input value="${escapeHtml(category)}" data-category-index="${index}" aria-label="庫存分類"></label><button class="text-button" data-remove-category-index="${index}">刪除</button>`;
    els.categoryList.append(row);
  });
  els.projectTypeList.innerHTML = "";
  state.projectTypes.forEach((type, index) => {
    const row = document.createElement("article");
    row.className = "editable-list-row";
    row.innerHTML = `<label>類型名稱<input value="${escapeHtml(type)}" data-project-type-index="${index}" aria-label="作品類型"></label><button class="text-button" data-remove-project-type-index="${index}">刪除</button>`;
    els.projectTypeList.append(row);
  });
  els.commonGroupList.innerHTML = "";
  state.commonGroups.forEach((group, index) => {
    const row = document.createElement("article");
    row.className = "common-group-row";
    row.innerHTML = `
      <label>群組名稱<input value="${escapeHtml(group.name)}" placeholder="例如：短針一圈" data-common-group-field="${index}:name"></label>
      <label>針法<select data-common-group-field="${index}:stitchId">
        ${state.stitches.map((stitch) => `<option value="${stitch.id}" ${stitch.id === group.stitchId ? "selected" : ""}>${escapeHtml(displayStitch(stitch.id))} · ${escapeHtml(stitch.zh)}</option>`).join("")}
      </select></label>
      <label>數量<input type="number" min="1" value="${Number(group.count || 1)}" data-common-group-field="${index}:count" aria-label="數量"></label>
      <button class="text-button" data-remove-common-group-index="${index}">刪除</button>
    `;
    els.commonGroupList.append(row);
  });
  els.toolList.innerHTML = "";
  state.tools.forEach((tool, index) => {
    const row = document.createElement("button");
    row.className = "tool-row";
    row.innerHTML = `
      <span class="drag-handle">☰</span>
      <span><strong>${escapeHtml(tool.name)}</strong>${tool.brand ? `<small>${escapeHtml(tool.brand)}</small>` : ""}${tool.url ? `<small>${escapeHtml(tool.url)}</small>` : ""}</span>`;
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
  return items.map((item) => `${displayStitch(item.stitchId)} × ${item.count}`).join("、");
}

function findSegment(pattern, segmentId) {
  for (const part of pattern.parts) {
    const segment = part.segments.find((item) => item.id === segmentId);
    if (segment) return { part, segment };
  }
  return {};
}

function switchView(view) {
  previousView = activeView;
  activeView = view;
  render();
}

function updateProject(patch) {
  Object.assign(currentProject(), patch);
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
  const scrollY = window.scrollY;
  callback();
  requestAnimationFrame(() => window.scrollTo({ top: scrollY }));
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

function showFinishToast(patternName) {
  els.finishToastText.textContent = `${patternName} 已經完成 100%。`;
  els.finishToast.classList.remove("hidden");
  setTimeout(() => {
    els.finishToast.classList.add("hidden");
    switchView("detail");
  }, 1500);
}

function openPatternPicker(onSelect) {
  els.attachPatternOptions.innerHTML = "";
  templatePatterns().forEach((pattern) => {
    const button = document.createElement("button");
    button.className = "pattern-library-card";
    button.innerHTML = `<span class="empty-thumb">Aa</span><span><strong>${escapeHtml(pattern.name)}</strong><span class="meta-row">${expandedRows(pattern).length} 段</span></span>`;
    button.addEventListener("click", () => onSelect(pattern.id));
    els.attachPatternOptions.append(button);
  });
  els.attachModal.classList.remove("hidden");
}

els.navTabs.forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
els.backBtn.addEventListener("click", () => switchView(activeView === "track" ? "detail" : activeView === "partEdit" ? "patternEdit" : activeView === "patternEdit" ? "patterns" : activeView === "yarnEdit" ? "stash" : "projects"));

els.newProjectBtn.addEventListener("click", () => {
  openPatternPicker((templateId) => {
    const project = {
      id: crypto.randomUUID(),
      name: `新作品 ${state.projects.length + 1}`,
      type: state.projectTypes[0] || "作品",
      status: "進行中",
      yarnIds: selectedYarnId ? [selectedYarnId] : [],
      needle: "",
      notes: "",
      image: "",
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

els.projectPhotoInput.addEventListener("change", () => readImages(els.projectPhotoInput.files, (src) => updateProject({ image: src })));
els.projectName.addEventListener("input", () => updateProject({ name: els.projectName.value }));
els.projectType.addEventListener("change", () => updateProject({ type: els.projectType.value }));
if (els.projectStatus) els.projectStatus.addEventListener("change", () => updateProject({ status: els.projectStatus.value }));
els.projectPatternSelect.addEventListener("change", () => {
  attachPatternCopy(currentProject(), els.projectPatternSelect.value);
  render();
});
if (els.projectNeedle) els.projectNeedle.addEventListener("input", () => updateProject({ needle: els.projectNeedle.value }));
els.projectNotes.addEventListener("input", () => updateProject({ notes: els.projectNotes.value }));
els.deleteProjectBtn.addEventListener("click", () => {
  if (state.projects.length <= 1) return;
  if (!confirm("確定要刪除此作品嗎？")) return;
  state.projects = state.projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = state.projects[0]?.id || null;
  switchView("projects");
});
els.pinProjectBtn.addEventListener("click", () => {
  const project = state.projects.find((item) => item.id === actionProjectId);
  if (!project) return;
  project.pinned = !project.pinned;
  els.projectActionModal.classList.add("hidden");
  render();
});
els.deleteProjectFromListBtn.addEventListener("click", () => {
  if (!actionProjectId || state.projects.length <= 1) return;
  if (!confirm("確定要刪除此作品嗎？")) return;
  state.projects = state.projects.filter((project) => project.id !== actionProjectId);
  selectedProjectId = state.projects[0]?.id || null;
  actionProjectId = null;
  els.projectActionModal.classList.add("hidden");
  render();
});
els.closeProjectActionModal.addEventListener("click", () => els.projectActionModal.classList.add("hidden"));

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

if (els.attachPatternBtn) {
  els.attachPatternBtn.addEventListener("click", () => {
    const project = currentProject();
    openPatternPicker((templateId) => {
      attachPatternCopy(project, templateId);
      els.attachModal.classList.add("hidden");
      render();
    });
  });
}
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
    showFinishToast(pattern.name);
  } else {
    render();
  }
});

els.newPatternBtn.addEventListener("click", () => {
  const baseName = "新織圖";
    const pattern = {
      id: crypto.randomUUID(),
      name: uniquePatternName(baseName),
      source: "",
      images: [],
      yarnIds: [],
      supplyIds: [],
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
  const pattern = state.patterns.find((item) => item.id === actionPatternId);
  if (!pattern) return;
  if (!pattern.pinned && templatePatterns().filter((item) => item.pinned).length >= 3) {
    alert("最多只能置頂 3 個織圖。");
    return;
  }
  pattern.pinned = !pattern.pinned;
  els.patternActionModal.classList.add("hidden");
  render();
});
els.deletePatternFromListBtn.addEventListener("click", () => {
  if (!actionPatternId) return;
  if (!confirm("確定要刪除此織圖嗎？")) return;
  state.patterns = state.patterns.filter((pattern) => pattern.id !== actionPatternId);
  state.projects.forEach((project) => {
    if (project.activePatternId === actionPatternId) {
      project.activePatternId = "";
      project.patternIds = [];
    }
  });
  actionPatternId = null;
  els.patternActionModal.classList.add("hidden");
  render();
});
els.closePatternActionModal.addEventListener("click", () => els.patternActionModal.classList.add("hidden"));
els.patternName.addEventListener("input", () => { editablePattern().name = els.patternName.value; saveState(); });
els.patternName.addEventListener("blur", () => {
  const pattern = editablePattern();
  pattern.name = uniquePatternName(pattern.name, pattern.id);
  render();
});
els.patternSource.addEventListener("input", () => { editablePattern().source = els.patternSource.value; render(); });
els.patternImageInput.addEventListener("change", () => readImages(els.patternImageInput.files, (src) => { editablePattern().images.push(src); render(); }));
els.addSegmentBtn.addEventListener("click", () => {
  const pattern = editablePattern();
  const part = pattern.parts.find((item) => item.id === selectedPartId) || pattern.parts[0];
  part.segments.push({ id: crypto.randomUUID(), repeat: 1, note: "", items: [] });
  render();
});
els.addPartBtn.addEventListener("click", () => {
  const pattern = editablePattern();
  pattern.parts.push({ id: crypto.randomUUID(), name: `部分 ${pattern.parts.length + 1}`, segments: [] });
  render();
});
els.addGroupBtn.addEventListener("click", () => {
  editablePattern().groups.push({ id: crypto.randomUUID(), name: `常用群組 ${editablePattern().groups.length + 1}`, items: [{ stitchId: "sc", count: 6 }] });
  render();
});
els.partName.addEventListener("input", () => {
  const part = editablePattern().parts.find((item) => item.id === selectedPartId);
  if (part) part.name = els.partName.value;
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
  }
  if (copySegment) {
    const { part, segment: source } = findSegment(pattern, copySegment);
    const sourceIndex = part.segments.findIndex((segment) => segment.id === copySegment);
    const duplicate = {
      ...structuredClone(source),
      id: crypto.randomUUID()
    };
    part.segments.splice(sourceIndex + 1, 0, duplicate);
  }
  if (addItem) findSegment(pattern, addItem).segment.items.push({ stitchId: state.stitches[0].id, count: 1 });
  if (removeItem) {
    const [segmentId, index] = removeItem.split(":");
    findSegment(pattern, segmentId).segment.items.splice(Number(index), 1);
  }
  render();
});
els.patternImages.addEventListener("click", (event) => {
  const index = event.target.closest("[data-remove-image]")?.dataset.removeImage;
  if (index !== undefined) {
    editablePattern().images.splice(Number(index), 1);
    render();
  }
});

els.newYarnBtn.addEventListener("click", () => {
  const yarn = { id: crypto.randomUUID(), stockType: activeStockType, colorName: activeStockType === "yarn" ? `新顏色 ${state.yarns.length + 1}` : `新消耗品 ${state.yarns.length + 1}`, brand: "未指定", category: "未分類", lot: "", amount: 1, weight: 0, url: "", image: "", supplyColors: [], notes: "" };
  state.yarns.unshift(yarn);
  selectedYarnId = yarn.id;
  switchView("yarnEdit");
});
els.stockTypeTabs.addEventListener("click", (event) => {
  const type = event.target.closest("[data-stock-type]")?.dataset.stockType;
  if (!type) return;
  activeStockType = type;
  render();
});
els.yarnImageInput.addEventListener("change", () => readImages(els.yarnImageInput.files, (src) => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.image = src; render(); }));
els.yarnImagePreview.addEventListener("click", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.image = ""; render(); });
els.yarnStockType.addEventListener("change", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.stockType = els.yarnStockType.value; activeStockType = els.yarnStockType.value; render(); });
els.yarnColorName.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.colorName = els.yarnColorName.value; saveState(); });
els.yarnBrand.addEventListener("change", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.brand = els.yarnBrand.value; render(); });
els.yarnCategory.addEventListener("change", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.category = els.yarnCategory.value; render(); });
els.yarnLot.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.lot = els.yarnLot.value; saveState(); });
els.yarnAmount.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.amount = Number(els.yarnAmount.value); saveState(); });
els.yarnWeight.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.weight = Number(els.yarnWeight.value); saveState(); });
els.yarnUrl.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.url = els.yarnUrl.value; saveState(); });
els.yarnNotes.addEventListener("input", () => { const yarn = state.yarns.find((item) => item.id === selectedYarnId); if (yarn) yarn.notes = els.yarnNotes.value; saveState(); });
els.addSupplyColorBtn.addEventListener("click", () => {
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (!yarn) return;
  yarn.supplyColors = yarn.supplyColors || [];
  yarn.supplyColors.push({ name: "", amount: 0 });
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
  saveState();
});
els.supplyColorList.addEventListener("click", (event) => {
  const index = event.target.closest("[data-remove-supply-color]")?.dataset.removeSupplyColor;
  const yarn = state.yarns.find((item) => item.id === selectedYarnId);
  if (index === undefined || !yarn) return;
  yarn.supplyColors.splice(Number(index), 1);
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

els.displayMode.addEventListener("change", () => { state.settings.displayMode = els.displayMode.value; render(); });
els.roundLabelMode.addEventListener("change", () => { state.settings.roundLabelMode = els.roundLabelMode.value; render(); });
if (els.themeColor) els.themeColor.addEventListener("change", () => { state.settings.themeColor = els.themeColor.value; render(); });
els.addStitchBtn.addEventListener("click", () => {
  state.stitches.push({ id: crypto.randomUUID(), zh: "新針法", abbr: "new", symbol: "*", letter: "N" });
  render();
});
els.addBrandBtn.addEventListener("click", () => {
  const brand = els.newBrandName.value.trim();
  if (!brand || state.brands.includes(brand)) return;
  state.brands.push(brand);
  els.newBrandName.value = "";
  render();
});
els.brandList.addEventListener("click", (event) => {
  const indexText = event.target.closest("[data-remove-brand-index]")?.dataset.removeBrandIndex;
  if (indexText === undefined) return;
  const brand = state.brands[Number(indexText)];
  if (!brand || brand === "未指定") return;
  state.brands = state.brands.filter((item) => item !== brand);
  state.yarns.forEach((yarn) => {
    if (yarn.brand === brand) yarn.brand = "未指定";
  });
  render();
});
els.addCategoryBtn.addEventListener("click", () => {
  const category = els.newCategoryName.value.trim();
  if (!category || state.categories.includes(category)) return;
  state.categories.push(category);
  els.newCategoryName.value = "";
  render();
});
els.categoryList.addEventListener("input", (event) => {
  const indexText = event.target.dataset.categoryIndex;
  if (indexText === undefined) return;
  const index = Number(indexText);
  const oldCategory = state.categories[index];
  const nextCategory = event.target.value;
  state.categories[index] = nextCategory;
  state.yarns.forEach((yarn) => {
    if (yarn.category === oldCategory) yarn.category = nextCategory;
  });
  saveState();
});
els.categoryList.addEventListener("click", (event) => {
  const indexText = event.target.closest("[data-remove-category-index]")?.dataset.removeCategoryIndex;
  if (indexText === undefined) return;
  const category = state.categories[Number(indexText)];
  if (!category || category === "未分類") return;
  state.categories = state.categories.filter((item) => item !== category);
  state.yarns.forEach((yarn) => {
    if (yarn.category === category) yarn.category = "未分類";
  });
  render();
});
els.addProjectTypeBtn.addEventListener("click", () => {
  const type = els.newProjectTypeName.value.trim();
  if (!type || state.projectTypes.includes(type)) return;
  state.projectTypes.push(type);
  els.newProjectTypeName.value = "";
  render();
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
  state.projectTypes.splice(Number(indexText), 1);
  const fallback = state.projectTypes[0] || "作品";
  state.projects.forEach((project) => {
    if (project.type === removed) project.type = fallback;
  });
  render();
});
els.addCommonGroupBtn.addEventListener("click", () => {
  state.commonGroups.push({ id: crypto.randomUUID(), name: `常用群組 ${state.commonGroups.length + 1}`, stitchId: state.stitches[0]?.id || "sc", count: 1 });
  keepScroll(render);
});
els.commonGroupList.addEventListener("input", (event) => {
  const field = event.target.dataset.commonGroupField;
  if (!field) return;
  const [index, key] = field.split(":");
  const group = state.commonGroups[Number(index)];
  if (!group) return;
  group[key] = key === "count" ? Math.max(1, Number(event.target.value || 1)) : event.target.value;
  saveState();
});
els.commonGroupList.addEventListener("change", (event) => {
  const field = event.target.dataset.commonGroupField;
  if (!field) return;
  const [index, key] = field.split(":");
  const group = state.commonGroups[Number(index)];
  if (!group) return;
  group[key] = key === "count" ? Math.max(1, Number(event.target.value || 1)) : event.target.value;
  saveState();
});
els.commonGroupList.addEventListener("click", (event) => {
  const indexText = event.target.closest("[data-remove-common-group-index]")?.dataset.removeCommonGroupIndex;
  if (indexText === undefined) return;
  state.commonGroups.splice(Number(indexText), 1);
  render();
});
els.addToolBtn.addEventListener("click", () => {
  const name = els.newToolName.value.trim();
  if (!name) return;
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
els.stitchEditorList.addEventListener("input", (event) => {
  const field = event.target.dataset.stitchField;
  if (!field) return;
  const [id, key] = field.split(":");
  const stitch = state.stitches.find((item) => item.id === id);
  stitch[key] = event.target.value;
  saveState();
});
els.stitchEditorList.addEventListener("click", (event) => {
  const stitchId = event.target.closest("[data-delete-stitch]")?.dataset.deleteStitch;
  if (!stitchId || state.stitches.length <= 1) return;
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

els.exportBtn.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "針跡手帳資料.json";
  link.click();
  URL.revokeObjectURL(url);
});
els.importInput.addEventListener("change", async () => {
  const file = els.importInput.files?.[0];
  if (!file) return;
  state = normalizeState(JSON.parse(await file.text()));
  selectedProjectId = state.projects[0]?.id || null;
  selectedPatternId = state.patterns[0]?.id || null;
  selectedYarnId = state.yarns[0]?.id || null;
  render();
});

if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");
render();
