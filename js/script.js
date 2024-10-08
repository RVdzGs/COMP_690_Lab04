// GLOBAL VARIABLES
let customerType;
let invoiceTotal;
let discountPercent;
let discountAmount;
let newInvoiceTotal;

// DISPLAY MESSAGE TO THE USER
document.write('<h3>Welcome to the Invoice Application</h3>');

// ASK USER FOR THEIR CUSTOMER TYPE AND GET THEIR INITIAL INVOICE TOTAL
customerType = prompt('Enter your customer type (w/r)');
invoiceTotal = parseFloat(prompt('Enter the invoice total'));

// CHECK IF THE USER IS RETAIL OR WHOLESALE
if (customerType === 'r') {
    // CHECK INVOICE TOTAL AND SET DISCOUNT PERCENT
    if (invoiceTotal >= 500) {
        discountPercent = 0.25;
    } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountPercent = 0.10;
    } else {
        discountPercent = 0;
    }
} else if (customerType === 'w') {
    if (invoiceTotal >= 1000) {
        discountPercent = 0.35;
    } else if (invoiceTotal >= 500 && invoiceTotal < 1000) {
        discountPercent = 0.30;
    } else {
        discountPercent = 0.10;
    }
} else {
    discountPercent = 0;
}

// PERFORM CALCULATIONS
discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;

// DISPLAY RESULTS
if (customerType === 'r') {
    document.write('Retail Customer<br>');
} else if (customerType === 'w') {
    document.write('Wholesale Customer<br>');
} else {
    document.write('Customer type unknown<br>');
}
document.write(`Invoice Total: $${invoiceTotal}<br>`);
document.write(`Discount Percent: ${discountPercent * 100}%<br>`);
document.write(`Discount Amount: $${discountAmount.toFixed(2)}<br>`);
document.write(`Grand Total: $${newInvoiceTotal.toFixed(2)}`);