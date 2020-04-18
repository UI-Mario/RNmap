package com.rntest09.wxapi;

import android.app.Activity;
// import android.content.Intent;
import android.os.Bundle;
import com.theweflex.react.WeChatModule;
// import com.rntest09.MainActivity;

public class WXEntryActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatModule.handleIntent(getIntent());
        finish();
    }
}