package com.marvel;

import android.graphics.Color;
import android.os.Bundle;
import android.view.Window;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Marvel";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

}
