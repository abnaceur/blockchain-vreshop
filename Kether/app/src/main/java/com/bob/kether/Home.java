package com.bob.kether;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TableLayout;

public class Home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

//        TabLayout tabLayout = (TabLayout) findViewById(R.id.home_tab);
//        tableLayout.
    }

    public class PageAdapter extends FragmentStatePagerAdapter {
        public int mNumOfTabs;

        public PageAdapter(FragmentManager fm, int numOfTabs) {
            super(fm);
            this.mNumOfTabs = numOfTabs;
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

//    public void frag1_scanQRCode(View view) {
//        Log.d("ok", "ok");
//    }
}
