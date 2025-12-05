import { type I18nOptions } from 'vue-i18n'

/**
 * for simplicity reasons the language variable are defined
 * directly in the configuration file, normally they will be
 * defined in extra files (e.g. json)
 */
const i18nConfiguration: I18nOptions = {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      buttonTexts: {
        // adjusted text (consistency)
        addItem: 'Add Item',
        // adjusted text (correction)
        checkout: 'Proceed to Checkout',
        removeAllItems: 'Clear Cart',
        // adjusted text (correction)
        shippingCalculation: 'Calculate Shipping',
      },
      imageAlternativeTexts: {
        altTextCartItemDeleteAction: 'delete cart item',
      },
      informationsTexts: {
        checkoutInformation: 'Checkout is currently not available.',
      },
      productInformations: {
        productColor: 'Color:',
        productSize: 'Size:',
      },
      sectionItemLineTitles: {
        lineTitleShipping: 'Shipping',
        lineTitleSubtotals: 'Subtotals:',
        lineTitleTax: 'Tax (20%)',
        lineTitleTotals: 'Totals:',
      },
      sectionTitles: {
        sectionTotal: 'Cart Totals',
        // adjusted text (correction)
        sectionShipping: 'Calculate Shipping',
      },
      shoppingCartCaptions: {
        captionPrice: 'Prize',
        captionProduct: 'Product',
        captionQuantity: 'Quantity',
        captionTotal: 'Total',
      },
    },
  },
}

export { i18nConfiguration }
