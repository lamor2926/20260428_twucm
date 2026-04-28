const TODAY = "2026-04-28";

const loginScreen = document.getElementById("login-screen");
const dashboardScreen = document.getElementById("dashboard-screen");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginStatus = document.getElementById("login-status");
const logoutButton = document.getElementById("logout-button");
const pageTitle = document.getElementById("page-title");
const breadcrumb = document.getElementById("breadcrumb");
const navItems = Array.from(document.querySelectorAll(".nav-item[data-view]"));
const views = {
  products: document.getElementById("products-view"),
  orders: document.getElementById("orders-view"),
  "category-pages": document.getElementById("category-pages-view"),
  stores: document.getElementById("stores-view"),
  "spec-tags": document.getElementById("spec-tags-view"),
  system: document.getElementById("system-view"),
};

const confirmDialog = document.getElementById("confirm-dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogMessage = document.getElementById("dialog-message");
const dialogConfirmButton = document.getElementById("dialog-confirm-button");

const storeDialog = document.getElementById("store-dialog");
const storeForm = document.getElementById("store-form");
const storeNameInput = document.getElementById("store-name-input");
const storeCodeInput = document.getElementById("store-code-input");
const storeFormStatus = document.getElementById("store-form-status");

const categoryDialog = document.getElementById("category-dialog");
const categoryForm = document.getElementById("category-form");
const categoryNameInput = document.getElementById("category-name-input");
const categoryFormStatus = document.getElementById("category-form-status");

const tagDialog = document.getElementById("tag-dialog");
const tagForm = document.getElementById("tag-form");
const tagDialogTitle = document.getElementById("tag-dialog-title");
const tagNameInput = document.getElementById("tag-name-input");
const tagSkuInput = document.getElementById("tag-sku-input");
const tagImageInput = document.getElementById("tag-image-input");
const tagImagePreview = document.getElementById("tag-image-preview");
const tagImagePlaceholder = document.getElementById("tag-image-placeholder");
const removeTagImageButton = document.getElementById("remove-tag-image-button");
const tagCloseDateInput = document.getElementById("tag-close-date-input");
const tagFormStatus = document.getElementById("tag-form-status");
const tagSubmitButton = document.getElementById("tag-submit-button");

const rowTemplate = document.getElementById("product-row-template");
const productListScreen = document.getElementById("product-list-screen");
const productDetailScreen = document.getElementById("product-detail-screen");
const tableBody = document.getElementById("product-table-body");
const selectAllCheckbox = document.getElementById("select-all");
const selectedCount = document.getElementById("selected-count");
const addProductButton = document.getElementById("add-product-button");
const filterForm = document.getElementById("product-filter-form");
const searchNameInput = document.getElementById("search-name");
const searchCategorySelect = document.getElementById("search-category");
const searchStatusSelect = document.getElementById("search-status");
const clearFilterButton = document.getElementById("clear-filter-button");
const batchPublishButton = document.getElementById("batch-publish");
const batchUnpublishButton = document.getElementById("batch-unpublish");
const batchDeleteButton = document.getElementById("batch-delete");
const backToProductsButton = document.getElementById("back-to-products-button");
const productDetailTitle = document.getElementById("product-detail-title");
const productTabButtons = Array.from(document.querySelectorAll("[data-product-tab]"));
const productTabPanels = {
  info: document.getElementById("product-tab-info"),
  description: document.getElementById("product-tab-description"),
  settings: document.getElementById("product-tab-settings"),
  variants: document.getElementById("product-tab-variants"),
  tags: document.getElementById("product-tab-tags"),
};
const productNameInput = document.getElementById("product-name-input");
const productPriceInput = document.getElementById("product-price-input");
const productMainSkuInput = document.getElementById("product-main-sku-input");
const productUrlInput = document.getElementById("product-url-input");
const productUrlPreview = document.getElementById("product-url-preview");
const productStatusInput = document.getElementById("product-status-input");
const productSearchToggle = document.getElementById("product-search-toggle");
const productSloganMode = document.getElementById("product-slogan-mode");
const productSloganInput = document.getElementById("product-slogan-input");
const productSummaryMode = document.getElementById("product-summary-mode");
const productSummaryInput = document.getElementById("product-summary-input");
const productImageDropzone = document.getElementById("product-image-dropzone");
const productImagesInput = document.getElementById("product-images-input");
const productImageStatus = document.getElementById("product-image-status");
const productImagePreviewList = document.getElementById("product-image-preview-list");
const productIntroMode = document.getElementById("product-intro-mode");
const productIntroInput = document.getElementById("product-intro-input");
const productSpecMode = document.getElementById("product-spec-mode");
const productSpecInput = document.getElementById("product-spec-input");
const productShippingMode = document.getElementById("product-shipping-mode");
const productShippingInput = document.getElementById("product-shipping-input");
const productCustomCategoryOptions = document.getElementById("product-custom-category-options");
const productDiscountGroup = document.getElementById("product-discount-group");
const productCyberbizTags = document.getElementById("product-cyberbiz-tags");
const productType = document.getElementById("product-type");
const productChannelOptions = document.getElementById("product-channel-options");
const productVendor = document.getElementById("product-vendor");
const productGoogleCategory = document.getElementById("product-google-category");
const productSeoTitle = document.getElementById("product-seo-title");
const productSeoDescription = document.getElementById("product-seo-description");
const productSeoKeywords = document.getElementById("product-seo-keywords");
const addVariantButton = document.getElementById("add-variant-button");
const variantStatusText = document.getElementById("variant-status-text");
const variantList = document.getElementById("variant-list");
const saveProductButtonTop = document.getElementById("save-product-button-top");
const saveProductButtonBottom = document.getElementById("save-product-button-bottom");
const productSaveStatus = document.getElementById("product-save-status");

const exportForm = document.getElementById("export-form");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const orderStatusSelect = document.getElementById("order-status");
const exportStatus = document.getElementById("export-status");

const categoryPageListScreen = document.getElementById("category-page-list-screen");
const categoryPageDetailScreen = document.getElementById("category-page-detail-screen");
const categoryPageTableBody = document.getElementById("category-page-table-body");
const addCategoryPageButton = document.getElementById("add-category-page-button");
const backToCategoryPagesButton = document.getElementById("back-to-category-pages-button");
const categoryPageDetailTitle = document.getElementById("category-page-detail-title");
const categoryPageNameInput = document.getElementById("category-page-name");
const categoryPageEnNameInput = document.getElementById("category-page-en-name");
const categoryPageSubtitleInput = document.getElementById("category-page-subtitle");
const categoryPageStatusSelect = document.getElementById("category-page-status");
const categoryBannerInput = document.getElementById("category-banner-input");
const categoryBannerPreview = document.getElementById("category-banner-preview");
const categoryBannerPlaceholder = document.getElementById("category-banner-placeholder");
const replaceCategoryBannerButton = document.getElementById("replace-category-banner-button");
const removeCategoryBannerButton = document.getElementById("remove-category-banner-button");
const categoryFilterGroups = document.getElementById("category-filter-groups");
const productsPerRowInput = document.getElementById("products-per-row");
const rowCountInput = document.getElementById("row-count");
const pageSizeInput = document.getElementById("page-size");
const loadStyleSelect = document.getElementById("load-style");
const saveCategoryPageButton = document.getElementById("save-category-page-button");
const generateCategoryCodeButton = document.getElementById("generate-category-code-button");
const copyCategoryCodeButton = document.getElementById("copy-category-code-button");
const categoryCodeOutput = document.getElementById("category-code-output");
const categoryPageStatusText = document.getElementById("category-page-status-text");

const storeListScreen = document.getElementById("store-list-screen");
const storeDetailScreen = document.getElementById("store-detail-screen");
const storeTableBody = document.getElementById("store-table-body");
const addStoreButton = document.getElementById("add-store-button");
const backToStoresButton = document.getElementById("back-to-stores-button");
const storeDetailTitle = document.getElementById("store-detail-title");
const storeProductFilterForm = document.getElementById("store-product-filter-form");
const storeProductSearchInput = document.getElementById("store-product-search");
const storeProductSortSelect = document.getElementById("store-product-sort");
const storeSelectAllCheckbox = document.getElementById("store-select-all");
const storeProductTableBody = document.getElementById("store-product-table-body");
const saveStoreProductsButton = document.getElementById("save-store-products-button");
const storeSaveStatus = document.getElementById("store-save-status");

const tagCategoryList = document.getElementById("tag-category-list");
const tagPanelTitle = document.getElementById("tag-panel-title");
const tagTableBody = document.getElementById("tag-table-body");
const addCategoryButton = document.getElementById("add-category-button");
const addTagButton = document.getElementById("add-tag-button");

const demoCredentials = {
  username: "demo",
  password: "demo123",
};

function createSampleImage(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="100%" height="100%" fill="#f3f3f3" stroke="#6a6a6a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#333" font-size="18" font-family="Arial">${label}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createDefaultVariant(index = 1) {
  return {
    id: Date.now() + index,
    name: "",
    sku: "",
    status: "上架",
    specs: {},
  };
}

function createDefaultProduct() {
  return {
    id: null,
    name: "",
    price: 0,
    mainSku: "",
    slug: "",
    slogan: { mode: "純文字", content: "" },
    summary: { mode: "純文字", content: "" },
    mainStatus: "上架",
    searchable: "開啟",
    visibility: "visible",
    images: [],
    descriptions: {
      intro: "",
      specs: "",
      shipping: "",
    },
    descriptionModes: {
      intro: "視覺編輯",
      specs: "視覺編輯",
      shipping: "視覺編輯",
    },
    settings: {
      customCategories: [],
      discountGroup: "無",
      cyberbizTags: [],
      type: "一般商品",
      channels: [],
      vendor: "",
      googleCategory: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
    },
    variants: [],
    updatedAt: TODAY.replaceAll("-", "/"),
    publishDate: TODAY.replaceAll("-", "/"),
    generatedCode: "",
  };
}

function buildInitialProducts() {
  const product1 = createDefaultProduct();
  Object.assign(product1, {
    id: 1,
    name: "木質三人沙發",
    price: 100000,
    mainSku: "SOFA-MAIN-001",
    slug: "classic-sofa",
    slogan: { mode: "純文字", content: "打造溫潤舒適的客廳主角" },
    summary: { mode: "純文字", content: "以實木結構與柔軟布料打造，適合日常生活的經典沙發。" },
    mainStatus: "上架",
    searchable: "開啟",
    images: [
      { id: 101, name: "sofa-1.svg", size: 120000, src: createSampleImage("主圖 1") },
      { id: 102, name: "sofa-2.svg", size: 120000, src: createSampleImage("主圖 2") },
    ],
    descriptions: {
      intro: "這是一款適合現代居家的三人座沙發，兼具舒適性與耐用性。",
      specs: "尺寸：W210 x D90 x H80 cm\n材質：實木、布料、高密度泡棉",
      shipping: "大型家具採專人配送，實際配送時間依客服通知為準。",
    },
    settings: {
      customCategories: ["沙發"],
      discountGroup: "無",
      cyberbizTags: ["新品", "官網限定"],
      type: "一般商品",
      channels: ["官網", "門市"],
      vendor: "有情門",
      googleCategory: "Furniture > Sofas",
      seoTitle: "木質三人沙發｜有情門",
      seoDescription: "選購溫潤實木與舒適布料打造的三人座沙發。",
      seoKeywords: "沙發, 三人座沙發, 木質沙發",
    },
    variants: [
      {
        id: 201,
        name: "米白 / 胡桃木 / 3人座",
        sku: "SOFA-MAIN-001-FAB01-WOOD01-3S",
        status: "上架",
        specs: { "布色1": "米白", "布色2": "", "木色": "胡桃木", "空間": "客廳", "尺寸": "3人座", "行銷": "新品" },
      },
      {
        id: 202,
        name: "深灰 / 胡桃木 / 3人座",
        sku: "SOFA-MAIN-001-FAB02-WOOD01-3S",
        status: "下架",
        specs: { "布色1": "深灰", "布色2": "", "木色": "胡桃木", "空間": "客廳", "尺寸": "3人座", "行銷": "熱銷" },
      },
    ],
    updatedAt: "2026/04/28",
    publishDate: "2026/04/28",
  });

  const product2 = createDefaultProduct();
  Object.assign(product2, {
    id: 2,
    name: "布質沙發",
    price: 68000,
    mainSku: "SOFA-MAIN-002",
    slug: "fabric-sofa",
    slogan: { mode: "純文字", content: "柔軟包覆，適合日常休憩" },
    summary: { mode: "純文字", content: "布質包覆與寬敞坐感，適合客廳長時間使用。" },
    mainStatus: "上架",
    searchable: "開啟",
    images: [{ id: 103, name: "sofa-3.svg", size: 120000, src: createSampleImage("主圖 A") }],
    settings: {
      customCategories: ["沙發"],
      discountGroup: "任選 2 件 9 折",
      cyberbizTags: ["熱銷"],
      type: "一般商品",
      channels: ["官網", "門市"],
      vendor: "有情門",
      googleCategory: "Furniture > Sofas",
      seoTitle: "布質沙發｜有情門",
      seoDescription: "布質沙發提供柔和坐感與多色選擇。",
      seoKeywords: "布沙發, 客廳沙發",
    },
    variants: [
      {
        id: 203,
        name: "米色 / 淺橡木 / 2人座",
        sku: "SOFA-MAIN-002-FAB01-WOOD02-2S",
        status: "上架",
        specs: { "布色1": "米白", "布色2": "卡其", "木色": "淺橡木", "空間": "客廳", "尺寸": "2人座", "行銷": "熱銷" },
      },
      {
        id: 204,
        name: "深灰 / 淺橡木 / 2人座",
        sku: "SOFA-MAIN-002-FAB02-WOOD02-2S",
        status: "下架",
        specs: { "布色1": "深灰", "布色2": "麻灰", "木色": "淺橡木", "空間": "客廳", "尺寸": "2人座", "行銷": "" },
      },
    ],
    updatedAt: "2026/04/26",
    publishDate: "2026/04/26",
  });

  const product3 = createDefaultProduct();
  Object.assign(product3, {
    id: 3,
    name: "單椅",
    price: 26000,
    mainSku: "CHAIR-MAIN-001",
    slug: "single-chair",
    slogan: { mode: "純文字", content: "輕巧尺寸，靈活搭配" },
    summary: { mode: "純文字", content: "適合作為餐廳、書房或臥室的機能單椅。" },
    mainStatus: "上架",
    searchable: "開啟",
    variants: [
      {
        id: 205,
        name: "胡桃木 / 1人座",
        sku: "CHAIR-MAIN-001-WOOD01-1S",
        status: "下架",
        specs: { "布色1": "", "布色2": "", "木色": "胡桃木", "空間": "餐廳", "尺寸": "1人座", "行銷": "" },
      },
      {
        id: 206,
        name: "淺橡木 / 1人座",
        sku: "CHAIR-MAIN-001-WOOD02-1S",
        status: "下架",
        specs: { "布色1": "", "布色2": "", "木色": "淺橡木", "空間": "餐廳", "尺寸": "1人座", "行銷": "" },
      },
    ],
    settings: {
      customCategories: ["單椅"],
      discountGroup: "無",
      cyberbizTags: [],
      type: "一般商品",
      channels: ["門市"],
      vendor: "有情門",
      googleCategory: "Furniture > Chairs",
      seoTitle: "單椅｜有情門",
      seoDescription: "多場域適用的單椅設計。",
      seoKeywords: "單椅, 木椅",
    },
    updatedAt: "2026/04/20",
    publishDate: "2026/04/20",
  });

  const product4 = createDefaultProduct();
  Object.assign(product4, {
    id: 4,
    name: "展示邊櫃",
    price: 42000,
    mainSku: "CABINET-MAIN-001",
    slug: "display-cabinet",
    summary: { mode: "純文字", content: "適合作為客廳與走道展示使用的收納邊櫃。" },
    mainStatus: "上架",
    searchable: "關閉",
    visibility: "hidden",
    settings: {
      customCategories: ["餐桌"],
      discountGroup: "無",
      cyberbizTags: ["官網限定"],
      type: "一般商品",
      channels: ["官網"],
      vendor: "協力廠商 A",
      googleCategory: "Furniture > Cabinets",
      seoTitle: "展示邊櫃｜有情門",
      seoDescription: "展示與收納兼具的邊櫃設計。",
      seoKeywords: "邊櫃, 收納",
    },
    variants: [{ id: 207, name: "胡桃木", sku: "CABINET-MAIN-001-WOOD01", status: "上架", specs: { "木色": "胡桃木", "空間": "客廳" } }],
    updatedAt: "2026/04/18",
    publishDate: "2026/04/18",
  });

  return [product1, product2, product3, product4];
}

const initialTagCategories = [
  {
    id: 1,
    name: "布色1",
    tags: [
      { id: 1, name: "米白", sku: "FAB001", closeDate: "2026-05-01", image: "" },
      { id: 2, name: "深灰", sku: "FAB002", closeDate: "", image: "" },
      { id: 3, name: "淺棕", sku: "FAB003", closeDate: "", image: "" },
      { id: 4, name: "藍色", sku: "FAB004", closeDate: "", image: "" },
    ],
  },
  {
    id: 2,
    name: "布色2",
    tags: [
      { id: 5, name: "麻灰", sku: "FAB101", closeDate: "", image: "" },
      { id: 6, name: "卡其", sku: "FAB102", closeDate: "", image: "" },
      { id: 7, name: "深綠", sku: "FAB103", closeDate: "", image: "" },
    ],
  },
  {
    id: 3,
    name: "木色",
    tags: [
      { id: 8, name: "胡桃木", sku: "WOOD-BK-01", closeDate: "", image: "" },
      { id: 9, name: "淺橡木", sku: "WOOD-OAK-01", closeDate: "", image: "" },
      { id: 10, name: "深橡木", sku: "WOOD-OAK-02", closeDate: "", image: "" },
    ],
  },
  {
    id: 4,
    name: "空間",
    tags: [
      { id: 11, name: "客廳", sku: "SPACE-LIVING", closeDate: "", image: "" },
      { id: 12, name: "餐廳", sku: "SPACE-DINING", closeDate: "", image: "" },
      { id: 13, name: "臥室", sku: "SPACE-BEDROOM", closeDate: "", image: "" },
    ],
  },
  {
    id: 5,
    name: "尺寸",
    tags: [
      { id: 14, name: "1人座", sku: "SIZE-S", closeDate: "", image: "" },
      { id: 15, name: "2人座", sku: "SIZE-M", closeDate: "", image: "" },
      { id: 16, name: "3人座", sku: "SIZE-L", closeDate: "", image: "" },
    ],
  },
  {
    id: 6,
    name: "行銷",
    tags: [
      { id: 17, name: "新品", sku: "MKT-NEW", closeDate: "", image: "" },
      { id: 18, name: "熱銷", sku: "MKT-HOT", closeDate: "", image: "" },
      { id: 19, name: "限時優惠", sku: "MKT-LIMIT", closeDate: "2026-04-15", image: "" },
    ],
  },
];

const initialStores = [
  { id: 1, name: "台北仁愛店", code: "STORE001", updatedAt: "2026/04/28", productIds: [1, 2] },
  { id: 2, name: "台中公益店", code: "STORE002", updatedAt: "2026/04/27", productIds: [2, 3] },
  { id: 3, name: "高雄美術館店", code: "STORE003", updatedAt: "2026/04/25", productIds: [1] },
];

const initialCategoryPages = [
  {
    id: 1,
    name: "沙發",
    enName: "Sofa",
    subtitle: "探索我們的沙發系列",
    status: "啟用",
    updatedAt: "2026/04/28",
    bannerImage: "",
    filters: {
      "布色1": ["米白", "深灰"],
      "木色": ["胡桃木", "淺橡木"],
      "空間": ["客廳"],
      "尺寸": ["1人座", "2人座", "3人座"],
      "行銷": ["新品", "熱銷"],
    },
    display: { perRow: 4, rows: 3, pageSize: 12, loadStyle: "載入更多" },
    generatedCode: "",
  },
  {
    id: 2,
    name: "餐桌",
    enName: "Table",
    subtitle: "打造理想用餐空間",
    status: "啟用",
    updatedAt: "2026/04/25",
    bannerImage: "",
    filters: { "木色": ["胡桃木"], "空間": ["餐廳"] },
    display: { perRow: 4, rows: 3, pageSize: 12, loadStyle: "載入更多" },
    generatedCode: "",
  },
  {
    id: 3,
    name: "床架",
    enName: "Bed",
    subtitle: "舒適臥室生活提案",
    status: "停用",
    updatedAt: "2026/04/20",
    bannerImage: "",
    filters: { "空間": ["臥室"], "行銷": ["限時優惠"] },
    display: { perRow: 4, rows: 3, pageSize: 12, loadStyle: "載入更多" },
    generatedCode: "",
  },
];

const channelOptions = ["官網", "門市", "活動頁"];
const cyberbizTagOptions = ["新品", "熱銷", "限時活動", "官網限定"];

let products = buildInitialProducts();
let filteredProducts = [...products];
let selectedIds = new Set();
let currentProductId = null;
let currentProductDraft = null;
let activeProductTab = "info";

let stores = structuredClone(initialStores);
let currentStoreId = null;
let storeDraftSelection = new Set();
let filteredStoreProducts = [...products];

let categoryPages = structuredClone(initialCategoryPages);
let currentCategoryPageId = null;
let categoryPageDraft = null;
let categoryBannerImage = "";

let tagCategories = structuredClone(initialTagCategories);
let currentTagCategoryId = tagCategories[0].id;
let editingTag = null;
let tempTagImage = "";

let pendingDialogAction = null;

function clone(value) {
  return structuredClone(value);
}

function formatDateDisplay(value) {
  return value ? value.replaceAll("-", "/") : "無設定";
}

function getTodayDisplay() {
  return TODAY.replaceAll("-", "/");
}

function getCurrentStore() {
  return stores.find((store) => store.id === currentStoreId) || null;
}

function getCurrentCategoryPage() {
  return categoryPages.find((page) => page.id === currentCategoryPageId) || null;
}

function getCurrentTagCategory() {
  return tagCategories.find((category) => category.id === currentTagCategoryId) || null;
}

function getCurrentProduct() {
  return products.find((product) => product.id === currentProductId) || null;
}

function getProductCategoryOptions() {
  const fromPages = categoryPages.map((page) => page.name);
  return Array.from(new Set([...fromPages, "沙發", "餐桌", "單椅", "床架"]));
}

function computeProductStatus(product) {
  if (product.visibility === "hidden") {
    return "隱藏";
  }
  if (product.mainStatus === "下架") {
    return "全數下架";
  }
  const statuses = product.variants.map((variant) => variant.status);
  if (statuses.length === 0) {
    return "全數上架";
  }
  const upCount = statuses.filter((status) => status === "上架").length;
  if (upCount === 0) {
    return "全數下架";
  }
  if (upCount === statuses.length) {
    return "全數上架";
  }
  return "缺色";
}

function getStatusClass(status) {
  if (status === "全數上架" || status === "啟用中" || status === "啟用") {
    return "status-up";
  }
  if (status === "缺色") {
    return "status-mixed";
  }
  if (status === "全數下架" || status === "已關閉" || status === "停用") {
    return "status-down";
  }
  return "status-hidden";
}

function getTagStatus(tag) {
  if (!tag.closeDate) {
    return "啟用中";
  }
  return tag.closeDate < TODAY ? "已關閉" : "啟用中";
}

function setView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle("active", name === viewName);
  });
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });
  const meta = {
    products: ["商品管理 > 所有商品列表", "所有商品列表"],
    orders: ["訂單管理 > 訂單查詢與匯出", "訂單查詢與匯出"],
    "category-pages": ["商品管理 > 商品分類頁面", "商品分類頁面"],
    stores: ["門市管理 > 門市商品設定", "門市商品設定"],
    "spec-tags": ["商品管理 > 商品規格標籤", "商品規格標籤"],
    system: ["系統設定", "系統設定"],
  };
  breadcrumb.textContent = meta[viewName][0];
  pageTitle.textContent = meta[viewName][1];
}

function setProductDetailHeader() {
  if (!currentProductDraft) {
    return;
  }
  const name = currentProductDraft.name || "新增商品";
  breadcrumb.textContent = "商品管理 > 單一商品詳情 / 編輯";
  pageTitle.textContent = "單一商品詳情 / 編輯";
  productDetailTitle.textContent = `單一商品詳情 / 編輯：${name}`;
}

function syncCategoryOptions() {
  const categories = Array.from(new Set(products.flatMap((product) => product.settings.customCategories || []))).sort((a, b) => a.localeCompare(b, "zh-Hant"));
  const currentValue = searchCategorySelect.value;
  searchCategorySelect.innerHTML = '<option value="">商品分類</option>';
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    searchCategorySelect.appendChild(option);
  });
  searchCategorySelect.value = categories.includes(currentValue) ? currentValue : "";
}

function updateSelectionSummary() {
  selectedCount.textContent = `已選取 ${selectedIds.size} 筆`;
  const disabled = selectedIds.size === 0;
  batchPublishButton.disabled = disabled;
  batchUnpublishButton.disabled = disabled;
  batchDeleteButton.disabled = disabled;
}

function updateSelectAllState() {
  const visibleIds = filteredProducts.map((product) => product.id);
  const selectedVisibleCount = visibleIds.filter((id) => selectedIds.has(id)).length;
  selectAllCheckbox.checked = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
  selectAllCheckbox.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
}

function formatCategories(categories) {
  return categories.length > 0 ? categories.join("、") : "未設定";
}

function openConfirmDialog({ title, message, confirmLabel, onConfirm }) {
  dialogTitle.textContent = title;
  dialogMessage.textContent = message;
  dialogConfirmButton.textContent = confirmLabel;
  pendingDialogAction = onConfirm;
  confirmDialog.showModal();
}

function downloadCsv(filename, rows) {
  const csvContent = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\uFEFF${csvContent}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "absolute";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    const result = document.execCommand("copy");
    helper.remove();
    if (result) {
      resolve();
    } else {
      reject(new Error("copy failed"));
    }
  });
}

function applyProductFilters() {
  const keyword = searchNameInput.value.trim();
  const categoryFilter = searchCategorySelect.value;
  const statusFilter = searchStatusSelect.value;
  filteredProducts = products.filter((product) => {
    const listStatus = computeProductStatus(product);
    const matchesName = keyword === "" || product.name.includes(keyword);
    const matchesCategory = categoryFilter === "" || (product.settings.customCategories || []).includes(categoryFilter);
    const matchesStatus = statusFilter === "" || listStatus === statusFilter;
    return matchesName && matchesCategory && matchesStatus;
  });
  renderProducts();
}

function renderProducts() {
  tableBody.innerHTML = "";
  if (filteredProducts.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "目前沒有符合條件的商品。";
    row.appendChild(cell);
    tableBody.appendChild(row);
    updateSelectAllState();
    updateSelectionSummary();
    return;
  }

  filteredProducts.forEach((product) => {
    const fragment = rowTemplate.content.cloneNode(true);
    const row = fragment.querySelector("tr");
    const checkbox = fragment.querySelector(".row-select");
    const imageButton = fragment.querySelector(".image-placeholder");
    const nameButton = fragment.querySelector(".product-name");
    const categoriesCell = fragment.querySelector(".product-categories");
    const statusChip = fragment.querySelector(".status-chip");
    const updatedAtCell = fragment.querySelector(".updated-at");
    const hideButton = fragment.querySelector(".hide-action");
    const deleteButton = fragment.querySelector(".delete-action");
    const status = computeProductStatus(product);

    checkbox.checked = selectedIds.has(product.id);
    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        selectedIds.add(product.id);
      } else {
        selectedIds.delete(product.id);
      }
      updateSelectionSummary();
      updateSelectAllState();
    });

    const open = () => openProductDetail(product.id);
    imageButton.addEventListener("click", open);
    nameButton.addEventListener("click", open);
    row.addEventListener("click", (event) => {
      if (event.target.closest("button") || event.target.closest("input")) {
        return;
      }
      open();
    });

    nameButton.textContent = product.name;
    categoriesCell.textContent = formatCategories(product.settings.customCategories || []);
    statusChip.textContent = status;
    statusChip.classList.add(getStatusClass(status));
    updatedAtCell.textContent = product.updatedAt;

    hideButton.addEventListener("click", () => {
      product.visibility = "hidden";
      applyProductFilters();
      applyStoreProductFilters();
    });

    deleteButton.addEventListener("click", () => {
      openConfirmDialog({
        title: "刪除商品",
        message: "確定要刪除此商品嗎？此操作將刪除商品及其所有款式資料。",
        confirmLabel: "確定刪除",
        onConfirm: () => {
          products = products.filter((item) => item.id !== product.id);
          stores = stores.map((store) => ({ ...store, productIds: store.productIds.filter((id) => id !== product.id) }));
          selectedIds.delete(product.id);
          syncCategoryOptions();
          applyProductFilters();
          renderStores();
          applyStoreProductFilters();
        },
      });
    });

    tableBody.appendChild(fragment);
  });

  updateSelectAllState();
  updateSelectionSummary();
}

function showProductList() {
  productDetailScreen.classList.remove("active-subview");
  productListScreen.classList.remove("hidden");
  setView("products");
}

function setActiveProductTab(tabName) {
  activeProductTab = tabName;
  productTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.productTab === tabName);
  });
  Object.entries(productTabPanels).forEach(([name, panel]) => {
    panel.classList.toggle("active", name === tabName);
  });
  if (currentProductDraft && tabName === "variants") {
    currentProductDraft.name = productNameInput.value.trim();
    currentProductDraft.mainSku = productMainSkuInput.value.trim();
    renderVariants();
  }
}

function fillCheckboxGroup(container, options, selectedValues) {
  container.innerHTML = "";
  options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "checkbox-item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = option;
    checkbox.checked = selectedValues.includes(option);
    label.append(checkbox, document.createTextNode(option));
    container.appendChild(label);
  });
}

function readCheckboxGroup(container) {
  return Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
}

function updateProductUrlPreview() {
  productUrlPreview.textContent = `/products/${productUrlInput.value.trim()}`;
}

function renderProductImages() {
  productImagePreviewList.innerHTML = "";
  currentProductDraft.images.forEach((image, index) => {
    const card = document.createElement("div");
    card.className = "image-card";
    card.innerHTML = `
      <img src="${image.src}" alt="${image.name}">
      <div class="image-card-meta">${index + 1}. ${image.name}</div>
      <div class="image-card-actions">
        <button type="button" class="secondary-button" data-action="up">往前</button>
        <button type="button" class="secondary-button" data-action="down">往後</button>
        <button type="button" class="secondary-button" data-action="delete">刪除</button>
      </div>
    `;
    const move = (from, to) => {
      if (to < 0 || to >= currentProductDraft.images.length) {
        return;
      }
      const next = [...currentProductDraft.images];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      currentProductDraft.images = next;
      renderProductImages();
    };
    card.querySelector('[data-action="up"]').addEventListener("click", () => move(index, index - 1));
    card.querySelector('[data-action="down"]').addEventListener("click", () => move(index, index + 1));
    card.querySelector('[data-action="delete"]').addEventListener("click", () => {
      currentProductDraft.images = currentProductDraft.images.filter((item) => item.id !== image.id);
      renderProductImages();
    });
    productImagePreviewList.appendChild(card);
  });
}

function buildVariantSelectOptions(categoryName) {
  const category = tagCategories.find((item) => item.name === categoryName);
  const options = category ? category.tags.map((tag) => tag.name) : [];
  if (categoryName === "布色2") {
    return ["", "無", ...options];
  }
  return ["", ...options];
}

function renderVariants() {
  variantList.innerHTML = "";
  if (currentProductDraft.variants.length === 0) {
    const empty = document.createElement("div");
    empty.className = "variant-empty";
    empty.textContent = "目前尚未建立款式。";
    variantList.appendChild(empty);
    return;
  }

  currentProductDraft.variants.forEach((variant, index) => {
    const card = document.createElement("div");
    card.className = "variant-card";
    card.innerHTML = `
      <div class="section-header">
        <h3>款式 ${index + 1}</h3>
        <button type="button" class="secondary-button" data-action="delete-variant">刪除此款式</button>
      </div>
      <div class="variant-inherit">
        <p>主商品名稱：${currentProductDraft.name || "未設定"}</p>
        <p>主商品 SKU：${currentProductDraft.mainSku || "未設定"}</p>
      </div>
      <div class="two-column-grid"></div>
    `;
    const grid = card.querySelector(".two-column-grid");

    const addField = (labelText, type, value, changeHandler) => {
      const field = document.createElement("div");
      field.className = "field";
      const label = document.createElement("label");
      label.textContent = labelText;
      const input = document.createElement(type === "select" ? "select" : "input");
      if (type !== "select") {
        input.type = type;
        input.value = value;
      }
      if (type === "select") {
        value.options.forEach((option) => {
          const optionNode = document.createElement("option");
          optionNode.value = option;
          optionNode.textContent = option || "請選擇";
          input.appendChild(optionNode);
        });
        input.value = value.selected;
      }
      input.addEventListener("input", changeHandler);
      input.addEventListener("change", changeHandler);
      field.append(label, input);
      grid.appendChild(field);
    };

    addField("款式名稱", "text", variant.name, (event) => {
      variant.name = event.target.value;
    });
    addField("款式 SKU", "text", variant.sku, (event) => {
      variant.sku = event.target.value;
    });
    addField("款式狀態", "select", { options: ["上架", "下架"], selected: variant.status }, (event) => {
      variant.status = event.target.value;
    });

    tagCategories.forEach((category) => {
      addField(category.name, "select", { options: buildVariantSelectOptions(category.name), selected: variant.specs[category.name] || "" }, (event) => {
        variant.specs[category.name] = event.target.value;
      });
    });

    card.querySelector('[data-action="delete-variant"]').addEventListener("click", () => {
      openConfirmDialog({
        title: "刪除款式",
        message: "確定要刪除此款式嗎？",
        confirmLabel: "確定刪除",
        onConfirm: () => {
          currentProductDraft.variants = currentProductDraft.variants.filter((item) => item.id !== variant.id);
          renderVariants();
        },
      });
    });

    variantList.appendChild(card);
  });
}

function renderProductSettings() {
  fillCheckboxGroup(productCustomCategoryOptions, getProductCategoryOptions(), currentProductDraft.settings.customCategories);
  fillCheckboxGroup(productCyberbizTags, cyberbizTagOptions, currentProductDraft.settings.cyberbizTags);
  fillCheckboxGroup(productChannelOptions, channelOptions, currentProductDraft.settings.channels);
}

function openProductDetail(productId = null) {
  currentProductId = productId;
  currentProductDraft = productId ? clone(getCurrentProduct()) : createDefaultProduct();
  if (currentProductDraft.visibility === "hidden") {
    currentProductDraft.visibility = "visible";
  }
  productSaveStatus.textContent = "";
  productImageStatus.textContent = "";
  variantStatusText.textContent = "";
  productListScreen.classList.add("hidden");
  productDetailScreen.classList.add("active-subview");

  productNameInput.value = currentProductDraft.name;
  productPriceInput.value = currentProductDraft.price;
  productMainSkuInput.value = currentProductDraft.mainSku;
  productUrlInput.value = currentProductDraft.slug;
  productStatusInput.value = currentProductDraft.mainStatus;
  productSearchToggle.value = currentProductDraft.searchable;
  productSloganMode.value = currentProductDraft.slogan.mode;
  productSloganInput.value = currentProductDraft.slogan.content;
  productSummaryMode.value = currentProductDraft.summary.mode;
  productSummaryInput.value = currentProductDraft.summary.content;
  productIntroMode.value = currentProductDraft.descriptionModes.intro;
  productIntroInput.value = currentProductDraft.descriptions.intro;
  productSpecMode.value = currentProductDraft.descriptionModes.specs;
  productSpecInput.value = currentProductDraft.descriptions.specs;
  productShippingMode.value = currentProductDraft.descriptionModes.shipping;
  productShippingInput.value = currentProductDraft.descriptions.shipping;
  productDiscountGroup.value = currentProductDraft.settings.discountGroup;
  productType.value = currentProductDraft.settings.type;
  productVendor.value = currentProductDraft.settings.vendor;
  productGoogleCategory.value = currentProductDraft.settings.googleCategory;
  productSeoTitle.value = currentProductDraft.settings.seoTitle;
  productSeoDescription.value = currentProductDraft.settings.seoDescription;
  productSeoKeywords.value = currentProductDraft.settings.seoKeywords;
  updateProductUrlPreview();
  renderProductSettings();
  renderProductImages();
  renderVariants();
  setProductDetailHeader();
  setActiveProductTab("info");
}

function collectProductDraft() {
  currentProductDraft.name = productNameInput.value.trim();
  currentProductDraft.price = Number(productPriceInput.value || 0);
  currentProductDraft.mainSku = productMainSkuInput.value.trim();
  currentProductDraft.slug = productUrlInput.value.trim();
  currentProductDraft.mainStatus = productStatusInput.value;
  currentProductDraft.searchable = productSearchToggle.value;
  currentProductDraft.slogan = { mode: productSloganMode.value, content: productSloganInput.value };
  currentProductDraft.summary = { mode: productSummaryMode.value, content: productSummaryInput.value };
  currentProductDraft.descriptionModes = {
    intro: productIntroMode.value,
    specs: productSpecMode.value,
    shipping: productShippingMode.value,
  };
  currentProductDraft.descriptions = {
    intro: productIntroInput.value,
    specs: productSpecInput.value,
    shipping: productShippingInput.value,
  };
  currentProductDraft.settings = {
    customCategories: readCheckboxGroup(productCustomCategoryOptions),
    discountGroup: productDiscountGroup.value,
    cyberbizTags: readCheckboxGroup(productCyberbizTags),
    type: productType.value,
    channels: readCheckboxGroup(productChannelOptions),
    vendor: productVendor.value.trim(),
    googleCategory: productGoogleCategory.value.trim(),
    seoTitle: productSeoTitle.value.trim(),
    seoDescription: productSeoDescription.value.trim(),
    seoKeywords: productSeoKeywords.value.trim(),
  };
  currentProductDraft.updatedAt = getTodayDisplay();
  if (!currentProductDraft.publishDate) {
    currentProductDraft.publishDate = getTodayDisplay();
  }
}

function saveProductDraft() {
  if (!currentProductDraft) {
    return;
  }
  collectProductDraft();
  if (!currentProductDraft.name || !currentProductDraft.mainSku) {
    productSaveStatus.textContent = "請至少填寫商品名稱與主商品 SKU。";
    return;
  }

  if (currentProductId) {
    const existing = getCurrentProduct();
    Object.assign(existing, clone(currentProductDraft));
  } else {
    const newProduct = clone(currentProductDraft);
    newProduct.id = Date.now();
    products.unshift(newProduct);
    currentProductId = newProduct.id;
    currentProductDraft.id = newProduct.id;
  }

  syncCategoryOptions();
  applyProductFilters();
  applyStoreProductFilters();
  renderStores();
  setProductDetailHeader();
  productSaveStatus.textContent = "商品資料已儲存";
}

function handleProductFiles(files) {
  if (!currentProductDraft) {
    return;
  }
  const fileList = Array.from(files || []);
  if (currentProductDraft.images.length + fileList.length > 10) {
    productImageStatus.textContent = "最多只能上傳 10 張圖片";
    return;
  }

  const oversized = fileList.find((file) => file.size > 2 * 1024 * 1024);
  if (oversized) {
    productImageStatus.textContent = "圖片大小不可超過 2MB";
    return;
  }

  productImageStatus.textContent = "";
  fileList.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      currentProductDraft.images.push({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        src: String(reader.result || ""),
      });
      renderProductImages();
    });
    reader.readAsDataURL(file);
  });
  productImagesInput.value = "";
}

function renderStores() {
  storeTableBody.innerHTML = "";
  if (stores.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = "目前沒有門市資料。";
    row.appendChild(cell);
    storeTableBody.appendChild(row);
    return;
  }

  stores.forEach((store) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><button class="link-button" type="button" data-action="open">${store.name}</button></td>
      <td>${store.code}</td>
      <td>${store.updatedAt}</td>
      <td><button class="inline-action" type="button" data-action="open">進入設定</button></td>
    `;
    row.querySelectorAll('[data-action="open"]').forEach((button) => {
      button.addEventListener("click", () => openStoreDetail(store.id));
    });
    storeTableBody.appendChild(row);
  });
}

function openStoreDetail(storeId) {
  currentStoreId = storeId;
  const store = getCurrentStore();
  storeDraftSelection = new Set(store.productIds);
  storeProductSearchInput.value = "";
  storeProductSortSelect.value = "desc";
  storeSaveStatus.textContent = "";
  storeListScreen.classList.add("hidden");
  storeDetailScreen.classList.add("active-subview");
  storeDetailTitle.textContent = `${store.name}｜商品設定`;
  applyStoreProductFilters();
}

function closeStoreDetail() {
  currentStoreId = null;
  storeDraftSelection = new Set();
  storeDetailScreen.classList.remove("active-subview");
  storeListScreen.classList.remove("hidden");
  storeSaveStatus.textContent = "";
}

function applyStoreProductFilters() {
  const keyword = storeProductSearchInput.value.trim();
  const sortOrder = storeProductSortSelect.value;
  filteredStoreProducts = [...products]
    .filter((product) => keyword === "" || product.name.includes(keyword))
    .sort((left, right) => {
      const a = left.publishDate.replaceAll("/", "");
      const b = right.publishDate.replaceAll("/", "");
      return sortOrder === "asc" ? a.localeCompare(b) : b.localeCompare(a);
    });
  renderStoreProducts();
}

function updateStoreSelectAllState() {
  const visibleIds = filteredStoreProducts.map((product) => product.id);
  const selectedVisibleCount = visibleIds.filter((id) => storeDraftSelection.has(id)).length;
  storeSelectAllCheckbox.checked = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
  storeSelectAllCheckbox.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
}

function renderStoreProducts() {
  storeProductTableBody.innerHTML = "";
  if (!currentStoreId) {
    return;
  }
  if (filteredStoreProducts.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = "目前沒有符合條件的商品。";
    row.appendChild(cell);
    storeProductTableBody.appendChild(row);
    updateStoreSelectAllState();
    return;
  }

  filteredStoreProducts.forEach((product) => {
    const row = document.createElement("tr");
    const checked = storeDraftSelection.has(product.id) ? "checked" : "";
    row.innerHTML = `
      <td><input class="store-row-select" type="checkbox" data-product-id="${product.id}" ${checked}></td>
      <td><div class="table-placeholder">圖片</div></td>
      <td>${product.name}</td>
      <td>${formatCategories(product.settings.customCategories || [])}</td>
      <td><span class="status-chip ${getStatusClass(computeProductStatus(product))}">${computeProductStatus(product)}</span></td>
      <td>${product.publishDate}</td>
    `;
    row.querySelector(".store-row-select").addEventListener("change", (event) => {
      const productId = Number(event.target.dataset.productId);
      if (event.target.checked) {
        storeDraftSelection.add(productId);
      } else {
        storeDraftSelection.delete(productId);
      }
      updateStoreSelectAllState();
    });
    storeProductTableBody.appendChild(row);
  });
  updateStoreSelectAllState();
}

function updateCategoryBannerPreview(imageSrc) {
  if (imageSrc) {
    categoryBannerPreview.src = imageSrc;
    categoryBannerPreview.classList.remove("hidden");
    categoryBannerPlaceholder.classList.add("hidden");
  } else {
    categoryBannerPreview.removeAttribute("src");
    categoryBannerPreview.classList.add("hidden");
    categoryBannerPlaceholder.classList.remove("hidden");
  }
}

function getAvailableFilterMap() {
  return tagCategories.reduce((result, category) => {
    result[category.name] = category.tags.map((tag) => tag.name);
    return result;
  }, {});
}

function renderCategoryPageList() {
  categoryPageTableBody.innerHTML = "";
  if (categoryPages.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "目前沒有分類頁資料。";
    row.appendChild(cell);
    categoryPageTableBody.appendChild(row);
    return;
  }
  categoryPages.forEach((page) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${page.name}</td>
      <td>${page.enName}</td>
      <td><span class="status-chip ${getStatusClass(page.status)}">${page.status}</span></td>
      <td>${page.updatedAt}</td>
      <td><button class="inline-action" type="button">編輯</button></td>
    `;
    row.querySelector("button").addEventListener("click", () => openCategoryPageDetail(page.id));
    categoryPageTableBody.appendChild(row);
  });
}

function renderCategoryFilterGroups() {
  const filterMap = getAvailableFilterMap();
  categoryFilterGroups.innerHTML = "";
  Object.entries(filterMap).forEach(([groupName, tags]) => {
    const group = document.createElement("section");
    group.className = "filter-group";
    const title = document.createElement("h4");
    title.textContent = groupName;
    const list = document.createElement("div");
    list.className = "filter-option-list";
    const selectedValues = new Set(categoryPageDraft.filters[groupName] || []);
    tags.forEach((tagName) => {
      const label = document.createElement("label");
      label.className = "checkbox-item";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = selectedValues.has(tagName);
      checkbox.addEventListener("change", (event) => {
        const next = new Set(categoryPageDraft.filters[groupName] || []);
        if (event.target.checked) {
          next.add(tagName);
        } else {
          next.delete(tagName);
        }
        if (next.size === 0) {
          delete categoryPageDraft.filters[groupName];
        } else {
          categoryPageDraft.filters[groupName] = [...next];
        }
      });
      label.append(checkbox, document.createTextNode(tagName));
      list.appendChild(label);
    });
    group.append(title, list);
    categoryFilterGroups.appendChild(group);
  });
}

function openCategoryPageDetail(pageId = null) {
  currentCategoryPageId = pageId;
  categoryPageStatusText.textContent = "";
  if (pageId) {
    const page = getCurrentCategoryPage();
    categoryPageDraft = clone(page);
    categoryBannerImage = page.bannerImage || "";
    categoryPageDetailTitle.textContent = `編輯分類頁：${page.name}`;
    categoryCodeOutput.textContent = page.generatedCode || "尚未產出程式碼";
  } else {
    categoryPageDraft = {
      id: null,
      name: "",
      enName: "",
      subtitle: "",
      status: "啟用",
      updatedAt: getTodayDisplay(),
      bannerImage: "",
      filters: {},
      display: { perRow: 4, rows: 3, pageSize: 12, loadStyle: "載入更多" },
      generatedCode: "",
    };
    categoryBannerImage = "";
    categoryPageDetailTitle.textContent = "新增分類頁";
    categoryCodeOutput.textContent = "尚未產出程式碼";
  }
  categoryPageNameInput.value = categoryPageDraft.name;
  categoryPageEnNameInput.value = categoryPageDraft.enName;
  categoryPageSubtitleInput.value = categoryPageDraft.subtitle;
  categoryPageStatusSelect.value = categoryPageDraft.status;
  productsPerRowInput.value = categoryPageDraft.display.perRow;
  rowCountInput.value = categoryPageDraft.display.rows;
  pageSizeInput.value = categoryPageDraft.display.pageSize;
  loadStyleSelect.value = categoryPageDraft.display.loadStyle;
  updateCategoryBannerPreview(categoryBannerImage);
  renderCategoryFilterGroups();
  categoryPageListScreen.classList.add("hidden");
  categoryPageDetailScreen.classList.add("active-subview");
}

function closeCategoryPageDetail() {
  currentCategoryPageId = null;
  categoryPageDraft = null;
  categoryBannerImage = "";
  categoryCodeOutput.textContent = "尚未產出程式碼";
  categoryPageStatusText.textContent = "";
  categoryPageListScreen.classList.remove("hidden");
  categoryPageDetailScreen.classList.remove("active-subview");
}

function buildCategoryPageCode(page) {
  const slug = (page.enName || page.name || "demo").toUpperCase().replace(/[^A-Z0-9]+/g, "-");
  return `YQM-DEMO-${slug}-CFG-${page.display.pageSize}-${page.updatedAt.replaceAll("/", "")}`;
}

function renderTagCategories() {
  tagCategoryList.innerHTML = "";
  tagCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    if (category.id === currentTagCategoryId) {
      button.classList.add("active");
    }
    button.textContent = category.name;
    button.addEventListener("click", () => {
      currentTagCategoryId = category.id;
      renderTagCategories();
      renderTags();
    });
    tagCategoryList.appendChild(button);
  });
}

function renderTags() {
  const category = getCurrentTagCategory();
  tagTableBody.innerHTML = "";
  tagPanelTitle.textContent = `${category.name}｜標籤列表`;
  if (category.tags.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = "目前沒有標籤資料。";
    row.appendChild(cell);
    tagTableBody.appendChild(row);
    return;
  }

  category.tags.forEach((tag) => {
    const status = getTagStatus(tag);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tag.image ? `<img class="tag-thumb" src="${tag.image}" alt="${tag.name}">` : '<div class="table-placeholder">圖片</div>'}</td>
      <td>${tag.name}</td>
      <td>${tag.sku}</td>
      <td>${formatDateDisplay(tag.closeDate)}</td>
      <td><span class="status-chip ${getStatusClass(status)}">${status}</span></td>
      <td>
        <div class="row-actions">
          <button class="inline-action" type="button" data-action="edit">編輯</button>
          <button class="inline-action" type="button" data-action="delete">刪除</button>
        </div>
      </td>
    `;
    row.querySelector('[data-action="edit"]').addEventListener("click", () => openTagDialog(tag));
    row.querySelector('[data-action="delete"]').addEventListener("click", () => {
      openConfirmDialog({
        title: "刪除標籤",
        message: "確定要刪除此標籤嗎？",
        confirmLabel: "確定刪除",
        onConfirm: () => {
          category.tags = category.tags.filter((item) => item.id !== tag.id);
          renderTags();
          if (categoryPageDraft) {
            renderCategoryFilterGroups();
          }
          if (currentProductDraft) {
            renderVariants();
          }
        },
      });
    });
    tagTableBody.appendChild(row);
  });
}

function updateTagImagePreview(imageSrc) {
  if (imageSrc) {
    tagImagePreview.src = imageSrc;
    tagImagePreview.classList.remove("hidden");
    tagImagePlaceholder.classList.add("hidden");
  } else {
    tagImagePreview.removeAttribute("src");
    tagImagePreview.classList.add("hidden");
    tagImagePlaceholder.classList.remove("hidden");
  }
}

function openTagDialog(tag = null) {
  editingTag = tag;
  tempTagImage = tag?.image || "";
  tagForm.reset();
  tagFormStatus.textContent = "";
  if (tag) {
    tagDialogTitle.textContent = "編輯標籤";
    tagSubmitButton.textContent = "儲存";
    tagNameInput.value = tag.name;
    tagSkuInput.value = tag.sku;
    tagCloseDateInput.value = tag.closeDate;
  } else {
    tagDialogTitle.textContent = "新增標籤";
    tagSubmitButton.textContent = "新增";
  }
  updateTagImagePreview(tempTagImage);
  tagDialog.showModal();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();
  const usernameMessage = document.querySelector('.field-message[data-for="username"]');
  const passwordMessage = document.querySelector('.field-message[data-for="password"]');
  usernameMessage.textContent = "";
  passwordMessage.textContent = "";
  loginStatus.textContent = "";
  let hasError = false;
  if (!username) {
    usernameMessage.textContent = "請輸入帳號。";
    hasError = true;
  }
  if (!password) {
    passwordMessage.textContent = "請輸入密碼。";
    hasError = true;
  }
  if (hasError) {
    loginStatus.textContent = "請確認必填欄位。";
    return;
  }
  loginStatus.textContent = "登入中...";
  loginButton.disabled = true;
  window.setTimeout(() => {
    loginButton.disabled = false;
    if (username === demoCredentials.username && password === demoCredentials.password) {
      loginStatus.textContent = "";
      loginScreen.classList.remove("active");
      dashboardScreen.classList.add("active");
      setView("products");
      return;
    }
    loginStatus.textContent = "帳號或密碼錯誤。";
  }, 700);
});

logoutButton.addEventListener("click", () => {
  dashboardScreen.classList.remove("active");
  loginScreen.classList.add("active");
  loginForm.reset();
  loginStatus.textContent = "";
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setView(item.dataset.view);
  });
});

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyProductFilters();
});

clearFilterButton.addEventListener("click", () => {
  filterForm.reset();
  applyProductFilters();
});

selectAllCheckbox.addEventListener("change", (event) => {
  filteredProducts.forEach((product) => {
    if (event.target.checked) {
      selectedIds.add(product.id);
    } else {
      selectedIds.delete(product.id);
    }
  });
  renderProducts();
});

batchPublishButton.addEventListener("click", () => {
  products = products.map((product) => ({ ...product, mainStatus: selectedIds.has(product.id) ? "上架" : product.mainStatus, visibility: selectedIds.has(product.id) ? "visible" : product.visibility }));
  applyProductFilters();
  applyStoreProductFilters();
});

batchUnpublishButton.addEventListener("click", () => {
  products = products.map((product) => ({ ...product, mainStatus: selectedIds.has(product.id) ? "下架" : product.mainStatus, visibility: selectedIds.has(product.id) ? "visible" : product.visibility }));
  applyProductFilters();
  applyStoreProductFilters();
});

batchDeleteButton.addEventListener("click", () => {
  openConfirmDialog({
    title: "批次刪除商品",
    message: "確定要刪除已選取的商品嗎？此操作將刪除商品及其所有款式資料。",
    confirmLabel: "確定刪除",
    onConfirm: () => {
      products = products.filter((product) => !selectedIds.has(product.id));
      stores = stores.map((store) => ({ ...store, productIds: store.productIds.filter((id) => !selectedIds.has(id)) }));
      selectedIds = new Set();
      syncCategoryOptions();
      applyProductFilters();
      renderStores();
      applyStoreProductFilters();
    },
  });
});

confirmDialog.addEventListener("close", () => {
  if (confirmDialog.returnValue === "confirm" && typeof pendingDialogAction === "function") {
    pendingDialogAction();
  }
  pendingDialogAction = null;
});

addProductButton.addEventListener("click", () => openProductDetail());
backToProductsButton.addEventListener("click", showProductList);
productTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveProductTab(button.dataset.productTab));
});
productUrlInput.addEventListener("input", updateProductUrlPreview);
productNameInput.addEventListener("input", () => {
  if (currentProductDraft) {
    currentProductDraft.name = productNameInput.value.trim();
  }
  setProductDetailHeader();
});
productMainSkuInput.addEventListener("input", () => {
  if (currentProductDraft) {
    currentProductDraft.mainSku = productMainSkuInput.value.trim();
    if (activeProductTab === "variants") {
      renderVariants();
    }
  }
});
productImageDropzone.addEventListener("click", () => productImagesInput.click());
productImageDropzone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    productImagesInput.click();
  }
});
productImagesInput.addEventListener("change", (event) => handleProductFiles(event.target.files));
productImageDropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  productImageDropzone.classList.add("dragover");
});
productImageDropzone.addEventListener("dragleave", () => {
  productImageDropzone.classList.remove("dragover");
});
productImageDropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  productImageDropzone.classList.remove("dragover");
  handleProductFiles(event.dataTransfer.files);
});
addVariantButton.addEventListener("click", () => {
  currentProductDraft.variants.push(createDefaultVariant(currentProductDraft.variants.length + 1));
  renderVariants();
  variantStatusText.textContent = "已新增款式卡片。";
});
saveProductButtonTop.addEventListener("click", saveProductDraft);
saveProductButtonBottom.addEventListener("click", saveProductDraft);

exportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  exportStatus.textContent = "";
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const orderStatus = orderStatusSelect.value;
  if (!startDate || !endDate) {
    exportStatus.textContent = "請先選擇開始日期與結束日期。";
    return;
  }
  if (startDate > endDate) {
    exportStatus.textContent = "開始日期不可晚於結束日期。";
    return;
  }
  downloadCsv(`orders_${startDate}_${endDate}.csv`, [
    ["訂單編號", "訂單日期", "訂單狀態", "門市", "客戶名稱", "金額"],
    ["A20260428001", startDate, orderStatus, "台北門市", "王小明", "125000"],
    ["A20260428002", endDate, orderStatus, "新竹門市", "陳小華", "68000"],
  ]);
  exportStatus.textContent = "CSV 匯出成功。";
});

addStoreButton.addEventListener("click", () => {
  storeForm.reset();
  storeFormStatus.textContent = "";
  storeDialog.showModal();
});

storeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    storeDialog.close("cancel");
    return;
  }
  const name = storeNameInput.value.trim();
  const code = storeCodeInput.value.trim();
  if (!name || !code) {
    storeFormStatus.textContent = "請填寫門市名稱與門市代碼。";
    return;
  }
  stores.unshift({ id: Date.now(), name, code, updatedAt: getTodayDisplay(), productIds: [] });
  renderStores();
  storeDialog.close("confirm");
});

backToStoresButton.addEventListener("click", closeStoreDetail);
storeProductFilterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyStoreProductFilters();
});
storeProductSortSelect.addEventListener("change", applyStoreProductFilters);
storeSelectAllCheckbox.addEventListener("change", (event) => {
  filteredStoreProducts.forEach((product) => {
    if (event.target.checked) {
      storeDraftSelection.add(product.id);
    } else {
      storeDraftSelection.delete(product.id);
    }
  });
  renderStoreProducts();
});
saveStoreProductsButton.addEventListener("click", () => {
  const store = getCurrentStore();
  if (!store) {
    return;
  }
  store.productIds = [...storeDraftSelection];
  store.updatedAt = getTodayDisplay();
  storeSaveStatus.textContent = "門市商品設定已儲存。";
  renderStores();
});

addCategoryPageButton.addEventListener("click", () => openCategoryPageDetail());
backToCategoryPagesButton.addEventListener("click", closeCategoryPageDetail);
categoryBannerInput.addEventListener("change", () => {
  const file = categoryBannerInput.files?.[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    categoryBannerImage = String(reader.result || "");
    updateCategoryBannerPreview(categoryBannerImage);
  });
  reader.readAsDataURL(file);
});
replaceCategoryBannerButton.addEventListener("click", () => categoryBannerInput.click());
removeCategoryBannerButton.addEventListener("click", () => {
  categoryBannerImage = "";
  categoryBannerInput.value = "";
  updateCategoryBannerPreview("");
});
saveCategoryPageButton.addEventListener("click", () => {
  const name = categoryPageNameInput.value.trim();
  const enName = categoryPageEnNameInput.value.trim();
  if (!name || !enName) {
    categoryPageStatusText.textContent = "請填寫分類頁名稱與英文名稱。";
    return;
  }
  categoryPageDraft.name = name;
  categoryPageDraft.enName = enName;
  categoryPageDraft.subtitle = categoryPageSubtitleInput.value.trim();
  categoryPageDraft.status = categoryPageStatusSelect.value;
  categoryPageDraft.bannerImage = categoryBannerImage;
  categoryPageDraft.display = {
    perRow: Number(productsPerRowInput.value || 4),
    rows: Number(rowCountInput.value || 3),
    pageSize: Number(pageSizeInput.value || 12),
    loadStyle: loadStyleSelect.value,
  };
  categoryPageDraft.updatedAt = getTodayDisplay();
  if (currentCategoryPageId) {
    Object.assign(getCurrentCategoryPage(), clone(categoryPageDraft));
  } else {
    const newPage = clone(categoryPageDraft);
    newPage.id = Date.now();
    categoryPages.unshift(newPage);
    currentCategoryPageId = newPage.id;
    categoryPageDraft.id = newPage.id;
    categoryPageDetailTitle.textContent = `編輯分類頁：${newPage.name}`;
  }
  renderCategoryPageList();
  categoryPageStatusText.textContent = "分類頁設定已儲存";
});
generateCategoryCodeButton.addEventListener("click", () => {
  if (!categoryPageDraft) {
    return;
  }
  categoryPageDraft.name = categoryPageNameInput.value.trim();
  categoryPageDraft.enName = categoryPageEnNameInput.value.trim();
  categoryPageDraft.subtitle = categoryPageSubtitleInput.value.trim();
  categoryPageDraft.status = categoryPageStatusSelect.value;
  categoryPageDraft.bannerImage = categoryBannerImage;
  categoryPageDraft.display = {
    perRow: Number(productsPerRowInput.value || 4),
    rows: Number(rowCountInput.value || 3),
    pageSize: Number(pageSizeInput.value || 12),
    loadStyle: loadStyleSelect.value,
  };
  categoryPageDraft.updatedAt = getTodayDisplay();
  categoryPageDraft.generatedCode = buildCategoryPageCode(categoryPageDraft);
  categoryCodeOutput.textContent = categoryPageDraft.generatedCode;
  const saved = getCurrentCategoryPage();
  if (saved) {
    saved.generatedCode = categoryPageDraft.generatedCode;
  }
  categoryPageStatusText.textContent = "已產出分類頁程式碼";
});
copyCategoryCodeButton.addEventListener("click", async () => {
  const code = categoryCodeOutput.textContent.trim();
  if (!code || code === "尚未產出程式碼") {
    categoryPageStatusText.textContent = "請先產出程式碼。";
    return;
  }
  try {
    await copyText(code);
    categoryPageStatusText.textContent = "程式碼已複製";
  } catch {
    categoryPageStatusText.textContent = "複製失敗，請稍後再試。";
  }
});

addCategoryButton.addEventListener("click", () => {
  categoryForm.reset();
  categoryFormStatus.textContent = "";
  categoryDialog.showModal();
});
categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    categoryDialog.close("cancel");
    return;
  }
  const name = categoryNameInput.value.trim();
  if (!name) {
    categoryFormStatus.textContent = "請輸入分類名稱。";
    return;
  }
  const newCategory = { id: Date.now(), name, tags: [] };
  tagCategories.push(newCategory);
  currentTagCategoryId = newCategory.id;
  renderTagCategories();
  renderTags();
  if (categoryPageDraft) {
    renderCategoryFilterGroups();
  }
  if (currentProductDraft) {
    renderVariants();
  }
  categoryDialog.close("confirm");
});

addTagButton.addEventListener("click", () => openTagDialog());
tagImageInput.addEventListener("change", () => {
  const file = tagImageInput.files?.[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    tempTagImage = String(reader.result || "");
    updateTagImagePreview(tempTagImage);
  });
  reader.readAsDataURL(file);
});
removeTagImageButton.addEventListener("click", () => {
  tempTagImage = "";
  tagImageInput.value = "";
  updateTagImagePreview("");
});
tagForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    tagDialog.close("cancel");
    return;
  }
  const name = tagNameInput.value.trim();
  const sku = tagSkuInput.value.trim();
  if (!name || !sku) {
    tagFormStatus.textContent = "請填寫標籤名稱與特殊編碼 / SKU。";
    return;
  }
  const category = getCurrentTagCategory();
  if (editingTag) {
    editingTag.name = name;
    editingTag.sku = sku;
    editingTag.closeDate = tagCloseDateInput.value;
    editingTag.image = tempTagImage;
  } else {
    category.tags.unshift({
      id: Date.now(),
      name,
      sku,
      closeDate: tagCloseDateInput.value,
      image: tempTagImage,
    });
  }
  renderTags();
  if (categoryPageDraft) {
    renderCategoryFilterGroups();
  }
  if (currentProductDraft) {
    renderVariants();
  }
  tagDialog.close("confirm");
});

startDateInput.value = "2026-04-01";
endDateInput.value = "2026-04-30";
syncCategoryOptions();
applyProductFilters();
renderStores();
renderCategoryPageList();
renderTagCategories();
renderTags();
updateSelectionSummary();
showProductList();
