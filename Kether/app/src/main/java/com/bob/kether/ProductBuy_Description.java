package com.bob.kether;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.ViewGroup;
import android.widget.TextView;

public class ProductBuy_Description extends AppCompatActivity {

    public TextView description;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_buy__description);

        Intent inputIntent = getIntent();
        // set product description in right view
        description = (TextView) findViewById(R.id.productBuy_description);
        description.setText(inputIntent.getStringExtra("Extra"));
        // set product size to WRAP_CONTENT
        description.getLayoutParams().height = ViewGroup.LayoutParams.WRAP_CONTENT;

    }
}
