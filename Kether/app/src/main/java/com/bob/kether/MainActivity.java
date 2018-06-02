package com.bob.kether;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void goToSignIn(View view) {
        Log.d("ok", "ok");
    }

    public void goToHome(View view) {
        Log.d("ok2", "ok2");
    }
}

