const { storage } = require("../data/storage");

class Storage {
  static getProducts() {
    return storage.get("products");
  }

  static getProductById(id) {
    return storage
      .get("products")
      .find({ id: Number(id) })
      .value();
  }

  static getPurchases() {
    return storage.get("purchases");
  }

  static getPurchaseById(id) {
    const purchaseInfo = storage
      .get("purchases")
      .find({ id: Number(id) })
      .value();
    if (purchaseInfo == false) {
      console.log(`${id} not found`);
    }
    return purchaseInfo;
  }

  static getProductByEmail(email) {
    const prodInfo = storage.get("purchases").find({ email }).value();
    if (prodInfo == false) {
      console.log(`Product with email ${email} not found`);
    }
    return prodInfo;
  }

  static checkout(checkoutForm) {
    try {
      //   if (
      //     !checkoutForm.user ||
      //     !checkoutForm.user.name ||
      //     !checkoutForm.user.email
      //   ) {
      //     console.log("Missing user information");
      //   }
      if (
        !checkoutForm.shoppingCart ||
        checkoutForm.shoppingCart.length === 0
      ) {
        console.log("Missing shopping cart");
      }
      let currentPurchases = storage.get("purchases");
      const id = currentPurchases.size() + 1;
      console.log(id);
      //const { receipt, total } = this.createReceipt(checkoutForm);
      const createdAt = new Date().toISOString();

      const purchase = {
        id,
        name: checkoutForm.checkoutForm.name,
        email: checkoutForm.checkoutForm.email,
        shoppingCart: checkoutForm.checkoutForm.shoppingCart,
        // order: checkoutForm.shoppingCart,
        // total,
        // createdAt,f
        // receipt,
      };
      console.log(checkoutForm.checkoutForm);
      console.log(Object.keys(checkoutForm));
      currentPurchases.push(purchase).write();
      return purchase;
    } catch (e) {
      console.log(e.message);
    }
  }

  //   static createReceipt(checkoutForm) {
  //     let lines = [
  //       `${checkoutForm.user.name} avaialable at email: ${checkoutForm.user.email}`,
  //     ];
  //     let totalPrice = 0;

  //     let addedIds = new Set();
  //     const productRow = checkoutForm.shoppingCart?.map((i) => {
  //       if (item.id == false) {
  //         console.log("Missing ID");
  //       }
  //       if (item.quantity == false) {
  //         console.log("Mssing quantity");
  //       }
  //       if (addedIds.has(item.itemId)) {
  //         console.log("duplicate product");
  //       } else {
  //         addedIds.add(item.itemId);
  //       }
  //       const prodInfo = this.getProductById(item.itemId);
  //       const itemTotalCost = this.Number(
  //         productInfo.price * item.quantity + "e2" + "e-2"
  //       );

  //       totalPrice += itemTotalCost;
  //       lines.push(
  //         `${item.quantity} total ${prodInfo.name} purchase for $${prodInfo.price} for total: $${itemTotalCost}`
  //       );
  //       return {
  //         ...prodInfo,
  //         quantity: item.quantity,
  //         totalPrice: itemTotalCost,
  //       };
  //     });

  //     //totalPrice = this.Math(totalPrice + "e2") + "e-2";
  //     lines.push(`Total before taxes: $${totalPrice}`);
  //     lines.push(
  //       `Total after taxes: $${this.Math(totalPrice * 1.0875 + "e2") + "e-2"}`
  //     );

  //     return {
  //       receipt: {
  //         userInfo: {
  //           name: checkoutForm.user.name,
  //           email: checkoutForm.user.email,
  //         },
  //         lines,
  //         productRow,
  //       },
  //       totalPrice,
  //     };
  //   }
}

module.exports = Storage;
