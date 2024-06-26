// UI
import { ActionIcon, Checkbox, Menu } from "polar_ui";
import { IconChecklist } from "@tabler/icons-react";

const TaskList = () => {
    return (
        <Menu
            menuLauncher={<ActionIcon variant="light" size={"lg"} radius="md"><IconChecklist /></ActionIcon>}
            position="absolute"
            bottom="1rem"
            right="1rem"
            placement="top-center"
            triggerOffset={20}
            width={"200px"}
        >
            <Menu.Label>Task List</Menu.Label>
            <Menu.Item>
                <Checkbox label="create input checkbox component" />
            </Menu.Item>
        </Menu>
    )
};

export default TaskList;