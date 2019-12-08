package com.example.foolbar;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.widget.Button;

import static android.os.Trace.isEnabled;

public class MyObservableButton extends Button
{
    public MyObservableButton(Context context, AttributeSet attrs)
    {
        super(context, attrs);
    }

    private IOnClickWhenEnabledListner mListner;

    public void setOnClickWhenEnabledListener(IOnClickWhenEnabledListner listener) {
        mListner = listener;
    }

    interface IOnClickWhenEnabledListner {
        public void onClickWhenEnabled();
    }

    @Override
    public boolean onTouchEvent(MotionEvent event)
    {
        if (event.getAction() == MotionEvent.ACTION_DOWN) {
            if (!isEnabled() && mListner != null) {
                mListner.onClickWhenEnabled();
            }
        }

        return super.onTouchEvent(event);
    }

}