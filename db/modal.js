var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var oliveYoungSchema = new Schema({
    product_ref_code: String,
    brand: String,
    title: String,
    origin_price: Number,
    minimum_price: Number,
    sale_price: Number,
    duration_sale_full: String,
    duration_sale_start: String,
    duration_sale_end: String,
    coupon_price: Number,
    duration_coupon_full: String,
    duration_coupon_start: String,
    duration_coupon_end: String,
    percent: Number,
    tags: [String],                 //상품에 달린 태그
    categorys: [String],            //카테고리 루트
    product_img: String,            //상품 이미지
    gift_info: String,              //사은품 정보
    volume: String,                 //용량 또는 중량
    target_spec: String,            //제품 주요 사양
    period_of_use: String,          //사용기간(개봉 후 사용기간)
    how_to_use: String,             //사용방법
    manufacturer: String,           //제조자 및 제조판매업자
    manufacturing_country: String,  //제조국
    all_components: String,         //화장품법에 따라 기재해야 하는 모든 성분
    is_safety: String,              //기능성 화장품 식품의약품안전처 심사필 여부
    precautions: String,            //사용시 주의사항
    reg_date: String,               //등록날짜
    update_date: String,            //상품 업데이트 날짜
});

module.exports = oliveYoungSchema;
