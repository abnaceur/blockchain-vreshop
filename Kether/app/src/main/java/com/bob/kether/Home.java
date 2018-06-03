package com.bob.kether;

import android.content.Intent;
import android.graphics.Bitmap;
import android.media.Image;
import android.provider.MediaStore;
import android.support.annotation.RequiresPermission;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.encoder.QRCode;

public class Home extends AppCompatActivity {

    public int REQUEST_IMAGE_CAPTURE = 1;
    public int FRAG2_PICTURE_SIZE = 200;
    public int SCAN_QRCODE = 12;
    public int QRCODE_SIZE = 200;
    public Bitmap ThePhoto;
    public Bitmap qrcode;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);


        TabLayout tabLayout = (TabLayout) findViewById(R.id.home_tab);
        tabLayout.addTab(tabLayout.newTab().setText("Buy"));
        tabLayout.addTab(tabLayout.newTab().setText("Sell"));
        tabLayout.addTab(tabLayout.newTab().setText("New contract"));
        //set tab gravity to fill the entire layout
        tabLayout.setTabGravity(TabLayout.GRAVITY_FILL);

        // On utilise le PagerAdapter pour gérer les fragments à afficher
        // Chaque page est représentée par son propre fragment
        final ViewPager viewPager = (ViewPager) findViewById(R.id.home_viewPager);
        final PagerAdapter pagerAdapter = new PagerAdapter(
                getSupportFragmentManager(),
                tabLayout.getTabCount()
        );
        viewPager.setAdapter(pagerAdapter);

        // Setting a Listener for clicks
        viewPager.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(tabLayout));
        tabLayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                viewPager.setCurrentItem(tab.getPosition());
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {
            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {
            }
        });
    }

    // PagerAdapter permet d'afficher chaque fragment correspondant à la position dans les tabs
    public class PagerAdapter extends FragmentStatePagerAdapter {
        int mNumOfTabs;

        public PagerAdapter(FragmentManager fm, int NumOfTabs) {
            super(fm);
            this.mNumOfTabs = NumOfTabs;
        }

        @Override
        public Fragment getItem(int position) {
            switch (position) {
                case 0:
                    return new TabFragment1();
                case 1:
                    return new TabFragment2();
                case 2:
                    return new TabFragment3();
                default:
                    return null;
            }
        }

        @Override
        public int getCount() {
            return mNumOfTabs;
        }
    }

    // Generate a QRCode from the string passed in argument
//    Bitmap TextToImageEncode(String value) throws WriterException {
//        BitMatrix bitmatrix;
//        try {
//            bitmatrix = new MultiFormatWriter().encode(value, BarcodeFormat.DATA_MATRIX.QR_CODE,
//                    QRCODE_SIZE, QRCODE_SIZE, null);
//        } catch (IllegalArgumentException Illegalargumentexception) {
//            return null;
//        }
//
//        int bitMatrixWidth = bitmatrix.getWidth();
//        int bitMatrixHeight = bitmatrix.getHeight();
//        int[] pixels = new int[bitMatrixHeight * bitMatrixWidth];
//        for (int y = 0; y < bitMatrixHeight; y++) {
//            int offset = y * bitMatrixWidth;
//
//            for(int x = 0; x < bitMatrixWidth; x++) {
//                pixels[offset + x] = bitmatrix.get(x, y) ? getResources().getColor(R.color.QRCODE_BLACK) : getResources(R.color.QRCODE_WHITE);
//            }
//        }
//        Bitmap bitmap = Bitmap.createBitmap(bitMatrixWidth, bitMatrixHeight, Bitmap.Config.ARGB_4444);
//
//            bitmap.setPixels(pixels, 0, QRCODE_SIZE, 0, 0, bitMatrixWidth, bitMatrixHeight);
//            return bitmap;
//    }

        Bitmap TextToImageEncode(String value) throws WriterException {
            BitMatrix bitMatrix;
            try {
                bitMatrix = new MultiFormatWriter().encode(value, BarcodeFormat.DATA_MATRIX.QR_CODE , 200, 200, null);
            } catch (IllegalArgumentException i) {
                return null;
            }
            int bitMatrixWidth = bitMatrix.getWidth();
            int bitMatrixHeight = bitMatrix.getHeight();

            int[] pixels = new int[bitMatrixWidth * bitMatrixHeight];
            for (int y = 0; y < bitMatrixHeight; y++) {
                int offset = y * bitMatrixWidth;
                for (int x = 0; x < bitMatrixWidth; x++) {
                    pixels[offset + x] = bitMatrix.get(x, y) ? getResources().getColor(R.color.QRCODE_BLACK) : getResources().getColor(R.color.QRCODE_WHITE);
                }
            }
            qrcode = Bitmap.createBitmap(QRCODE_SIZE, QRCODE_SIZE, Bitmap.Config.ARGB_4444);
            qrcode.setPixels(pixels, 0, QRCODE_SIZE, 0, 0, QRCODE_SIZE, QRCODE_SIZE);
            return qrcode;
        }

    // frag2 onClick sell product button
    public void frag2_Sell(View view) {
        EditText editText = (EditText) findViewById(R.id.frag2_Description);
        String description = editText.getText().toString();
        ImageView photo = (ImageView) findViewById(R.id.frag2_img);
        int description_width = photo.getWidth();
        EditText editText1 = (EditText) findViewById(R.id.frag2_Price);
        String price = editText1.getText().toString();
        ImageView imageView = (ImageView) findViewById(R.id.frag2_qrcode);
        final CheckBox checkBox = (CheckBox) findViewById(R.id.frag2_ethContract);

        if (description.length() == 0) {
            Toast.makeText(this, "Add Description", Toast.LENGTH_LONG).show();
            return;
        } else if (price.length() == 0) {
            Toast.makeText(this, "Add a price first", Toast.LENGTH_LONG).show();
            return;
        } else if (description_width == 0) {
            Toast.makeText(this, "Take a picture first", Toast.LENGTH_LONG).show();
            return;
        } else {
            try {
                // Generate qrcode
                qrcode = TextToImageEncode(description);
//                imageView.setImageBitmap(qrcode);
//                imageView.getLayoutParams().width = qrcode.getWidth();
//                imageView.getLayoutParams().height = qrcode.getHeight();

                // Show QRCODE in new activity
                boolean eth = checkBox.isChecked();
                Intent intent = new Intent(this, Sell_QRCode.class);
                intent.putExtra("qrcode", qrcode);
                intent.putExtra("eth_contract", eth);
                startActivity(intent);
            } catch (WriterException e) {
                e.printStackTrace();
            }
        }
    }

    // frag2 onClick take a picture of the product to sell
    public void frag2_TakePicture(View view) {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (intent.resolveActivity(getPackageManager()) != null)
            startActivityForResult(intent, REQUEST_IMAGE_CAPTURE);
    }

    // scan QRCode with ZXing application
    public void frag1_scanQRCode(View view) {
        Intent intent = new Intent("com.google.zxing.client.android.SCAN");
        intent.putExtra("SCAN_MODE", "QR_CODE_MODE");
        startActivityForResult(intent, SCAN_QRCODE);
    }

    // frag2 get picture of the frag2_TakePicture method and display it on the ImageView
    // retrive QRCode scan and decode it
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        ImageView imageView = (ImageView) findViewById(R.id.frag2_img);
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            // Retrieve the picture from the extras
            Bundle extras = data.getExtras();
            // set the ImageView picture
            ThePhoto = (Bitmap) extras.get("data");
            imageView.setImageBitmap(ThePhoto);
            // set size
            imageView.getLayoutParams().height = FRAG2_PICTURE_SIZE;
            imageView.getLayoutParams().width = FRAG2_PICTURE_SIZE;
        } else if (requestCode == SCAN_QRCODE) {
            if (resultCode == RESULT_OK) {
                String contents = data.getStringExtra("SCAN_RESULT");
                String format = data.getStringExtra("SCAN_RESULT_FORMAT");
                // Handle successful scan
                Toast.makeText(this, "OK, Successful scan", Toast.LENGTH_LONG).show();
                Intent intent = new Intent(this, ProductBuy_Description.class);
                intent.putExtra("Extra", contents);
                startActivity(intent);
            } else if (resultCode == RESULT_CANCELED) {
                // Handle cancel
                Toast.makeText(this, "Error with zxing app", Toast.LENGTH_LONG).show();
            }
        }
    }


}
