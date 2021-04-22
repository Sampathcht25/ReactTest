import React from "react";
import {DisplayComments} from "../components/DisplayComments";
import {shallow} from "enzyme";

describe("DisplayComments Component", () => {
    let wrapper:any;
    beforeEach(()=>{
         wrapper = shallow(<DisplayComments />)
    })
    it("snapshot update", () => {
        expect(wrapper).toMatchSnapshot();
    })
})