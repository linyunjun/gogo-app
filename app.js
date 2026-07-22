const STORAGE_KEY = "free-knit-workbench-v3";
const OLD_KEYS = ["free-knit-workbench-v2", "free-knit-workbench-v1"];
const PATTERN_SHARE_VERSION = 1;
const DEFAULT_BRAND = "未指定";
const DEFAULT_CATEGORY = "未分類";

const DEFAULT_BRANDS = [DEFAULT_BRAND, "DMC", "Olympus", "Hamanaka", "Clover", "毛線球牧場", "小織物", "野呂英作", "Drops", "Rico Design"];

const defaultStitches = [
  { id: "mr", zh: "魔術環", abbr: "mr", letter: "O" },
  { id: "ch", zh: "鎖針", abbr: "ch", letter: "C" },
  { id: "slst", zh: "引拔針", abbr: "sl st", letter: "S" },
  { id: "sc", zh: "短針", abbr: "sc", letter: "X" },
  { id: "hdc", zh: "中長針", abbr: "hdc", letter: "H" },
  { id: "dc", zh: "長針", abbr: "dc", letter: "D" },
  { id: "tr", zh: "長長針", abbr: "tr", letter: "TR" },
  { id: "picot", zh: "結粒針", abbr: "ch-3 picot", letter: "P" },
  { id: "scinc", zh: "2 短針加針", abbr: "sc inc", letter: "V" },
  { id: "sc3inc", zh: "3 短針加針", abbr: "sc3inc", letter: "W" },
  { id: "hdcinc", zh: "2 中長針加針", abbr: "hdc inc", letter: "HV" }
];

const defaultPatternId = crypto.randomUUID();
const defaultProjectId = crypto.randomUUID();
const defaultYarnId = crypto.randomUUID();
const defaultToolId = crypto.randomUUID();

const defaultState = {
  settings: { displayMode: "abbr", roundLabelMode: "r", themeColor: "rose", projectSort: "pinned-desc", patternSort: "pinned-desc" },
  brands: structuredClone(DEFAULT_BRANDS),
  categories: [DEFAULT_CATEGORY],
  projectTypes: ["包包", "娃娃", "衣物", "配件", "其他"],
  commonGroups: [
    { id: crypto.randomUUID(), name: "短針組", items: [{ stitchId: "sc" }, { stitchId: "sc" }] },
    { id: crypto.randomUUID(), name: "加針組", items: [{ stitchId: "sc" }, { stitchId: "scinc" }] }
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
let actionYarnId = null;
let selectedProjectIds = new Set();
let selectedPatternIds = new Set();
let selectedYarnIds = new Set();
let editingCommonGroupId = null;
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
  attachedPatternList: document.querySelector("#attachedPatternList"),
  attachModal: document.querySelector("#attachModal"),
  attachPatternOptions: document.querySelector("#attachPatternOptions"),
  closeAttachModal: document.querySelector("#closeAttachModal"),
  projectName: document.querySelector("#projectName"),
  projectType: document.querySelector("#projectType"),
  projectPatternSelect: document.querySelector("#projectPatternSelect"),
  projectYarns: document.querySelector("#projectYarns"),
  projectTools: document.querySelector("#projectTools"),
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
  patternSort: document.querySelector("#patternSort"),
  newPatternBtn: document.querySelector("#newPatternBtn"),
  importPatternBtn: document.querySelector("#importPatternBtn"),
  patternImportInput: document.querySelector("#patternImportInput"),
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
  resetDataBtn: document.querySelector("#resetDataBtn"),
  toolEditModal: document.querySelector("#toolEditModal"),
  closeToolEditModal: document.querySelector("#closeToolEditModal"),
  editToolName: document.querySelector("#editToolName"),
  editToolBrand: document.querySelector("#editToolBrand"),
  editToolUrl: document.querySelector("#editToolUrl"),
  deleteToolBtn: document.querySelector("#deleteToolBtn"),
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
  deleteProjectFromListBtn: document.querySelector("#deleteProjectFromListBtn"),
  stashActionModal: document.querySelector("#stashActionModal"),
  closeStashActionModal: document.querySelector("#closeStashActionModal"),
  stashActionTitle: document.querySelector("#stashActionTitle"),
  pinStashBtn: document.querySelector("#pinStashBtn"),
  shareStashBtn: document.querySelector("#shareStashBtn"),
  deleteStashFromListBtn: document.querySelector("#deleteStashFromListBtn"),
  partActionModal: document.querySelector("#partActionModal"),
  closePartActionModal: document.querySelector("#closePartActionModal"),
  partActionTitle: document.querySelector("#partActionTitle"),
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
  const brands = [DEFAULT_BRAND, ...inputBrands.filter((brand) => brand && brand !== DEFAULT_BRAND)];
  const next = {
    settings: { ...defaultState.settings, ...(input.settings || {}) },
    brands,
    categories: [DEFAULT_CATEGORY, ...((Array.isArray(input.categories) && input.categories.length ? input.categories : [DEFAULT_CATEGORY]).filter((category) => category && category !== DEFAULT_CATEGORY))],
    projectTypes: Array.isArray(input.projectTypes) && input.projectTypes.length ? input.projectTypes : structuredClone(defaultState.projectTypes),
    commonGroups: Array.isArray(input.commonGroups) ? input.commonGroups : structuredClone(defaultState.commonGroups),
    tools: Array.isArray(input.tools) ? input.tools : structuredClone(defaultState.tools),
    stitches: Array.isArray(input.stitches) && input.stitches.length ? input.stitches : structuredClone(defaultStitches),
    patterns: Array.isArray(input.patterns) && input.patterns.length ? input.patterns : structuredClone(defaultState.patterns),
    projects: Array.isArray(input.projects) ? input.projects : structuredClone(defaultState.projects),
    yarns: Array.isArray(input.yarns) ? input.yarns : structuredClone(defaultState.yarns)
  };
  if (next.settings.displayMode === "symbol") {
    next.settings.displayMode = "abbr";
  }

  next.patterns = next.patterns.map((pattern) => ({
    id: pattern.id || crypto.randomUUID(),
    name: pattern.name || "未命名織圖",
    createdAt: pattern.createdAt || new Date().toISOString(),
    updatedAt: pattern.updatedAt || pattern.createdAt || new Date().toISOString(),
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
      createdAt: project.createdAt || new Date().toISOString(),
      updatedAt: project.updatedAt || project.createdAt || new Date().toISOString(),
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

  next.stitches = next.stitches.map((stitch) => ({
    id: stitch.id || crypto.randomUUID(),
    zh: stitch.zh || "新針法",
    abbr: stitch.abbr || "new",
    letter: stitch.letter || ""
  }));

  next.yarns = next.yarns.map((yarn) => ({
    id: yarn.id || crypto.randomUUID(),
    stockType: yarn.stockType || "yarn",
    pinned: Boolean(yarn.pinned),
    colorName: yarn.colorName || yarn.name || "未命名顏色",
    brand: yarn.brand || "未指定",
      category: yarn.category || DEFAULT_CATEGORY,
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
    items: normalizeGroupItems(group, next.stitches[0]?.id || "sc")
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
  return state.stitches.find((stitch) => [stitch.id, stitch.zh, stitch.abbr, stitch.letter].some((item) => String(item).toLowerCase() === normalized));
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
  return stitch[state.settings.displayMode] || stitch.abbr || stitch.zh;
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

function cleanPatternForShare(pattern) {
  const copy = structuredClone(pattern);
  copy.id = crypto.randomUUID();
  delete copy.pinned;
  delete copy.isProjectCopy;
  delete copy.sourcePatternId;
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

function encodeSharePayload(payload) {
  return encodeURIComponent(JSON.stringify(payload));
}

function decodeSharePayload(value) {
  return JSON.parse(decodeURIComponent(value));
}

function importPatternPackage(payload) {
  const pattern = payload?.type === "gogo-pattern" ? payload.pattern : payload?.pattern || payload;
  if (!pattern || typeof pattern !== "object") throw new Error("不是可匯入的織圖檔");
  const normalized = normalizeState({ ...state, patterns: [pattern] }).patterns[0];
  normalized.id = crypto.randomUUID();
  normalized.name = uniquePatternName(normalized.name);
  normalized.pinned = false;
  delete normalized.isProjectCopy;
  delete normalized.sourcePatternId;
  state.patterns.unshift(normalized);
  selectedPatternId = normalized.id;
  saveState();
  return normalized;
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
    if (confirm(`要匯入「${name}」到自己的織圖庫嗎？`)) {
      const pattern = importPatternPackage(payload);
      history.replaceState(null, "", location.pathname + location.search);
      selectedPatternId = pattern.id;
      switchView("patternEdit");
      alert("已匯入織圖。");
    }
  } catch {
    alert("這個分享連結無法匯入。");
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
      history.replaceState(null, "", location.pathname + location.search);
      activeStockType = imported[0]?.stockType || "yarn";
      switchView("stash");
      alert("已匯入庫存。");
    }
  } catch {
    alert("這個庫存分享連結無法匯入。");
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
  sortedProjects().forEach((project) => {
    const progress = projectProgress(project);
    const card = document.createElement("button");
    card.className = `project-card ${project.pinned ? "pinned-card" : ""} ${selectedProjectIds.has(project.id) ? "selected-card" : ""}`;
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

  els.projectName.value = project.name;
  els.projectType.value = project.type;
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
  renderMultiSelect(els.projectTools, state.tools.map((tool) => ({ value: tool.id, label: tool.brand ? `${tool.brand} · ${tool.name}` : tool.name })), project.toolIds || [], (values) => { project.toolIds = values; project.updatedAt = new Date().toISOString(); saveState(); }, "搜尋工具");

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

  els.legendList.innerHTML = state.stitches.map((stitch) => `<div><strong>${escapeHtml(stitch.zh)}</strong><span>${escapeHtml(stitch[state.settings.displayMode] || stitch.abbr)}</span></div>`).join("");
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
  sortedTemplatePatterns().forEach((pattern) => {
    const rows = expandedRows(pattern);
    const card = document.createElement("button");
    card.className = `pattern-library-card ${pattern.pinned ? "pinned-card" : ""} ${selectedPatternIds.has(pattern.id) ? "selected-card" : ""}`;
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
  renderMultiSelect(els.patternYarns, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "yarn").map((yarn) => ({ value: yarn.id, label: stockLabel(yarn) })), pattern.yarnIds || [], (values) => { pattern.yarnIds = values; pattern.updatedAt = new Date().toISOString(); saveState(); }, "搜尋線材");
  renderMultiSelect(els.patternSupplies, state.yarns.filter((yarn) => (yarn.stockType || "yarn") === "supply").map((supply) => ({ value: supply.id, label: stockLabel(supply) })), pattern.supplyIds || [], (values) => { pattern.supplyIds = values; pattern.updatedAt = new Date().toISOString(); saveState(); }, "搜尋消耗品");
  renderMultiSelect(els.patternTools, state.tools.map((tool) => ({ value: tool.id, label: tool.brand ? `${tool.brand} · ${tool.name}` : tool.name })), pattern.toolIds || [], (values) => { pattern.toolIds = values; pattern.updatedAt = new Date().toISOString(); saveState(); }, "搜尋工具");
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
    const meta = (yarn.stockType || "yarn") === "supply"
      ? `<span>總數 ${Number(yarn.amount || 0)}</span>${(yarn.supplyColors || []).length ? `<span>${yarn.supplyColors.length} 色</span>` : ""}`
      : `<span>${escapeHtml(yarn.brand)}</span><span>${escapeHtml(yarn.category || "未分類")}</span><span>${escapeHtml(yarn.lot || "無色號")}</span><span>${Number(yarn.amount || 0)} 顆</span><span>${Number(yarn.weight || 0)} g</span>`;
    card.innerHTML = `${yarn.image ? `<img src="${yarn.image}" alt="">` : ""}<strong>${escapeHtml(yarn.colorName)}</strong><span class="meta-row">${meta}</span>`;
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
  els.yarnCategory.innerHTML = state.categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  if (!yarn) return;
  const isSupply = (yarn.stockType || "yarn") === "supply";
  els.yarnEditTitle.textContent = isSupply ? "編輯消耗品" : "編輯線材";
  setLabelText(els.yarnColorName, isSupply ? "名稱" : "顏色");
  setLabelText(els.yarnAmount, isSupply ? "總數" : "數量");
  if (isSupply) {
    yarn.amount = (yarn.supplyColors || []).reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }
  [els.yarnCategory, els.yarnLot, els.yarnWeight, els.yarnBrand].forEach((field) => field.closest("label")?.classList.toggle("hidden", isSupply));
  els.supplyColorsSection.classList.toggle("hidden", !isSupply);
  els.yarnImagePreview.innerHTML = yarn.image ? `<button class="image-thumb" type="button"><img src="${yarn.image}" alt="庫存圖片"><span>×</span></button>` : "";
  els.yarnStockType.value = yarn.stockType || "yarn";
  els.yarnColorName.value = yarn.colorName;
  els.yarnBrand.value = state.brands.includes(yarn.brand) ? yarn.brand : "其他";
  els.yarnCategory.value = yarn.category || "未分類";
  els.yarnLot.value = yarn.lot;
  els.yarnAmount.value = yarn.amount;
  els.yarnAmount.readOnly = isSupply;
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
  const displaySection = els.displayMode.closest(".settings-card");
  const toolSection = els.toolList.closest(".settings-card");
  const brandSection = els.brandList.closest(".settings-card");
  const categorySection = els.categoryList.closest(".settings-card");
  const projectTypeSection = els.projectTypeList.closest(".settings-card");
  const commonGroupSection = els.commonGroupList.closest(".settings-card");
  const stitchSection = els.stitchEditorList.closest(".settings-card");
  const resetSection = els.resetDataBtn.closest(".settings-card");
  [displaySection, toolSection, brandSection, categorySection, projectTypeSection, commonGroupSection, stitchSection, resetSection].forEach((section) => settingsView.append(section));

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
      <label>英文縮寫<input value="${escapeHtml(stitch.abbr)}" data-stitch-field="${stitch.id}:abbr" aria-label="英文縮寫"></label>
      <button class="text-button delete-stitch-button" data-delete-stitch="${stitch.id}">刪除</button>
    `;
    els.stitchEditorList.append(row);
  });
  els.brandList.innerHTML = "";
  state.brands.filter((brand) => brand !== DEFAULT_BRAND).forEach((brand) => {
    const row = document.createElement("article");
    row.className = "brand-row";
    row.draggable = true;
    row.dataset.brandRow = brand;
    row.innerHTML = `<span class="drag-handle settings-drag-handle">☰</span><strong>${escapeHtml(brand)}</strong><button class="text-button" data-remove-brand="${escapeHtml(brand)}">刪除</button>`;
    els.brandList.append(row);
  });
  els.categoryList.innerHTML = "";
  state.categories.filter((category) => category !== DEFAULT_CATEGORY).forEach((category) => {
    const row = document.createElement("article");
    row.className = "brand-row";
    row.draggable = true;
    row.dataset.categoryRow = category;
    row.innerHTML = `<span class="drag-handle settings-drag-handle">☰</span><input value="${escapeHtml(category)}" data-category-name="${escapeHtml(category)}" aria-label="線材分類"><button class="text-button" data-remove-category="${escapeHtml(category)}">刪除</button>`;
    els.categoryList.append(row);
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
    row.className = "tool-row";
    row.draggable = true;
    row.dataset.toolRow = tool.id;
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
    <button class="tool-row common-group-display" data-pick-common-group="${group.id}">
      <span><strong>${escapeHtml(group.name)}</strong><small>${escapeHtml(groupDisplay(group))}</small></span>
      <span class="segment-total">加入</span>
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

function switchView(view) {
  previousView = activeView;
  activeView = view;
  render();
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
  const scrollY = window.scrollY;
  callback();
  requestAnimationFrame(() => window.scrollTo({ top: scrollY }));
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
els.projectSort.addEventListener("change", () => { state.settings.projectSort = els.projectSort.value; render(); });
els.patternSort.addEventListener("change", () => { state.settings.patternSort = els.patternSort.value; render(); });

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
els.importPatternBtn.addEventListener("click", () => els.patternImportInput.click());
els.patternImportInput.addEventListener("change", async () => {
  const file = els.patternImportInput.files?.[0];
  if (!file) return;
  try {
    const pattern = importPatternPackage(JSON.parse(await file.text()));
    els.patternImportInput.value = "";
    selectedPatternId = pattern.id;
    switchView("patternEdit");
    alert("已匯入織圖。");
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
els.patternImageInput.addEventListener("change", () => readImages(els.patternImageInput.files, (src) => { const pattern = editablePattern(); pattern.images.push(src); pattern.updatedAt = new Date().toISOString(); render(); }));
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
  if ((yarn.stockType || "yarn") === "supply") {
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
  const firstConfirm = confirm("確定要清除這台裝置裡的所有資料嗎？\n\n作品、織圖、庫存、工具、設定都會被刪除，並回到目前 APP 的預設內容。這個動作無法復原。");
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
  alert("已清除資料，並回到目前預設內容。");
});
els.addStitchBtn.addEventListener("click", () => {
  keepScroll(() => {
    state.stitches.push({ id: crypto.randomUUID(), zh: "新針法", abbr: "new", letter: "N" });
    render();
  });
});
els.addBrandBtn.addEventListener("click", () => {
  const brand = els.newBrandName.value.trim();
  if (!brand || state.brands.includes(brand)) return;
  keepScroll(() => {
    state.brands.push(brand);
    els.newBrandName.value = "";
    render();
  });
});
els.brandList.addEventListener("click", (event) => {
  const brand = event.target.closest("[data-remove-brand]")?.dataset.removeBrand;
  if (!brand || brand === DEFAULT_BRAND) return;
  keepScroll(() => {
    state.brands = state.brands.filter((item) => item !== brand);
    state.yarns.forEach((yarn) => {
      if (yarn.brand === brand) yarn.brand = DEFAULT_BRAND;
    });
    render();
  });
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
els.addCategoryBtn.addEventListener("click", () => {
  const category = els.newCategoryName.value.trim();
  if (!category || state.categories.includes(category)) return;
  keepScroll(() => {
    state.categories.push(category);
    els.newCategoryName.value = "";
    render();
  });
});
els.categoryList.addEventListener("input", (event) => {
  const oldCategory = event.target.dataset.categoryName;
  if (!oldCategory || oldCategory === DEFAULT_CATEGORY) return;
  const nextCategory = event.target.value;
  state.categories = state.categories.map((category) => category === oldCategory ? nextCategory : category);
  event.target.dataset.categoryName = nextCategory;
  state.yarns.forEach((yarn) => {
    if (yarn.category === oldCategory) yarn.category = nextCategory;
  });
  saveState();
});
els.categoryList.addEventListener("click", (event) => {
  const category = event.target.closest("[data-remove-category]")?.dataset.removeCategory;
  if (!category || category === DEFAULT_CATEGORY) return;
  keepScroll(() => {
    state.categories = state.categories.filter((item) => item !== category);
    state.yarns.forEach((yarn) => {
      if (yarn.category === category) yarn.category = DEFAULT_CATEGORY;
    });
    render();
  });
});
els.categoryList.addEventListener("dragstart", (event) => {
  const row = event.target.closest("[data-category-row]");
  if (row) event.dataTransfer.setData("text/category-row", row.dataset.categoryRow);
});
els.categoryList.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-category-row]")) event.preventDefault();
});
els.categoryList.addEventListener("drop", (event) => {
  const row = event.target.closest("[data-category-row]");
  if (!row) return;
  event.preventDefault();
  if (moveNamedSetting(state.categories, event.dataTransfer.getData("text/category-row"), row.dataset.categoryRow, DEFAULT_CATEGORY)) render();
});
els.addProjectTypeBtn.addEventListener("click", () => {
  const type = els.newProjectTypeName.value.trim();
  if (!type || state.projectTypes.includes(type)) return;
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
  const group = {
    id: crypto.randomUUID(),
    name: `常用群組 ${state.commonGroups.length + 1}`,
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

if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");
render();
checkSharedPatternFromUrl();
checkSharedStashFromUrl();
