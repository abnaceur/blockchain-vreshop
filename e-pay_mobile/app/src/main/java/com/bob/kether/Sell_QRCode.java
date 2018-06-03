package com.bob.kether;

import android.content.Intent;
import android.graphics.Bitmap;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class Sell_QRCode extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sell__qrcode);

        Intent intent = getIntent();
        Bitmap qrcode = (Bitmap) intent.getParcelableExtra("qrcode");
        Boolean eth_contract = intent.getExtras().getBoolean("eth_contract");

        // Display QRCode
        ImageView imageView = (ImageView) findViewById(R.id.qrcode);
        imageView.setImageBitmap(qrcode);

        // Display boolean generate contract
        String generate_contract = "Do not generate Etherum contract";
        if (eth_contract == true)
            generate_contract = "Generate Etherum contract";
        TextView textView = (TextView) findViewById(R.id.ethContract);
        textView.setText(generate_contract);
    }
}
