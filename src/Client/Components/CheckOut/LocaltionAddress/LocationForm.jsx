import React from "react";
import useLocationForm from "./useLocationForm";
import Select from "react-select";

function LocationForm() {
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;

  return (
        <form
            onSubmit={onSubmit}
            className=""
            >
            <div className="col-md-12" style={{paddingRight : '0px', paddingLeft: '0px'}}>
                <div class="row">
                    <div className="col-md-4" style={{paddingTop : '1rem'}}>
                        <Select
                        name="cityId"
                        key={`cityId_${selectedCity?.value}`}
                        isDisabled={cityOptions.length === 0}
                        options={cityOptions}
                        onChange={(option) => onCitySelect(option)}
                        placeholder="Tỉnh/Thành"
                        defaultValue={selectedCity}
                        />
                    </div>
                    <div className="col-md-4" style={{paddingTop : '1rem'}}>
                        <Select
                        name="districtId"
                        key={`districtId_${selectedDistrict?.value}`}
                        isDisabled={districtOptions.length === 0}
                        options={districtOptions}
                        onChange={(option) => onDistrictSelect(option)}
                        placeholder="Quận/Huyện"
                        defaultValue={selectedDistrict}
                        />
                    </div>
                    <div className="col-md-4" style={{paddingTop : '1rem'}}>
                        <Select
                        name="wardId"
                        key={`wardId_${selectedWard?.value}`}
                        isDisabled={wardOptions.length === 0}
                        options={wardOptions}
                        placeholder="Phường/Xã"
                        onChange={(option) => onWardSelect(option)}
                        defaultValue={selectedWard}
                        />
                    </div>
                    <div className="col-12" style={{paddingTop : '1rem'}}>
                        <input type="text" class="form-control" id=""  placeholder="địa chỉ cụ thể (số nhà, thôn xóm)" />
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                </div>
            </div>
        </form>
  );
}

export default LocationForm;
