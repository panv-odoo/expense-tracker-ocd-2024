import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboard_item/dashboard_item";

class AwesomeDashboard extends Component {
    static template = "expense_tracker_dashboard.ExpenseDashboard";
    static components = { Layout, DashboardItem};

    setup() {

        this.action = useService("action");
        this.items = registry.category("awesome_dashboard").getAll();
        this.display = {
            controlPanel: {},
        };
    }

    openExpenseView() {
        this.action.doAction("expense_tracker.action_personal_expense");
    }

    openCategories() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Categories",
            res_model: "expense.category",
            views: [
                [false, "list"],
                [false, "form"],
            ],
        });
    }
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
