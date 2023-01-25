const DEFAULT_OFFSET_PAYLOAD = 0;
const DECIMAL_REDIX = 10;
const DEFAULT_CURRENT_PAGE = 1;
const INTERNAL_ERROR_CODE = 'INTERNAL_ERROR';
const DEFAULT_LIMIT = 10;
const PAGE_LIMITS = [10, 20, 30];

enum CALLBACK_CODES {
  'GET_ALL' = 'GET_ALL',
  'GET_SINGLE' = 'GET_SINGLE',
  'CREATE' = 'CREATE',
  'UPDATE' = 'UPDATE',
  'PARTIAL_UPDATE' = 'PARTIAL_UPDATE',
  'DELETE' = 'DELETE',
  'IMAGE_UPLOAD' = 'IMAGE_UPLOAD',
  'IMAGE_REMOVE' = 'IMAGE_REMOVE',
  'INTERNAL' = 'INTERNAL',
}

const CONSTANTS = {
  EMPTY_REGEX: / /g,
  SLUG_REGEX: /^[\da-z-]*$/,
  SLUG_REPLACE_REGEX: /[^\da-z-]/gi,
};

const DEFAULT_PERMISSIONS = {
  list: true,
  add: true,
  delete: true,
  partialUpdate: true,
  update: true,
};

const TRANSLATION_PAIRS_COMMON = {
  confirmationRequired: 'Confirmation Required',
  permanentlyDelete: 'You are about to permanently delete the',
  lossOfData:
    'This action can lead to data loss. To prevent accidental actions we ask you to confirm your intention.',
  pleaseType: 'Please type',
  toProceedOrCancel: 'to processed or close this modal to cancel.',
  confirm: 'Confirm',
  'common:actions': 'Actions',
  'common:cancel': 'Cancel',
  page: 'Page',
  next: 'Next',
  previous: 'Previous',
  indicatesRequired: 'Indicates fields are required',
  addButtonText: 'Add',
  editButtonText: 'Edit',
  cancelButtonText: 'Cancel',
  yesButtonText: 'Yes',
  deleteButtonText: 'Delete',
  saveButtonText: 'Save',
  showing: 'Showing',
  of: 'of',
  typeHerePlaceholder: 'Type Here',
};

const TRANSLATION_PAIRS_WIDGET = {
  'widget.name': 'Name',
  'widget.namePlaceholder': 'Enter name',
  'widget.nameRequired': 'Name is required',
  'widget.widgetTitle': 'Widget Title',
  'widget.widgetTitlePlaceholder': 'Enter Widget Title',
  'widget.widgetTitleRequired': 'Widget Title is required',
  'widget.itemsType': 'Items Type',
  'widget.itemsTypePlaceholder': 'Select Items Type',
  'widget.widgetType': 'Widget Type',
  'widget.widgetTypeRequired': 'Widget Type is required',
  'widget.color': 'Color',
  'widget.code': 'Code',
  'widget.codePlaceholder': 'Enter code',
  'widget.codeRequired': 'Code is required',
  'widget.webPerRow': 'Web Per Row',
  'widget.webPerRowPlaceholder': 'Enter web per row',
  'widget.mobilePerRow': 'Mobile Per Row',
  'widget.mobilePerRowPlaceholder': 'Enter mobile per row',
  'widget.tabletPerRow': 'Tablet Per Row',
  'widget.tabletPerRowPlaceholder': 'Enter tablet per row',
  'widget.mobileItems': 'Mobile Items',
  'widget.webItems': 'Web Items',
  'widget.searchPlaceholder': 'Search Widgets...',
  'widget.autoPlay': 'Auto Play',
  'widget.tableName': 'Name',
  'widget.tableCode': 'Code',
  'widget.tableActive': 'Active',
  'widget.addWidgetTitle': 'Add Widget',
  'widget.updateWidgetTitle': 'Update Widget',
  'widget.webPerRowRequired': 'Web Per Row is required',
  'widget.tabletPerRowRequired': 'Tablet Per Row is required',
  'widget.mobilePerRowRequired': 'Mobile Per Row is required',
  'widget.tabDeleteTitle': 'Are you sure you want to delete this tab?',
  'widget.widgetTitleInfo': 'HTML is supported',
  'widget.minPerRow': 'Value must be greater than zero',
  'widget.actionsLabel': 'Actions',
};
const TRANSLATION_PAIRS_ITEM = {
  'item.title': 'Title',
  'item.titlePlaceholder': 'Enter title',
  'item.subtitle': 'Subtitle',
  'item.subTitlePlaceholder': 'Enter Subtitle',
  'item.altText': 'Alt Text',
  'item.altTextPlaceholder': 'Enter alt text',
  'item.link': 'Link',
  'item.linkPlaceholder': 'Enter link',
  'item.image': 'Image',
  'item.uploadFile': 'Upload File',
  'item.dragDrop': 'or drag and drop',
  'item.allowedFormat': 'PNG, JPG, SVG up to 2 MB',
  'item.srcset': 'Srcset',
};
const TRANSLATION_PAIRS_PAGE = {
  'page.name': 'Name',
  'page.namePlaceholder': 'Enter name',
  'page.nameRequired': 'Name is required',
  'page.code': 'Code',
  'page.codePlaceholder': 'Enter code',
  'page.codeRequired': 'Code is required',
  'page.slug': 'Slug',
  'page.slugPlaceholder': 'Enter Slug',
  'page.slugRequired': 'Slug is required',
  'page.addPageTitle': 'Add Page',
  'page.updatePageTitle': 'Update Page',
  'page.searchPages': 'Search Pages...',
  'page.tableName': 'Name',
  'page.tableCode': 'Code',
  'page.widgets': 'Widgets',
  'page.actionsLabel': 'Actions',
};
export {
  CONSTANTS,
  CALLBACK_CODES,
  DECIMAL_REDIX,
  DEFAULT_CURRENT_PAGE,
  DEFAULT_OFFSET_PAYLOAD,
  INTERNAL_ERROR_CODE,
  DEFAULT_PERMISSIONS,
  TRANSLATION_PAIRS_COMMON,
  DEFAULT_LIMIT,
  PAGE_LIMITS,
  TRANSLATION_PAIRS_WIDGET,
  TRANSLATION_PAIRS_ITEM,
  TRANSLATION_PAIRS_PAGE,
};
