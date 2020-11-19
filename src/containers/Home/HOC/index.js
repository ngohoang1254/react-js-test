import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

let FormModal = WithModal(SanPham);

export default class HOC extends Component {
  render() {
    return (
      <div>
        <FormModal />
      </div>
    );
  }
}
