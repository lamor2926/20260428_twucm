const TODAY = "2026-04-28";

const loginScreen = document.getElementById("login-screen");
const dashboardScreen = document.getElementById("dashboard-screen");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginStatus = document.getElementById("login-status");
const logoutButton = document.getElementById("logout-button");
const navItems = Array.from(document.querySelectorAll(".nav-item[data-view]"));
const views = {
  products: document.getElementById("products-view"),
  orders: document.getElementById("orders-view"),
  stores: document.getElementById("stores-view"),
  "spec-tags": document.getElementById("spec-tags-view"),
  system: document.getElementById("system-view"),
};
const pageTitle = document.getElementById("page-title");
const breadcrumb = document.getElementById("breadcrumb");

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

const exportForm = document.getElementById("export-form");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const orderStatusSelect = document.getElementById("order-status");
const exportStatus = document.getElementById("export-status");

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

const initialProducts = [
  {
    id: 1,
    name: "木質餐桌",
    categories: ["餐桌", "實木家具", "客廳家具"],
    status: "全數上架",
    updatedAt: "2026/04/28",
    publishDate: "2026/04/28",
  },
  {
    id: 2,
    name: "布質沙發",
    categories: ["沙發", "客廳家具"],
    status: "缺色",
    updatedAt: "2026/04/26",
    publishDate: "2026/04/26",
  },
  {
    id: 3,
    name: "單椅",
    categories: ["椅凳", "餐廳家具"],
    status: "全數下架",
    updatedAt: "2026/04/20",
    publishDate: "2026/04/20",
  },
  {
    id: 4,
    name: "展示邊櫃",
    categories: ["收納", "實木家具"],
    status: "隱藏",
    updatedAt: "2026/04/18",
    publishDate: "2026/04/18",
  },
];

const initialStores = [
  {
    id: 1,
    name: "台北仁愛店",
    code: "STORE001",
    updatedAt: "2026/04/28",
    productIds: [1, 2],
  },
  {
    id: 2,
    name: "台中公益店",
    code: "STORE002",
    updatedAt: "2026/04/27",
    productIds: [2, 3],
  },
  {
    id: 3,
    name: "高雄美術館店",
    code: "STORE003",
    updatedAt: "2026/04/25",
    productIds: [1],
  },
];

const initialTagCategories = [
  {
    id: 1,
    name: "布色1",
    tags: [
      { id: 1, name: "米白布色", sku: "FAB001", closeDate: "2026-05-01", image: "" },
      { id: 2, name: "深灰布色", sku: "FAB002", closeDate: "", image: "" },
      { id: 3, name: "夏季限定", sku: "SUMMER01", closeDate: "2026-08-31", image: "" },
    ],
  },
  {
    id: 2,
    name: "布色2",
    tags: [{ id: 4, name: "霧藍布色", sku: "FAB101", closeDate: "", image: "" }],
  },
  {
    id: 3,
    name: "木色",
    tags: [{ id: 5, name: "深胡桃木", sku: "WOOD-BK-01", closeDate: "", image: "" }],
  },
  {
    id: 4,
    name: "空間",
    tags: [{ id: 6, name: "客廳", sku: "SPACE-LIVING", closeDate: "", image: "" }],
  },
  {
    id: 5,
    name: "尺寸",
    tags: [{ id: 7, name: "L", sku: "SIZE-L", closeDate: "", image: "" }],
  },
  {
    id: 6,
    name: "行銷",
    tags: [{ id: 8, name: "夏日主打", sku: "MKT-SUMMER", closeDate: "2026-04-15", image: "" }],
  },
];

let products = structuredClone(initialProducts);
let filteredProducts = [...products];
let selectedIds = new Set();

let stores = structuredClone(initialStores);
let currentStoreId = null;
let storeDraftSelection = new Set();
let filteredStoreProducts = [...products];

let tagCategories = structuredClone(initialTagCategories);
let currentTagCategoryId = tagCategories[0].id;
let editingTag = null;
let tempTagImage = "";

let pendingDialogAction = null;

function getTodayDate() {
  return TODAY;
}

function formatDateDisplay(value) {
  if (!value) {
    return "無設定";
  }
  return value.replaceAll("-", "/");
}

function getCurrentStore() {
  return stores.find((store) => store.id === currentStoreId) || null;
}

function getCurrentTagCategory() {
  return tagCategories.find((category) => category.id === currentTagCategoryId) || null;
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
    stores: ["門市管理 > 門市商品設定", "門市商品設定"],
    "spec-tags": ["商品管理 > 商品規格標籤", "商品規格標籤"],
    system: ["系統設定", "系統設定"],
  };

  breadcrumb.textContent = meta[viewName][0];
  pageTitle.textContent = meta[viewName][1];
}

function setLoginFieldMessage(fieldName, message) {
  const messageElement = document.querySelector(`.field-message[data-for="${fieldName}"]`);
  if (messageElement) {
    messageElement.textContent = message;
  }
}

function clearLoginMessages() {
  setLoginFieldMessage("username", "");
  setLoginFieldMessage("password", "");
  loginStatus.textContent = "";
}

function showDashboard() {
  loginScreen.classList.remove("active");
  dashboardScreen.classList.add("active");
  setView("products");
}

function showLogin() {
  dashboardScreen.classList.remove("active");
  loginScreen.classList.add("active");
  loginForm.reset();
  clearLoginMessages();
}

function getStatusClass(status) {
  if (status === "全數上架") {
    return "status-up";
  }
  if (status === "缺色") {
    return "status-mixed";
  }
  if (status === "全數下架") {
    return "status-down";
  }
  return "status-hidden";
}

function formatCategories(categories) {
  return categories.join("、");
}

function syncCategoryOptions() {
  const categories = Array.from(new Set(products.flatMap((product) => product.categories))).sort((a, b) => a.localeCompare(b, "zh-Hant"));
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
  const hasSelection = selectedIds.size > 0;
  batchPublishButton.disabled = !hasSelection;
  batchUnpublishButton.disabled = !hasSelection;
  batchDeleteButton.disabled = !hasSelection;
}

function updateSelectAllState() {
  const visibleIds = filteredProducts.map((product) => product.id);
  const selectedVisibleCount = visibleIds.filter((id) => selectedIds.has(id)).length;
  selectAllCheckbox.checked = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
  selectAllCheckbox.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
}

function openProductDetail(product) {
  window.alert(`Prototype 階段尚未製作商品詳情頁。\n你點擊的是：${product.name}`);
}

function renderProducts() {
  tableBody.innerHTML = "";

  if (filteredProducts.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 7;
    emptyCell.textContent = "目前沒有符合條件的商品。";
    emptyRow.appendChild(emptyCell);
    tableBody.appendChild(emptyRow);
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

    imageButton.addEventListener("click", () => openProductDetail(product));
    nameButton.addEventListener("click", () => openProductDetail(product));
    row.addEventListener("click", (event) => {
      if (event.target.closest("button") || event.target.closest("input")) {
        return;
      }
      openProductDetail(product);
    });

    nameButton.textContent = product.name;
    categoriesCell.textContent = formatCategories(product.categories);
    statusChip.textContent = product.status;
    statusChip.classList.add(getStatusClass(product.status));
    updatedAtCell.textContent = product.updatedAt;

    hideButton.addEventListener("click", () => {
      product.status = "隱藏";
      applyFilters();
    });

    deleteButton.addEventListener("click", () => {
      openConfirmDialog({
        title: "刪除商品",
        message: "確定要刪除此商品嗎？此操作將刪除商品及其所有款式資料。",
        confirmLabel: "確定刪除",
        onConfirm: () => {
          products = products.filter((item) => item.id !== product.id);
          stores = stores.map((store) => ({
            ...store,
            productIds: store.productIds.filter((id) => id !== product.id),
          }));
          selectedIds.delete(product.id);
          syncCategoryOptions();
          applyFilters();
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

function applyFilters() {
  const nameKeyword = searchNameInput.value.trim();
  const categoryFilter = searchCategorySelect.value;
  const statusFilter = searchStatusSelect.value;

  filteredProducts = products.filter((product) => {
    const matchesName = nameKeyword === "" || product.name.includes(nameKeyword);
    const matchesCategory = categoryFilter === "" || product.categories.includes(categoryFilter);
    const matchesStatus = statusFilter === "" || product.status === statusFilter;
    return matchesName && matchesCategory && matchesStatus;
  });

  renderProducts();
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
      <td><button class="link-button" type="button" data-action="open-store">${store.name}</button></td>
      <td>${store.code}</td>
      <td>${store.updatedAt}</td>
      <td><button class="inline-action" type="button" data-action="open-store">進入設定</button></td>
    `;
    row.querySelectorAll('[data-action="open-store"]').forEach((button) => {
      button.addEventListener("click", () => openStoreDetail(store.id));
    });
    storeTableBody.appendChild(row);
  });
}

function openStoreDetail(storeId) {
  currentStoreId = storeId;
  const store = getCurrentStore();
  storeDraftSelection = new Set(store ? store.productIds : []);
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
    .sort((a, b) => {
      const left = a.publishDate.replaceAll("/", "");
      const right = b.publishDate.replaceAll("/", "");
      return sortOrder === "asc" ? left.localeCompare(right) : right.localeCompare(left);
    });

  renderStoreProducts();
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
      <td>${formatCategories(product.categories)}</td>
      <td><span class="status-chip ${getStatusClass(product.status)}">${product.status}</span></td>
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

function updateStoreSelectAllState() {
  const visibleIds = filteredStoreProducts.map((product) => product.id);
  const selectedVisibleCount = visibleIds.filter((id) => storeDraftSelection.has(id)).length;
  storeSelectAllCheckbox.checked = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
  storeSelectAllCheckbox.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
}

function renderTagCategories() {
  const currentCategory = getCurrentTagCategory();
  tagCategoryList.innerHTML = "";

  tagCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    if (currentCategory && category.id === currentCategory.id) {
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

function getTagStatus(tag) {
  if (!tag.closeDate) {
    return "啟用中";
  }
  return tag.closeDate < getTodayDate() ? "已關閉" : "啟用中";
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
      <td>
        ${tag.image ? `<img class="tag-thumb" src="${tag.image}" alt="${tag.name}">` : '<div class="table-placeholder">圖片</div>'}
      </td>
      <td>${tag.name}</td>
      <td>${tag.sku}</td>
      <td>${formatDateDisplay(tag.closeDate)}</td>
      <td><span class="status-chip ${status === "啟用中" ? "status-up" : "status-hidden"}">${status}</span></td>
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
  tagFormStatus.textContent = "";
  tagForm.reset();

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
  clearLoginMessages();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();
  let hasError = false;

  if (!username) {
    setLoginFieldMessage("username", "請輸入帳號。");
    hasError = true;
  }
  if (!password) {
    setLoginFieldMessage("password", "請輸入密碼。");
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
      showDashboard();
      return;
    }

    loginStatus.textContent = "帳號或密碼錯誤。";
  }, 700);
});

logoutButton.addEventListener("click", showLogin);

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setView(item.dataset.view);
  });
});

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
});

clearFilterButton.addEventListener("click", () => {
  filterForm.reset();
  applyFilters();
});

selectAllCheckbox.addEventListener("change", (event) => {
  const shouldSelectAll = event.target.checked;
  filteredProducts.forEach((product) => {
    if (shouldSelectAll) {
      selectedIds.add(product.id);
    } else {
      selectedIds.delete(product.id);
    }
  });
  renderProducts();
});

batchPublishButton.addEventListener("click", () => {
  products = products.map((product) => (selectedIds.has(product.id) ? { ...product, status: "全數上架" } : product));
  applyFilters();
  applyStoreProductFilters();
});

batchUnpublishButton.addEventListener("click", () => {
  products = products.map((product) => (selectedIds.has(product.id) ? { ...product, status: "全數下架" } : product));
  applyFilters();
  applyStoreProductFilters();
});

batchDeleteButton.addEventListener("click", () => {
  openConfirmDialog({
    title: "批次刪除商品",
    message: "確定要刪除已選取的商品嗎？此操作將刪除商品及其所有款式資料。",
    confirmLabel: "確定刪除",
    onConfirm: () => {
      products = products.filter((product) => !selectedIds.has(product.id));
      stores = stores.map((store) => ({
        ...store,
        productIds: store.productIds.filter((id) => !selectedIds.has(id)),
      }));
      selectedIds = new Set();
      syncCategoryOptions();
      applyFilters();
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

addProductButton.addEventListener("click", () => {
  window.alert("Prototype 階段尚未製作新增商品與商品詳情頁。");
});

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

  const exportRows = [
    ["訂單編號", "訂單日期", "訂單狀態", "門市", "客戶名稱", "金額"],
    ["A20260428001", startDate, orderStatus, "台北門市", "王小明", "125000"],
    ["A20260428002", endDate, orderStatus, "新竹門市", "陳小華", "68000"],
  ];

  downloadCsv(`orders_${startDate}_${endDate}.csv`, exportRows);
  exportStatus.textContent = "CSV 匯出成功。";
});

addStoreButton.addEventListener("click", () => {
  storeForm.reset();
  storeFormStatus.textContent = "";
  storeDialog.showModal();
});

storeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (storeDialog.returnValue === "cancel" || event.submitter?.value === "cancel") {
    storeDialog.close("cancel");
    return;
  }

  const name = storeNameInput.value.trim();
  const code = storeCodeInput.value.trim();
  if (!name || !code) {
    storeFormStatus.textContent = "請填寫門市名稱與門市代碼。";
    return;
  }

  stores.unshift({
    id: Date.now(),
    name,
    code,
    updatedAt: "2026/04/28",
    productIds: [],
  });
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
  const shouldSelect = event.target.checked;
  filteredStoreProducts.forEach((product) => {
    if (shouldSelect) {
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
  store.updatedAt = "2026/04/28";
  storeSaveStatus.textContent = "門市商品設定已儲存。";
  renderStores();
});

addCategoryButton.addEventListener("click", () => {
  categoryForm.reset();
  categoryFormStatus.textContent = "";
  categoryDialog.showModal();
});

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (categoryDialog.returnValue === "cancel" || event.submitter?.value === "cancel") {
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
  if (tagDialog.returnValue === "cancel" || event.submitter?.value === "cancel") {
    tagDialog.close("cancel");
    return;
  }

  const name = tagNameInput.value.trim();
  const sku = tagSkuInput.value.trim();
  const closeDate = tagCloseDateInput.value;
  const category = getCurrentTagCategory();

  if (!name || !sku) {
    tagFormStatus.textContent = "請填寫標籤名稱與特殊編碼 / SKU。";
    return;
  }

  if (editingTag) {
    editingTag.name = name;
    editingTag.sku = sku;
    editingTag.closeDate = closeDate;
    editingTag.image = tempTagImage;
  } else {
    category.tags.unshift({
      id: Date.now(),
      name,
      sku,
      closeDate,
      image: tempTagImage,
    });
  }

  renderTags();
  tagDialog.close("confirm");
});

syncCategoryOptions();
applyFilters();
updateSelectionSummary();
renderStores();
renderTagCategories();
renderTags();
startDateInput.value = "2026-04-01";
endDateInput.value = "2026-04-30";
