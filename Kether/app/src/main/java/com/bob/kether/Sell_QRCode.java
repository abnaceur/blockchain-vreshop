package com.bob.kether;

import android.content.Intent;
import android.graphics.Bitmap;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

public class Sell_QRCode extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sell__qrcode);
        Intent intent = getIntent();
        Bitmap qrcode = (Bitmap) intent.getParcelableExtra("qrcode");
        ImageView imageView = (ImageView) findViewById(R.id.qrcode);
        imageView.setImageBitmap(qrcode);
    }
}
