<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex">
    <div class="w-1/2 h-screen bg-black">
      <img src="../.././images/6.png" class="w-full h-screen" />
    </div>
    <div class="flex items-center justify-center flex-col ml-28">
      <div class="text-4xl font-extrabold">登录，即刻创造您的应用</div>
      <div class="flex">
        <div class="w-24 h-10 text-center mt-10 mr-10">手机号登录</div>
        <div class="w-24 h-10 text-center mt-10">账号密码登录</div>
      </div>
      <input type="text" placeholder="账号" class="pl-[2ch] mt-3 border h-10 w-72 rounded-xl" />
      <div>
        <input
          type="password"
          placeholder="密码"
          class="pl-[2ch] mt-3 border h-10 w-72 rounded-xl"
        />
      </div>
      <div class="flex flex-col items-start gap-4 mt-3">
        <!-- 服务协议和隐私政策复选框 -->
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            class="form-checkbox h-4 w-4 text-blue-600"
            required
          />
          <label for="terms" class="text-sm">
            我已阅读并同意
            <a href="/service-agreement" class="text-blue-600 hover:underline">服务协议</a>
            和
            <a href="/privacy-policy" class="text-blue-600 hover:underline">隐私政策</a>
          </label>
        </div>
        <button
          type="submit"
          class="text-sm  bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 h-10 w-72" 
        >
          <p class="text-cyan-50 ">登  录</p>
        </button>
      </div>
      <div class="text-sm mt-3">
          <span class="text-gray-600 mr-3">还未注册?</span
          ><span class="text-blue-600">立即注册</span>
        </div>  
    </div>
  </div>
</template>
