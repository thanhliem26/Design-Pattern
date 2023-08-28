//beginer

function getPrice_bg(originalPrice, typePromotion = 'default') {
    //Giảm giá khi đặt trước sản phẩm
    if(typePromotion == 'preOrder') {
        return originalPrice * 0.8;
    }

    // Đến ngày blackFriday promotion
    if(typePromotion == 'blackFriday') {
        return originalPrice < 200 ? originalPrice * 0.8 : originalPrice - 50;
    }

    if(typePromotion == 'promotion') {
        return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 50;
    }

    if(typePromotion === 'default') {
        return originalPrice;
    }
}

//mid
const getPreOrder = (originalPrice) => {
    return originalPrice * 0.8;
}

const getBlackFriday = (originalPrice) => {
    return originalPrice < 200 ? originalPrice * 0.8 : originalPrice - 50;
}

const getPromotion = (originalPrice) => {
    return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 50;
}

const getDefault = (originalPrice) => {
    return originalPrice
}

function getPrice_md(originalPrice, typePromotion = 'default') {
    //Giảm giá khi đặt trước sản phẩm
    if(typePromotion == 'preOrder') {
        return getPreOrder(originalPrice)
    }

    // Đến ngày blackFriday promotion
    if(typePromotion == 'blackFriday') {
        return getBlackFriday(originalPrice)
    }

    if(typePromotion == 'promotion') {
        return getPromotion(originalPrice)
    }

    if(typePromotion === 'default') {
        return getDefault(originalPrice);
    }
}

//pro
const getPriceStrategyPattern = {
    preOrder: getPreOrder,
    blackFriday: getBlackFriday,
    promotion: getPromotion,
    default: getDefault,
}

function getPrice_pro(originalPrice, typePromotion = 'default') {
   return getPriceStrategyPattern[typePromotion](originalPrice)
}
console.log("🚀 ~ file: index.js:69 ~ getPrice_pro ~ getPrice_pro:", getPrice_pro(200, 'blackFriday'))