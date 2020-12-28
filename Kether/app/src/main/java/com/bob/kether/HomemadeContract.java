package com.bob.kether;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class HomemadeContract extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        String str = intent.getExtras().getString("contract");

        if (str.equals("Automotive Insurance"))
            setContentView(R.layout.insurance_contract);
//        else if (str.equals("Renting Contract"))
//            setContentView(R.layout);
//        else if (str.equals("Debt Contract"))
//            setContentView(R.layout);
//        else if (str.equals("Job Contract"))
//            setContentView(R.layout);
//        else if (str.equals("Property Transfer"))
//            setContentView();
//        else if (str.equals("Money Transfer"))
//            setContentView();
        else
            setContentView(R.layout.activity_homemade_contract);

    }
}
