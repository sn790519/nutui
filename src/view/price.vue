<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="商品价格组件，支持小数点前后应用不同样式、千位分隔、人民币符号等功能。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <!-- <pre><code v-highlight v-text="demo"></code></pre>
        <h5>展示效果</h5> -->
        <h6>带人民币符号，且千位分隔</h6>
        <nut-price :price="1010" :needSymbol="true" :thousands="true"></nut-price><br><br>
        <nut-codebox :code="demo1"></nut-codebox>        

        <h6>不带人民币符号，关闭千位分隔，小数点后显示一位</h6>
        <nut-price :price="1010" :needSymbol="false" :thousands="false" :decimalDigits="1"></nut-price>
        <nut-codebox :code="demo2"></nut-codebox>  
            
        
        <br><br>
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>price</td>
              <td>价格数量</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>needSymbol</td>
              <td>是否需要加上人民币符号</td>
              <td>Boolean</td>
              <td>true</td>
              <td>--</td>
            </tr>
            <tr>
              <td>decimalDigits</td>
              <td>小数位位数</td>
              <td>Number</td>
              <td>2</td>
              <td>--</td>
            </tr>
            <tr>
              <td>thousands</td>
              <td>是否按照千分号形式显示</td>
              <td>Boolean</td>
              <td>false</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>


</template>

<script>
export default {
    data(){
      return {
        demo1:`<nut-price  
:price="1010" 
:needSymbol="true" 
:thousands="true"
></nut-price>`,
        demo2:`<nut-price  
:price="1010" 
:needSymbol="false" 
:thousands="false" 
:decimalDigits="1"
></nut-price>`
      }
    },
    methods:{
    }
}
</script>

<style>

</style>
