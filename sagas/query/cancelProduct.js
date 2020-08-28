import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

function* cancelProduct({ data }) {
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers = { Authorization: `Bearer ${token}` };

    const formData = new FormData();
    formData.append("product_url", data.product_url);

    const { response, error } = yield call(api.cancelProduct, formData, headers);
    console.log("CANCEL PRODUCT SAGA IS", response, error);

    if (response && response.data.status === 'success'){
        yield put(Actions.cancelProductSuccess(response.data))
    }
    if (error) {
        yield put(Actions.cancelProductFail(error))
    }
}

function* watchCancelProduct() {
    yield takeLatest(Actions.CANCEL_PRODUCT, cancelProduct);
}

export default function* submit() {
    yield all([fork(watchCancelProduct)]);
}