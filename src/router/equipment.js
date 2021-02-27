// 保障装备
import layout from '@/layout/index';
export default {
 path: '/equipment',
 component: layout,
 meta: {
  name: '保障装备',
 },
 children: [
    // {
    //     path: 'plan-declare',
    //     name: 'security-equipment-plan-declare',
    //     meta: [{name: '计划申报', parentName: '保障装备'}],
    //     component: () => import('@/views/equipment/planDeclare/index.vue')
    //    },
       {
        path: 'record',
        name: 'security-equipment-in-stock-register',
       
        meta: [{name: '入库登记', parentName: '保障装备'}],
        component: () => import('@/views/equipment/inStockRegister/index.vue')
       },
     
       {
        path: 'inventory',
        name: 'security-equipment-storage-equipment',
        
        meta: [{name: '在库装备', parentName: '保障装备'}],
        component: () => import('@/views/equipment/storageEquipment/index.vue')
       },
       {
        path: 'delete/list',
        name: 'teaching-equipment-plan-declare',
        meta: [{name: '删除列表', parentName: '保障装备', path: '/delete-list'}],
        component: () => import('@/views/equipment/storageEquipment/deleteList.vue')
       },
       {
         path: 'receive/record',
         name: 'security-equipment-receive-record',
         meta: [{name: '请领记录', parentName: '保障装备'}],
         component: () => import('@/views/equipment/receiveRecord/index.vue')
        },
        {
         path: 'receive/audit',
         name: 'security-equipment-receive-examine',
         meta: [{name: '请领审核', parentName: '保障装备'}],
         component: () => import('@/views/equipment/receiveExamine/index.vue')
        },
       {
        path: 'borrow/record',
        name: 'security-equipment-borrow-record',
       
        meta: [{name: '借用记录', parentName: '保障装备'}],
        component: () => import('@/views/equipment/borrowRecord/index.vue')
       },
       {
        path: 'borrow/audit',
        name: 'security-equipment-borrow-examine',
        
        meta: [{name: '借用审核', parentName: '保障装备'}],
        component: () => import('@/views/equipment/borrowExamine/index.vue')
       },
     
       {
        path: 'repair/record',
        name: 'security-equipment-repair-record',
       
        meta: [{name: '维修记录', parentName: '保障装备'}],
        component: () => import('@/views/equipment/repairRecord/index.vue')
       },
     
       {
        path: 'repair/audit',
        name: 'security-equipment-repair-examine',
       
        meta: [{name: '维修审核', parentName: '保障装备'}],
        component: () => import('@/views/equipment/repairExamine/index.vue')
       },
     
       {
        path: 'scrap/record',
        name: 'security-equipment-scrap-record',
        
        meta: [{name: '报废记录', parentName: '保障装备'}],
        component: () => import('@/views/equipment/scrapRecord/index.vue')
       },
       {
        path: 'scrap/audit',
        name: 'security-equipment-scrap-examine',
       
        meta: [{name: '报废审核', parentName: '保障装备'}],
        component: () => import('@/views/equipment/scrapExamine/index.vue')
       },
       {
        path: 'check/log',
        name: 'security-equipment-inventory-journal',
       
        meta: [{name: '盘点日志', parentName: '保障装备'}],
        component: () => import('@/views/equipment/inventoryJournal/index.vue')
       },
       {
        path: 'attr',
        name: 'security-equipment-maintain-manage',
       
        meta: [{name: '维护管理', parentName: '保障装备'}],
        component: () => import('@/views/equipment/maintainManage/index.vue')
       },
 ]
}

