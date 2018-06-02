package com.bob.kether;

import android.content.Intent;
import android.graphics.Bitmap;
import android.media.Image;
import android.provider.MediaStore;
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
import android.widget.ImageView;

public class Home extends AppCompatActivity {

    public int REQUEST_IMAGE_CAPTURE = 1;
    public int FRAG2_PICTURE_SIZE = 200;
    public Bitmap ThePhoto;

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

    // frag2 onClick sell product button
    public void frag2_Sell(View view) {
        Log.e("C pa 1 error lol", "ok");
    }

    // frag2 onClick take a picture of the product to sell
    public void frag2_TakePicture(View view) {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (intent.resolveActivity(getPackageManager()) != null)
            startActivityForResult(intent, REQUEST_IMAGE_CAPTURE);
    }

    // frag2 get picture of the frag2_TakePicture method and display it on the ImageView
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        ImageView imageView = (ImageView) findViewById(R.id.frag2_img);
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            // Retrive the picture from the extras
            Bundle extras = data.getExtras();
            // set the ImageView picture
            ThePhoto = (Bitmap) extras.get("data");
            imageView.setImageBitmap(ThePhoto);
            // set size
            imageView.getLayoutParams().height = FRAG2_PICTURE_SIZE;
            imageView.getLayoutParams().width = FRAG2_PICTURE_SIZE;
        }
    }
}
