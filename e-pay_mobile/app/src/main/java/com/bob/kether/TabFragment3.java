package com.bob.kether;


import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;


/**
 * A simple {@link Fragment} subclass.
 */
public class TabFragment3 extends Fragment {

    String[] contract_templates = {
            "Company Creation",
            "Health Insurance",
            "Automotive Insurance",
            "Renting",
            "Debt",
            "Job",
            "Property Transfer",
            "Money Transfer",
            "Bet",
            "NGO Donation on condition",
            "Mortgage",
            "Challenge"
    };

    android.widget.ListView list_contracts;

    public TabFragment3() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_tab_fragment3, container, false);

        // Handle List of templates of contracts in ListView (fragment3)
        list_contracts = (android.widget.ListView) view.findViewById(R.id.frag3_listView);
        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(getActivity(),
                android.R.layout.simple_list_item_1, contract_templates);
        list_contracts.setAdapter(arrayAdapter);
        list_contracts.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(getActivity(), HomemadeContract.class);
                if (position <= contract_templates.length - 1)
                    intent.putExtra("contract", contract_templates[position]);
                startActivity(intent);
            }
        });
        return view;
    }

}
