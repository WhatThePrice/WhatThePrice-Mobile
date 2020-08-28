import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

function* saveProduct({ data }) {
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append("product_url", data.product_url);
    formData.append("product_name", data.product_name);

    const { response, error } = yield call(api.saveProduct, formData, headers);
    console.log("SAVE PRODUCT SAGA IS", response, error);

    if (response && response.data.status === 'success'){
        yield put(Actions.saveProductSuccess(response.data))
    }
    if (error) {
        yield put(Actions.saveProductFail(error))
    }
}

function* watchSaveProduct() {
    yield takeLatest(Actions.SAVE_PRODUCT, saveProduct);
}

export default function* submit() {
    yield all([fork(watchSaveProduct)]);
}