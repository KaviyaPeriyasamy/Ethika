frappe.ui.form.on('Employee',{
    refresh: function(frm) {
        frappe.db.get_value("Declaration Form", {"employee_code": frm.doc.name}, "name").then(val => {
            if(val.message.name)
    		{
    		    frm.add_custom_button(__("View Declaration Form"),
    				() =>{ frappe.set_route('List', 'Declaration Form',
    					{'employee_code': frm.doc.name})});
    		}
    		else{
    		     frm.add_custom_button(__('Create Declaration Form'), () =>{
					frappe.route_options = {
                    "employee_code":frm.doc.name,
                   };
                   frappe.new_doc("Declaration Form");
					 });
    		}
    		})
	}})
