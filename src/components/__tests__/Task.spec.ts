import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TaskItem from "../TaskItem.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const task = {
      name: "Do your work",
      id: 1,
    };

    const wrapper = mount(TaskItem, { props: { task } });
    expect(wrapper.text()).toContain("Do your work");
  });
});
