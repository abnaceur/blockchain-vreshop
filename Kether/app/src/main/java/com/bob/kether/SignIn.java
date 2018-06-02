package com.bob.kether;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class SignIn extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_in);
    }

    public void goToHome(View view) {
        EditText surname = (EditText) findViewById(R.id.signIn_surname);
        EditText lastname = (EditText) findViewById(R.id.signIn_lastname) ;
        EditText adress1 =  (EditText) findViewById(R.id.signIn_addres1) ;
        EditText passwd1 = (EditText) findViewById(R.id.signIn_password);
        EditText passwd2 = (EditText) findViewById(R.id.signIn_password2);
//        Log.e("C Pa 1 error lol", surn)
        if (surname.getText().toString().length() == 0) {
            Toast.makeText(this, "Add surname", Toast.LENGTH_LONG).show();
        } else if (lastname.getText().toString().length() == 0) {
            Toast.makeText(this, "Add lastname", Toast.LENGTH_LONG).show();
        } else if (adress1.getText().toString().length() == 0) {
            Toast.makeText(this, "Add Address", Toast.LENGTH_LONG).show();
        } else if (passwd1.getText().toString().length() == 0) {
            Toast.makeText(this, "Add passwd1", Toast.LENGTH_LONG).show();
        } else if (passwd2.getText().toString().length()== 0) {
            Toast.makeText(this, "Add passwd2", Toast.LENGTH_LONG).show();
        } else if (!passwd1.getText().toString().equals(passwd2.getText().toString())) {
            Toast.makeText(this, "passwords do not match", Toast.LENGTH_LONG).show();
        } else {
            Intent intent = new Intent(this, Home.class);
            startActivity(intent);
        }
    }
}
